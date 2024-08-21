<template>
<h1>Available Tasks:</h1>
<div class="task">

</div>

<center><div class="container">
    <button class="Ref"><RouterLink style="text-decoration: none; color: inherit;" to="/ref">Ref</RouterLink></button>
    <button class="Game"><RouterLink style="text-decoration: none; color: inherit;" to="/game">Game</RouterLink></button>
    <button class="Task"><b>Task</b></button>
</div>
</center>
</template>
          
<script>
export default {

}   
</script>
          
<style scoped>
    body {
    background-image: url("https://i.postimg.cc/DzkhgWzx/IMG-0723.jpg");
    align-items: center;
    }
    .Game {
        width: 133px;
        height: 80px;
        border-radius: 25px;
        border: none;
        background-color: rgb(66, 66, 66);
        color: aliceblue;
        cursor: pointer;
      }
      
      .Task {
        width: 133px;
        height: 80px;
        border-radius: 25px;
        border: none;
        background-color: rgb(107, 107, 107);;
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
        margin-top: 455px;
        background-color: rgb(66, 66, 66);
        width: 400px;
        height: 80px;
        border-radius: 25px;
        position: fixed;
        margin-left: 43px;
      }
      .task {
        background-color: rgb(98, 145, 116);
        border-color: aliceblue;
        width: 480px;
        height: 80px;
        border-radius: 25px;
        border: 10px;
      }
</style>