<template>
  <div id="app">
    <button @click="onclick" v-rippuru>click me</button>
    <button @click="onclick" v-rippuru class="blue-txt">ripple color depends on text color</button>
    <input @click="onclick" type="button" value="ineffective for input tag" v-rippuru />
    <button v-rippuru class="round">round button</button>
    <button @click="onclick" v-rippuru:dodgerblue>specify color</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Example extends Vue {
  onclick() {}
}
</script>

<style lang="stylus">
#app {
  display: flex;
}

button, input[type='button'] {
  background-color: transparent;
  border: 1px solid gainsboro;
  padding: 1em;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}

.round {
  border-radius: 1.5em;
}

.blue-txt {
  color: dodgerblue;
}
</style>
