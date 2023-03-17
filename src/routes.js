/////////////////////////
// Components Imports
/////////////////////////
import AllPosts from "./pages/AllPosts.vue"
import SinglePost from "./pages/SinglePost.vue"
import Form from "./pages/Form.vue"

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    { path: "/", component: AllPosts, props: true},
    { path: "/post/:id", component: SinglePost, name: "post"},
    { path: "/new", component: Form},
    { path: "/edit", component: Form }
];