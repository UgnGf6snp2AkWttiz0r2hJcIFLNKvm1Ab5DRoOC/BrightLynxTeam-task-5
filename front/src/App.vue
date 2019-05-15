<template lang="pug">
  #app
    page-header
    router-view

</template>


<script>
  import PageHeader from '@/components/PageHeader.vue';

  export default {
    name: 'app',
    components: {
      PageHeader,
    },
  };
</script>


<style lang="stylus">
  #app
    max-width 700px;
    margin 0 auto;
    font-family 'arial'
    --main-color #EB6D34

  .alert
    min-height 20px
    padding 10px
    margin-top 10px
    margin-bottom 10px
    text-align left

    &-error
      //@extend .alert
      color: white
      background-color #C01525
    &-success
      //@extend .alert
      color: white
      background-color #429F53
  label
    font-weight normal
</style>
