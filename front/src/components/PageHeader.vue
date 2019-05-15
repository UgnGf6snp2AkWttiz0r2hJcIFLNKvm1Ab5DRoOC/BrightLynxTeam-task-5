<template lang="pug">
  .header
    router-link(to="/")
      h1 {{ title }}
    #nav
      router-link.btn(to="/") Главная
      router-link.btn(to="/users") Список пользователей
      router-link.btn(to="/reg") Регистрация
      router-link.btn(to="/login") Авторизация
</template>

<script>
  export default {
    name: 'PageHeader',
    data() {
      return {
        title: 'Сайт про львов',
      }
    },
  };
</script>


<style scoped lang="stylus">
  h1
    color var(--main-color)
  #nav
    padding 20px 0
  .btn
    padding 10px 20px
    margin-right 10px
    border 1px solid var(--main-color)
  a
    text-decoration none
  .btn.router-link-exact-active, .btn:hover
    background-color var(--main-color)
    color white

</style>


