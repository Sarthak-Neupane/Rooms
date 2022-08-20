import Firebase from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
  async signup(args) {
    const userCredentials = await createUserWithEmailAndPassword(
      Firebase.auth,
      args.email,
      args.password
    );
    this.user = userCredentials;
    localStorage.setItem("User", JSON.stringify(this.user));
  },
  async login(args) {
    const userCredentials = await signInWithEmailAndPassword(
      Firebase.auth,
      args.email,
      args.password
    );
    this.user = userCredentials;
    localStorage.setItem("User", JSON.stringify(this.user));
  },
};
