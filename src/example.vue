<template>
  <div id="app">
    <button @click="onclick" v-rippuru>click me</button>
    <input @click="onclick" type="button" value="CLICK ME" v-rippuru />
  </div>
</template>
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
}
</style>
