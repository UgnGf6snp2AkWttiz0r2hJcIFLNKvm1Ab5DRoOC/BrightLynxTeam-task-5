<template lang="pug">
  .home
    img.image(alt="Lion 1" src="../assets/HansomeLion_002.jpg")
    img.image(alt="Lion 2" src="../assets/Male_Lion_on_Rock.jpg")
    .welcome(v-html="welcome")
    iframe.video(width="560" height="315" src="https://www.youtube.com/embed/sPyAQQklc1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      welcome: `<p><b>Приветствуем на сайте львов!</b>
<p>Лев (лат. Panthera leo) — вид хищных млекопитающих,
один из четырёх представителей рода пантер (Panthera),
относящегося к подсемейству больших кошек (Pantherinae)
в составе семейства кошачьих (Felidae). Наряду с тигром —
 самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг.
 Трудно сказать достоверно, массивнее ли крупнейшие подвиды льва, чем крупнейшие подвиды тигров.
  Связано это с тем, что исторические очень крупные веса амурских тигров в большинстве своём
  признаны недостаточно достоверными. Достаточными данными о размерах и массе представителей
  крупнейших подвидов льва (например, барбарийском) наука не располагает. Что касается живущих в
   неволе животных, они часто являют собой смешение разных подвидов. Существует мнение, что львы
   в неволе несколько превышают тигров в размерах и массе, так же как и обратное ему.
`,
    }
  },
};
</script>
<style lang="stylus" scoped>
  .image
    max-height 200px
    margin 10px

</style>
