<template>
  <div id="app">
    <b-card>
      <h2>Repositórios de J0AZZ</h2>
    </b-card>
    <b-card>
      <b-form-input v-model="filter" placeholder="Procurar"></b-form-input>
    </b-card>
    <div>
      <b-table
        stripped hover
        :fields="repo_fields"
        :items="repos"
        :filter="filter"
        label-sort-asc=""
        label-sort-desc="">
        
        <template v-slot:cell(created_at)="data">
            <div>{{new Date(data.item.created_at).toLocaleString('pt-BR', 'full')}}</div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      filter: null,
      repo_fields: [
        {"key": "name", "sortable": true, "label": "Nome", },
        {"key": "created_at", "sortable": true, "label": "Criado em"},
      ],
      repos: []
    }
  },
  mounted() {
    axios({
      method: "get",
      url: "https://api.github.com/users/J0azz/repos"
    }).then((res) => {
      this.repos = res.data
    })
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
