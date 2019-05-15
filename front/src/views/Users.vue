<template lang="pug">
  .users
    h2 Пользователя
    table
      tr
        th id
        th name
        th email
      tr(v-for="user in users")
        td {{user.id}}
        td {{user.name}}
        td {{user.email}}


</template>
<script>
  import axios from 'axios'

  export default {
    name: 'users',
    data() {
      return {
        users: [],

      }
    },
    methods: {
      getUsers: function () {

        axios.get('http://localhost:3000/users/', {
          email: this.email,
          password: this.pass
        })
          .then(response => {
            this.users = response.data;

          })
          .catch(e => {
            console.log(error);
          })
      }
    },
    mounted() {
      this.getUsers();
    }
  }
</script>
<style lang="stylus" scoped>
  table
    border-collapse collapse
    width 100%
  th, td
    border 1px grey solid
    padding 10px 20px
</style>
