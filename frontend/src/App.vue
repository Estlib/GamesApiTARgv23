<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import GamesTable from './components/GamesTable.vue'
import CountInteger from './components/CountInteger.vue'
import { RouterLink,RouterView} from 'vue-router'

export default { 
  name: 'App',

  components: {
    HelloWorld,
    TheWelcome,
    GamesTable,
    CountInteger
  },
  data() {
    return {
      sectionGap: 20
    }
  },
  computed: {
    sectionGapInRem() {
      return `${this.sectionGap / 16}rem`
    }
  },
  watch: {
    sectionGap(newVal, oldVal) {
      if (newVal!== oldVal) {
        this.$root.$emit('updateSectionGap', newVal)
      }
    }
  }
  
}
</script>

<template>
  <header>
    <img alt="Vue logo" 
    class="logo" 
    src="./assets/logo.svg" 
    width="125" 
    height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
