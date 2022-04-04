<template>
  <sidebar-menu :menu="menu" />
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: "Chlick",
          hiddenOnCollapse: true,
        },
        {
          href: "/home",
          title: "Home",
          icon: "fa fa-user",
        },
        {
          title: "Bikes",
          icon: "fa fa-chart-area",
          child: [
            // second level folder
            {
              hiddenOnCollapse: false,
              title: "yamaha",
              child: [
                {
                  title: "r15",
                  // href: "/home",
                  href: "/bikes/yamaha/r15",
                },
                {
                  title: "r3",
                  href: "/bikes/yamaha/r3",
                },
              ],
            },
            // second level folder
            {
              hiddenOnCollapse: false,
              title: "honda",
              child: [
                {
                  title: "cb650",
                  href: "/bikes/honda/cb650",
                },
                {
                  title: "cbr650",
                  href: "/bikes/honda/cbr650",
                },
              ],
            },
          ],
        },
        {
          href: "/about",
          title: "About",
          icon: "fa fa-user",
        },
      ],
    };
  },
};
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
