import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "contacts",
    component: () => import("../components/contacts/ContactList"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/contacts/ContactUserInfo"),
  },
  {
    path: "/chats",
    name: "chats",
    component: () => import("../components/users/UsersList"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../components/users/chat/ChatUser"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
