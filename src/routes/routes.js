import { createRouter, createWebHistory } from "vue-router";

import Auth from '../views/Auth.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

import Rooms from '../views/Room.vue'
import Profile from '../views/Profile.vue'
import Friends from '../views/Friends.vue'

import RoomMember from '../views/RoomInner/RoomMember.vue'
import RoomChat from '../views/RoomInner/RoomChat.vue'
import RoomReminders from '../views/RoomInner/RoomReminders.vue'
import RoomFiles from '../views/RoomInner/RoomFiles.vue'


import CreateRoom from '../views/CreateNewRoom/CreateRoom.vue'

const routes = [
  {
    path: "/",
    redirect: "/auth/login",
    component: Login,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    meta: {
      showSidebar: false
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "signup",
        name: "SignUp",
        component: SignUp
      },
    ]
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
    meta: {
      showSidebar: true
    },
    children: [
      {
        path: 'create',
        name: 'CreateRoom',
        component: CreateRoom,
        meta: {
          showSidebar: true
        }
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/members",
    name: "Members",
    component: RoomMember,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/chat",
    name: "Chat",
    component: RoomChat,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/reminders",
    name: "Reminders",
    component: RoomReminders,
    meta: {
      showSidebar: true
    }
  },
  {
    path: "/files",
    name: "Files",
    component: RoomFiles,
    meta: {
      showSidebar: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
