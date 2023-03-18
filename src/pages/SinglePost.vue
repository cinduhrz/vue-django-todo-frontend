<template>
    <div class="post-page">
        <router-link to="/"><button>Back to Main</button></router-link>
        <h1>{{ todo.subject }}</h1>
        <h2>{{ todo.details }}</h2>
        <router-link :to="{name: 'edit', params: {id: todo.id}}"><button>Edit Todo</button></router-link>
        <button v-on:click="deletePost">Delete Todo</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router' // get useRoute hook to get access to route params
import { toRefs } from 'vue' // get toRegs hook to maintain props reactivity

// define props and their type
const props = defineProps({
    'todos': Array,
    'url': String,
    'getTodos': Function
})

// get router to use router.push
const router = useRouter()
// get route object to access params
const route = useRoute()
// retrieve needed props
const { todos, url, getTodos } = toRefs(props)
// grab target post from posts
// can't use strict equality (===) here bc it throws an error, i guess the type is diff?
const todo = todos.value.find((todo) => {return todo.id == route.params.id})

const deletePost = async function() {
    await fetch(url.value + todo.id + "/", {
        method: "delete",
    })

    // rerun to update, also async function
    await getTodos.value()
    router.push("/")
}
</script>

<style lang="scss">
button {
    margin: 10px;
}
</style>


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