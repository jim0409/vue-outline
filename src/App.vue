<template>
  <sidebar-menu
    v-model:collapsed="collapsed"
    :menu="menu"
    :theme="selectedTheme"
    :show-one-child="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />
  <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <div class="demo">
      <div class="container">
        <h1 style="color: red">
          BORN FOR SPEED
          <div
            style="
              color: blue;
              text-align: left;
              font-size: 16px;
              font-weight: 300;
            "
          >
            <a href="https://www.google.com/url?q=https%3A%2F%2Flin.ee%2F3xNQ4qh&sa=D&sntz=1&usg=AOvVaw18XwSk3htf49-Spk6m8pFF"
              >Hizran</a
            >
          </div>
        </h1>
        <hr style="margin: 50px 0px; border: 1px solid #e3e3e3" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: "About Us",
          hiddenOnCollapse: true,
        },
        {
          href: "/about",
          title: "Hirzan",
          // icon: "fa fa-user",
          icon: {
            element: "span",
            class: "fa fa-user",
          },
        },
        {
          header: "Products",
          hiddenOnCollapse: true,
        },
        {
          title: "Rear Set",
          icon: "fa fa-chart-area",
          child: [
            {
              hiddenOnCollapse: false,
              title: "why rear set?",
              href: "/bikes/why_rear_set",
            },
            // second level folder
            {
              hiddenOnCollapse: false,
              title: "yamaha",
              child: [
                {
                  title: "r15",
                  href: "/rearset/yamaha/r15",
                },
                {
                  title: "r3",
                  href: "/rearset/yamaha/r3",
                },
              ],
            },
            // second level folder
            {
              hiddenOnCollapse: false,
              title: "suzuki",
              child: [
                {
                  title: "gsx-r150",
                  // href: "/rearset/suzuki/gsx-r150",
                  child: [
                    {
                      title: "gsx-r150-semi",
                      href: "/rearset/suzuki/gsx-r150/semi",
                    },
                    {
                      title: "gsx-r150-sport",
                      href: "/rearset/suzuki/gsx-r150/sport",
                    },
                    {
                      title: "gsx-r150-race",
                      href: "/rearset/suzuki/gsx-r150/race",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          header: "Shops",
          hiddenOnCollapse: true,
        },
        {
          href: "/shops",
          title: "Shops",
          icon: "fa fa-user",
        },
      ],
      collapsed: false,
      themes: [
        {
          name: "Default theme",
          input: "",
        },
        {
          name: "White theme",
          input: "white-theme",
        },
      ],
      selectedTheme: "white-theme",
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log("onToggleCollapse");
    },
    onItemClick(event, item) {
      console.log("onItemClick");
      // console.log(event)
      // console.log(item)
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  background-image: url("../public/rider.jpeg");
  background-position: top;
  /* background-position: center; */
  /* background-size: auto; */
  /* background-size: 100%;  */
  background-size: cover;
  /* background-size:contain; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  border: 1px #ccc solid;
  color: #262626;
  opacity: 0.8;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
  /* padding-block-end: 0ch; */
  padding-bottom: 675px;
  /* margin:0%; */
}
#demo.collapsed {
  padding-left: 65px;
}
#demo.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 50px;
}

.container {
  max-width: 900px;
}
</style>
