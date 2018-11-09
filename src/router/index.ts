import Vue from "vue";
import Router from "vue-router";
import App from "@/App.vue";

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const TopicList = () =>
  import(/* webpackChunkName: "topicList" */ "@/views/TopicList.vue");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const Login = () => import(/* webpackChunkName: "login" */ "@/views/Login.vue");
const Message = () =>
  import(/* webpackChunkName: "message" */ "@/views/Message.vue");
const Topic = () => import(/* webpackChunkName: "topic" */ "@/views/Topic.vue");
const NewTopic = () =>
  import(/* webpackChunkName: "newTopic" */ "@/views/NewTopic.vue");
const User = () => import(/* webpackChunkName: "user" */ "@/views/User.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
      children: [
        {
          path: "",
          redirect: {
            name: "list"
          }
        },
        {
          path: "/list",
          name: "list",
          component: TopicList
        },
        {
          path: "/topic/:id",
          name: "topic",
          component: Topic
        },
        {
          path: "/create",
          name: "create",
          component: NewTopic,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/login",
          name: "login",
          component: Login
        },
        {
          path: "/user/:loginname",
          name: "user",
          component: User
        },
        {
          path: "/message",
          name: "message",
          component: Message,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/about",
          name: "about",
          component: About
        },
        {
          path: "*",
          component: TopicList
        }
      ]
    }
  ]
});
