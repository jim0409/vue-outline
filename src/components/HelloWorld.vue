<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

// use typescript inside script
<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

async function GetData(url: string) {
  let data;
  await axios.get(url).then(res => {
    data = JSON.stringify(res.data);
  }).catch(err => {
    console.log(err);
  })
  return data;
}

const url = 'http://127.0.0.1/demo.json';


export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    // console.log("test");
    var data = GetData(url);

    // promise can only be used with then
    data.then( res => {
      console.log(res)
    });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
