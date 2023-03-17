<template>
  <div>
    <h1>My Todo List</h1>
    <!-- router element, you need this -->
    <!-- pass props to AllPosts -->
    <router-view :todos="todos" :url="url" :getTodos="getTodos"/>
  </div>
</template>

<script setup>
import {ref, onBeforeMount} from "vue"
// ref hook allows us to create reactive variables

const url = "https://django-fullstack-backend.onrender.com/todos/"

// create state for todos
const todos = ref([])

// create method to get todos
const getTodos = async function(){
  const response = await fetch(url)
  const data = await response.json()
  // reassigns value of ref variable to data, which will trigger a reactive response
  todos.value = data
}

// call function when component mounts
onBeforeMount(() => {getTodos()})
</script>

<style>

</style>
