<template>
    <div class="post-page">
        <h1>{{ todo.subject }}</h1>
        <h2>{{ todo.details }}</h2>
        <router-link to="/"><button>Back to Main</button></router-link>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router' // get useRoute hook to get access to route params
import { toRefs } from 'vue' // get toRegs hook to maintain props reactivity

// define props and their type
const props = defineProps({
    'todos': Array
})

// get route object to access params
const route = useRoute()
// retrieve posts from props
const { todos } = toRefs(props)
// grab target post from posts
// subtract 1 from id to get index value
const todo = todos.value[route.params.id - 1]
</script>

<style lang="scss"></style>


<!-- export default {
    name: "SinglePost",
    props: ['todos'],
    setup(props){
        // get route object to access params
        const route = useRoute()
        // retrieve posts from props
        const {todos} = toRefs(props)
        console.log(todos)
        // grab target post from posts
        // subtract 1 from id to get index value
        const todo = todos.value[route.params.id - 1]
        console.log(todos.value)
        console.log(route.params.id)
        console.log(todo)
        // return properties
        return {
            todo
        }
    }
} -->