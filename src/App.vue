<template>
  <div id="app">
      <div>
        <h3>Let us test your arithmetic.</h3>
        <p>What is the sum of the two numbers?</p>
        <div class="inline">
          <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess"> <button v-on:click="check">Check Answer</button>
        </div>
        <button v-on:click="refresh">Refresh</button>
        <button id ="buttonId" @click="clickMe">HIFI</button>
        <p>{{message}}</p>
      </div>
      <div>
        <input  v-model.number="x"  @change="checkFruit()" />
        <input v-model.number="y"  @change="checkFruit()"/>
        <div>
       {{myFruit}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      x1: Math.ceil(Math.random() * 100),
      x2: Math.ceil(Math.random() * 100),
      guess: "",
      message: "a",
      myFruit:"",
      x:0,
      y:0,
    }
  },
  methods: {
    check() {
      if (this.x1 + this.x2 === parseInt(this.guess)) {
        this.message = "SUCCESS!"
      } else {
        this.message = "TRY AGAIN"
      }
    },
    refresh() {
      this.x1 = Math.ceil(Math.random() * 100);
      this.x2 = Math.ceil(Math.random() * 100);
    },
    clickMe:function(){
      this.message="HIFI"
    },
    checkFruit:function( ){
      this.myFruit=this.x + this.y;
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
  margin-top: 60px;
}
.inline * {
  display: inline-block;
}
img {
  height: 350px;
}
</style>