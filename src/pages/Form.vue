<template>
    <h1>Edit/Create a Todo</h1>
    <form v-on:submit.prevent="handleSubmit">
        <input type="text" placeholder="subject" v-model="subject"/>
        <input type="text" placeholder="details" v-model="details"/>
        <input type="submit" :value="buttonLabel"/>
    </form>
</template>

<script>
import { useRoute, useRouter } from 'vue-router' // get useRoute hook to get access to route params
// get useRouter hook so we can use .push later to redirect to a diff url
import { ref, toRefs } from "vue" // get vue hooks

    export default {
        name: "Form",
        props: ['todos', 'url', 'getTodos'],
        setup(props) {
            const route = useRoute() // get route
            console.log(route)
            const router = useRouter() // get router
            const { todos, url, getTodos } = toRefs(props) // get necessary props
            const subject = ref("") // state variable for subject in form
            const details = ref("") // state variable for details in form
            let buttonLabel // label for submit button
            let handleSubmit // variable to hold submit function
            // if it's the edit route, setup the form for editing, else setup for creating
            console.log(route.name)
            if (route.name === "edit") {
                console.log("ROUTE REACHED")
                // get todo to be edited from todos
                const todo = todos.value.find((todo) => {return todo.id == route.params.id})
                // fill form with that todo's values
                subject.value = todo.subject
                console.log(todo.subject, subject.value)
                details.value = todo.details
                // set label for submit button
                buttonLabel = "update todo"
                // define function to update
                handleSubmit = async () => {
                    await fetch(url.value + route.params.id + "/", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            subject: subject.value,
                            details: details.value
                        })
                    })

                    // run get todos function to update the allposts screen
                    await getTodos.value()
                    // redirect to todo
                    // actually don't bc it's not updated yet... for some reason, even tho we ran getTodos.value()
                    // so just redirect to root
                    // WAIT IT WORKS IF WE PUT "await" :O noice
                    router.push({ name: 'post', params: { id: todo.id } })
                    // router.push("/")
                }
            } else {
                console.log("EDIT ROUTE MISSED, CREATE ROUTE REACHED")
                // label for submit button
                buttonLabel = "create todo"
                // define function to create
                handleSubmit = async () => {
                    await fetch(url.value, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            subject: subject.value,
                            details: details.value
                        })
                    })

                    getTodos.value()
                    router.push("/")
                }
            }

            return {
                subject,
                details,
                handleSubmit,
                buttonLabel
            }
        }
    }
</script>

<style lang="scss">

</style>