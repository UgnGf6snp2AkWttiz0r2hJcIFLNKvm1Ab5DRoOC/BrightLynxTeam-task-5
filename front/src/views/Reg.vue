<template lang="pug">
  .reg
    h2 Регистрация
      .alert.alert-error(v-if="errors.length")
        b Пожалуйста, исправьте ошибки:
        ul
          li(v-for="error in errors") {{ error }}
      .alert.alert-success(v-if="isSuccess")
        b Регистрация прошла успешно

      form#app.wrapper(@submit="reg" action="" method="post")
        label(for="name") Имя
        input#name(type="text" v-model="name")
        label(for="email") Электронная почта
        input#email(type="email" v-model="email")
        label(for="pass") Пароль
        input#pass(type="password" v-model="pass")
        label(for="pass2") Повторите пароль
        input#pass2(type="password" v-model="pass2")
        input(type="submit" value="Зарегистрироваться")
</template>
<script>
  import axios  from 'axios'

  export default {
    name: 'Reg',
    data () {
      return {
        email: '',
        name: '',
        pass: '',
        pass2: '',
        errors: [],
        isSuccess: false
      }
    },
    methods: {
      reg: function (event) {
        event.preventDefault();
        this.errors = [];
        if (this.name === '') {
          this.errors.push('Заполните имя')
        }
        if (this.email === '') {
          this.errors.push('Заполните адрес электронной почты')
        }
        if (this.pass === '') {
          this.errors.push('Заполните пароль')
        }
        if (this.pass2 === '') {
          this.errors.push('Повторите пароль')
        }
        if (this.pass !== this.pass2) {
          this.errors.push('Пароли не совпадают')
        }
        if (this.errors.length === 0) {
          axios.post('http://localhost:3000/users/', {
            email: this.email,
            name: this.name,
            password: this.pass
          })
            .then(response => {
              const error = response.data.error;
              if (!error) {
                this.isSuccess = true;
              } else {
                this.errors.push(error)
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
