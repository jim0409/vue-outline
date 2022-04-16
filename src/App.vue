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
          BORN FOR SPEED<div style="color:blue;text-align:left;font-size: 16px;font-weight: 300"><a href="https://shopee.tw/search?keyword=%E7%A6%BE%E5%80%89">Hizran</a></div>
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
  background-repeat:no-repeat;
  background-attachment: fixed;
  border:1px #ccc solid;
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
