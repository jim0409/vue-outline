<template>
  <div class="home">
    <HelloWorld msg="GSX-R150-SEMI"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'GSX-R150-SEMI',
  components: {
    HelloWorld,
  },
});
</script>
