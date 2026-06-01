<script setup lang="ts"></script>

<template>
  <h1>Weather Conditions</h1>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #eee;
}
.wrapper {
  margin: 1rem;
}
.widget {
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  padding: 27px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 15px #ddd;
}
.icon {
  font-family: 'FontAwesome';
  float: right;
}
.widget > div {
  font-weight: 300;
  position: absolute;
  bottom: 27px;
  color: #b8b8b8;
}
.degree {
  font-size: 3em;
}
.country {
  text-align: center;
  font-size: 1em;
  line-height: 10px;
  color: #cbcbcb;
}
.title {
  color: #cbcbcb;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid;
}
.fa-sun-o {
  animation: sunRotate 3.7s infinite linear;
}
.fa-bolt {
  animation: bolt 0.5s infinite linear;
}
@keyframes sunRotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes bolt {
  0% {
    margin-right: 0;
  }
  50% {
    margin-right: -20px;
    color: #ffa500;
  }
  75% {
    margin-right: 0;
  }
  100% {
    margin-left: -20px;
  }
}
</style>
