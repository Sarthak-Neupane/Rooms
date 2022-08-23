import Firebase from "../../Firebase";

import { useAuthStore } from "../Auth/index";
import { updateProfile } from "firebase/auth";

import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

export default {
  async updateUser(args) {
    const auth = useAuthStore();
    auth.user.username = args.username || null;
    auth.user.displayTheme = args.displayTheme || "Dark";
    auth.user.displayName = args.displayName || "guest101";
    auth.user.displayPicture =
      args.displayPicture ||
      "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__2__j7hTXzevw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525186";
    
    //   await updateProfile(Firebase.auth.currentUser, {
    //   displayName: args.displayName || "guest101",
    //   photoURL:
    //     args.displayPicture ||
    //     "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__2__j7hTXzevw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525186",
    // });

    localStorage.setItem("User", JSON.stringify(auth.user));
  },

  async addUserToDb() {
    const auth = useAuthStore();
    const user = auth.user;
    try {
      await setDoc(doc(Firebase.db, "Users", user.id), {
        id: user.id,
        username: user.username,
        displayName: user.displayName,
        displayPicture: user.displayPicture,
        displayTheme: user.displayTheme,
        totalRooms: user.totalRooms,
        totalReminders: user.totalReminders,
        totalFiles: user.totalFiles,
      });
      console.log('user added')
    } catch (e) {
      this.errorMessage = e.message || "Oops! an error occured. Try Again";
    }
  },

  async addUsernameToDb() {
    const auth = useAuthStore();
    const user = auth.user;
    try {
      await setDoc(doc(Firebase.db, "Usernames", user.username), {
        id: user.id,
      });
    } catch (e) {
      this.errorMessage = e.message || "Oops! an error occured. Try Again";
    }
  },

  async checkUsername(username) {
    const querySnapshot = await getDocs(collection(Firebase.db, "Usernames"));
    const breakError = {};

    try {
      querySnapshot.forEach((doc) => {
        if (username == doc.id) {
          this.error = true;
          throw breakError;
        } else {
          this.error = false;
        }
      });
    } catch (err) {
      if (err !== breakError) throw err;
    }
  },

  async fetchUser(args) {
    console.log(args)
    const docRef = doc(Firebase.db, "Users", args.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!");
    }
  },
};
