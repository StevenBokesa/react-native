import { useState } from "react";
import { auth } from "./firebase";

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
      })
      .catch((error: { message: any }) => alert(error.message))
      }

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredentials: { user: any }) => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch((error: { message: any }) => alert(error.message))
      }
      