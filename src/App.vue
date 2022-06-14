<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

body {
  background-color: bisque;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  min-width: 526px;
}
input {
  width: 200px;
  height: 30px;
  text-align: center;
  font-size: 1.5rem;
  border-style: double;
  margin: 1rem;
}
.container {
  display: flex;
  height: 5rem;
  background-color: black;
  color: white;
  font-size: 3rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
ul {
  padding: 0;
  margin-top: 0.5rem;
}
</style>
