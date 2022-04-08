import "./App.css";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseApp from "./firebase.init";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const auth = getAuth(firebaseApp);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign in With Google</button>
          <button onClick={handleFacebookSignIn}>Sign in with Facebook</button>
          <button onClick={handleGithubSignIn}>Sign in with Github</button>
        </>
      )}
      <h1>User Name: {user.displayName}</h1>
      <h1>Email: {user.email}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
