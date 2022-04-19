<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/list">BookList</router-link>|
    <router-link to="/test">Test</router-link>|
    <router-link to="/vuex-test">Vuex</router-link>|
    <router-link to="/detail">BookDetail</router-link>|
    <router-link to="/child">Child</router-link>|
    <router-link to="/perrent">Perrent</router-link>|
  </div>
  <router-view/>
</template>

<script>

export default ({
  setup() {
    
  },//②provide()を使って親から孫に値を渡す
       provide(){
       return {
         Username: "親からの名前"
       }
     }

})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
