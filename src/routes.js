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
    // ORDER MATTERS -- name attrib must go BEFORE component attrib
    { path: "/post/:id", name: "post", component: SinglePost},
    { path: "/new", component: Form},
    { path: "/edit/:id", name:"edit", component: Form }
];