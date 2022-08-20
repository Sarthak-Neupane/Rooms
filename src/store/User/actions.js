import Firebase from "../../Firebase";

import { useAuthStore } from "../Auth/index";
import { updateProfile } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

export default {
  async updateUser(args) {
    const auth = useAuthStore();
    auth.user.username = args.username || null;
    auth.user.displayTheme = args.displayTheme || "Dark";
    auth.user.displayName = args.displayName || "guest101";
    auth.user.displayPicture =
      args.displayPicture ||
      "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__2__j7hTXzevw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525186";
    await updateProfile(Firebase.auth.currentUser, {
      displayName: args.displayName || "guest101",
      photoURL:
        args.displayPicture ||
        "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__2__j7hTXzevw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525186",
    });
    return auth.user;
  },

  async addUserToDb() {
    const auth = useAuthStore();
    const user = auth.user;
    try {
      await setDoc(doc(Firebase.db, "User", user.uid), {
        id: user.uid,
        username: user.username,
        displayName: user.displayName,
        displayPicture: user.displayPicture,
        displayTheme: user.displayTheme,
        totalRooms: user.totalRooms,
        totalReminders: user.totalReminders,
        totalFiles: user.totalFiles,
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  },
};
