<template>
    <div>
        <h1>AllPosts</h1>
        <div class="post" v-for="todo in todos" v-bind:key="todo._id">
            <!-- this functions as an <a> tag -->
            <router-link>
                <h1>{{ todo.subject }}</h1>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllPosts",
    props: ['todos']
}
</script>

<style lang="scss"></style>