import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    profilePicture?: string;
    name?: string;
    subject?: string;
    description?: string;
    price?: string;
    whatsapp?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
   return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/41692419?s=460&u=22a34f9251b0fc15b3b3bbd744920f3e0e8e6bb0&v=4" alt="Joás de Brito" />
                <div>
                    <strong>Joás de Brito</strong>
                    <span>Artificial Intelligence</span>
                </div>
            </header>

            <p>
                Machine Learning Engineer with Statistics Baschelor and Ph.D in Computer Science and Mathematics
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
                