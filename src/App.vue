<template>
  <div id="app">
      <Header></Header>
         <router-view> </router-view>
      <!-- <Footer></Footer>    -->
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  width:100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 0.6rem;

}
</style>
