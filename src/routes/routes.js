import { createRouter, createWebHistory } from "vue-router";
import Rooms from '../views/Room.vue'
import Profile from '../views/Profile.vue'
import Friends from '../views/Friends.vue'

import RoomMember from '../views/RoomInner/RoomMember.vue'
import RoomChat from '../views/RoomInner/RoomChat.vue'
import RoomReminders from '../views/RoomInner/RoomReminders.vue'
import RoomFiles from '../views/RoomInner/RoomFiles.vue'

const routes = [
  {
    path: "/",
    redirect: "/rooms",
    component: Rooms,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
  },
  {
    path: "/members",
    name: "Members",
    component: RoomMember,
  },
  {
    path: "/chat",
    name: "Chat",
    component: RoomChat,
  },
  {
    path: "/reminders",
    name: "Reminders",
    component: RoomReminders,
  },
  {
    path: "/files",
    name: "Files",
    component: RoomFiles,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
