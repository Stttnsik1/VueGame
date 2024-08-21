<template>
    <div><h1>{{score}}</h1></div>
    <center>
    <button class="click" @click="click()"><img class="Cucumber" src="https://i.postimg.cc/L8h57Z2R/IMG-0722.png" width="250px" height="250px"></button>
    </center>
    
<center><div class="container">
    <button class="Ref"><RouterLink style="text-decoration: none; color: inherit;" to="/ref">Ref</RouterLink></button>
    <button class="Game"><b>Game</b></button>
    <button class="Task"><RouterLink style="text-decoration: none; color: inherit;" to="/task">Task</RouterLink></button>
</div>
</center>
</template>
    
    <script>
    import { ref } from 'vue';
    
    export default {
    
      setup() {
        const score = ref(localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0);
    
        const click = () => {
          score.value += 1;
          saveScore();
        };
    
        const saveScore = () => {
          localStorage.setItem('score', score.value);
        };
    
        return {
          score,
          click,
        };
      },
    };
    </script>
    
    <style scoped>
    .body {
        text-align: center;
    }
    
    div {
        text-align: center
        
    }
    .click {
      margin-top: 150px;
      border: none;
      background-image: url("https://i.postimg.cc/DzkhgWzx/IMG-0723.jpg");
      cursor: pointer;
    }  
    .Game {
        width: 133px;
        height: 80px;
        border-radius: 25px;
        border: none;
        background-color: rgb(107, 107, 107);
        color: aliceblue;
        cursor: pointer;
      }
      
      .Task {
        width: 133px;
        height: 80px;
        border-radius: 25px;
        border: none;
        background-color: rgb(66, 66, 66);
        color: aliceblue;
        cursor: pointer;
      }
      
      .Ref {
        width: 133px;
        height: 80px;
        border-radius: 25px;
        border: none;
        background-color: rgb(66, 66, 66);
        color: aliceblue;
        cursor: pointer;
      }
      .container {
        margin-top: 50px;
        background-color: rgb(66, 66, 66);
        width: 400px;
        height: 80px;
        border-radius: 25px;
        position: fixed;
        margin-left: 43px;
      }
    </style>
    
    
    
    
    