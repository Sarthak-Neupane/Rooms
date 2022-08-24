import Firebase from "../../Firebase";
import { useAuthStore } from "../Auth/index";
import { useUserStore } from '../User/index'

import { addDoc, doc, serverTimestamp, increment, collection  } from "firebase/firestore";

export default {
  async addRoomTodb(args) {
    const authStore = useAuthStore();
    const userStore = useUserStore()

    const roomData = {
      name: args.name,
      description: args.description,
      type: args.type,
      numberOfMembers: 1,
      admin: doc(Firebase.db, "Users", authStore.user.id),
      timestamp: serverTimestamp(),
    };
    const docRef = await addDoc(collection(Firebase.db, "Rooms"), roomData);

    await userStore.addRoomCollection({
        id: docRef.id
    })
    await userStore.UpdateUserDb({
        totalRooms: increment(1)
    })
    this.rooms.push(docRef.id)
  },
};
