<template>
    <div>
        <h1>My Todo List</h1>
        <router-link to="/new"><button>Create a Todo</button></router-link>
        <ul>
            <li class="post" v-for="todo of todos" :key="todo.id">
                <!-- this functions as an <a> tag -->
                    <!-- :to attrib is not working -->
                <router-link :to="{ name: 'post', params: { id: todo.id } }">
                    <h1>{{ todo.subject }}</h1>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AllPosts",
    props: ['todos']
}
</script>

<style lang="scss"></style>