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
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <div class="container">
        <!-- <h1>
          vue-sidebar-menu
          <a
            style="color: #000;text-transform: uppercase;font-size: 14px;font-weight: 400;"
            href="https://github.com/yaminncco/vue-sidebar-menu"
          >
            Github
          </a>
        </h1> -->
        <p>A vue.js sidebar menu component</p>
        <div>
          <!-- Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
              :value="theme.input"
            >
              {{ theme.name }}
            </option>
          </select> -->
        </div>
        <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
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
          header: "Chlick",
          hiddenOnCollapse: true,
        },
        {
          href: "/home",
          title: "Home",
          // icon: "fa fa-user",
          icon: {
            element: "span",
            class: "fa fa-user",
          },
        },
        {
          header: "Biker",
          hiddenOnCollapse: true,
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
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false,
    }
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
    }
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
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
