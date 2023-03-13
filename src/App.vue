<template>
  <div>
    <h1>Cindy's Todo List</h1>
    <!-- router element, you need this -->
    <router-view/>
  </div>
</template>

<script setup>
import {ref, onBeforeMount} from "vue"

const url = "http://localhost:10000/todos"

// create state for todos
const todos = ref([])

// const getTodos = async () => {
//   await
// }
</script>

<style>

</style>
