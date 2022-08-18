import { createRouter, createWebHistory } from "vue-router";
import rooms from '../views/Room.vue'
import profile from '../views/Profile.vue'

import RoomMember from '../views/RoomInner/RoomMember.vue'

const routes = [
  {
    path: "/",
    component: rooms,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/inner",
    component: RoomMember,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
