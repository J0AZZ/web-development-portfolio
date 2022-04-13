import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import {AsyncStorage} from 'react-native';

import api from '../services/api';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(){
      const [token, user] = await AsyncStorage.multiGet([
        '@ForestPub:token',
        '@ForestPub:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { user, token } = response.data;

    await AsyncStorage.multiSet([
      ['@ForestPub:token', token],
      ['@ForestPub:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@ForestPub:token', '@ForestPub:user']);

    setData({});
  }, []);

  const updateUser = useCallback(
    async (user) => {
      await AsyncStorage.setItem('@ForestPub:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve está encapsulado por um AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
