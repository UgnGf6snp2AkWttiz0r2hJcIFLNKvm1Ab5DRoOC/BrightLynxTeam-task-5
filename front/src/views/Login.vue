<template lang="pug">
  .reg
    h2 Авторизация
      .alert.alert-error(v-if="errors.length")
        b Пожалуйста, исправьте ошибки:
        ul
          li(v-for="error in errors") {{ error }}
      .alert.alert-success(v-if="isSuccess")
        b Авторизация прошла успешно

      form#app.wrapper(@submit="reg" action="" method="post")

        label(for="email") Электронная почта
        input#email(type="email" v-model="email")
        label(for="pass") Пароль
        input#pass(type="password" v-model="pass")
        input.btn(type="submit" value="Войти")
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        pass: '',
        errors: [],
        isSuccess: false
      }
    },
    methods: {
      reg: function (event) {
        event.preventDefault();
        this.errors = [];

        if (this.email === '') {
          this.errors.push('Заполните адрес электронной почты')
        }
        if (this.pass === '') {
          this.errors.push('Заполните пароль')
        }

        if (this.errors.length === 0) {
          axios.post('http://localhost:3000/auth/', {
            email: this.email,
            password: this.pass
          })
            .then(response => {
              const auth = response.data.auth;
              if (auth) {
                this.isSuccess = true;
              } else {
                this.errors.push('Неправильный логин или пароль')
              }
            })
            .catch(e => {
              this.errors.push(e.response.data.error)
            })
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  form
    display flex
    flex-direction column

</style>
