import Firebase from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useUserStore } from "../User";

export default {
  async signup(args) {
    const userCredentials = await createUserWithEmailAndPassword(
      Firebase.auth,
      args.email,
      args.password
    );

    if (userCredentials) {
      this.user = {
        displayName: userCredentials.user.displayName,
        displayPicture: userCredentials.user.photoURL,
        id: userCredentials.user.uid,
        username: null,
        displayTheme: null,
        totalFiles: 0,
        totalReminders: 0,
        totalRooms: 0,
      };
      
      localStorage.setItem("User", JSON.stringify(this.user));

      const userStore = useUserStore();

      await userStore.updateUser({
        username: this.user.username,
        displayName: this.user.displayName,
        displayPicture: this.user.displayPicture,
        displayTheme: this.user.displayTheme,
      });

      await userStore.addUserToDb();

    } else {
      this.errorMessage = "oops an error occured";
    }
  },
  async login(args) {
    const userCredentials = await signInWithEmailAndPassword(
      Firebase.auth,
      args.email,
      args.password
    );
    // this.user = userCredentials;

    console.log(userCredentials);

    const userStore = useUserStore();

    const user = await userStore.fetchUser({
      id: userCredentials.user.uid,
    });

    if (user) {
      this.user = user;
      localStorage.setItem("User", JSON.stringify(this.user));
    }
  },
  async signingOut() {
    await signOut(Firebase.auth);
  },
};
