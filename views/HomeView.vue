<template>
  <center>
  <h1>Welcome to Cucumber<br>Clicker</h1>
  <img class="cucumber" src="https://i.postimg.cc/L8h57Z2R/IMG-0722.png" width="300px" height="300px">
  <p>Let's go click the cucumber before it's too late</p>
      <button class="go">
      <router-link style="text-decoration: none; color: inherit;" to="/game">Go to Game</router-link>
      </button>
  </center>
  </template>
  
  <script>  
  export default {
  
  }
  </script>
    
  <style scoped>
  h1 {
      margin-top: 100px;
      font-family: Arial;
  }
  
  .cucumber {
      margin-top: 30px;
  }
  
  p {
      font-family: arial;
      color: white;
  }
  
  .go {
      width: 150px;
      height: 50px;
      background-color: rgba(96, 146, 96, 0.623);
      border: none;
      border-radius: 25px;
      margin-top: 30px;
      color: white
  }
  </style>