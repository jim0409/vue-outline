<template>
  <sidebar-menu :menu="menu" />
  <router-view/>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            header: 'Chlick',
            hiddenOnCollapse: true
          },
          {
            href: '/home',
            title: 'Home',
            icon: 'fa fa-user'
          },
          {
            title: 'ItemTree',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/home',
                title: 'home'
              },
              {
                href: '/about',
                title: 'about'
              }
            ]
          }
        ]
      }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
