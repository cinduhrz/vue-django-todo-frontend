<template>
  <div>
    <h1>Cindy's Todo List</h1>
    <!-- router element, you need this -->
    <ul>
      <li v-for="todo of todos" v-bind:key="todo._id">
        <h1>{{ todo.subject }}</h1>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script setup>
import {ref, onBeforeMount} from "vue"

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
