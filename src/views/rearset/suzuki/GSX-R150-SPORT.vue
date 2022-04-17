<template>
  <div>
    <img src="../../../../public/suzuki/gsxr-150/sport/r150-1.jpeg">
    <img src="../../../../public/suzuki/gsxr-150/sport/r150-2.jpeg">
    <img src="../../../../public/suzuki/gsxr-150/sport/r150-3.jpeg">
    <img src="../../../../public/suzuki/gsxr-150/sport/r150-4.jpeg">
    <img src="../../../../public/suzuki/gsxr-150/sport/r150-5.jpeg">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GSX-R150-SPORT',
  components: {
  },
});
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");

#demo.collapsed {
  padding-left: 65px;
}
#demo.onmobile {
  padding-left: 65px;
}

img {
  max-width: 50%;
  max-height: 50%;
  background-color: black;
}

#desktop{
  background-color: white;
  /* background-position: right; */
}


</style>