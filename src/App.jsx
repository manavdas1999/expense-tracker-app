import { useEffect, useState } from 'react';
import { auth } from "./services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Pages
import LoginPage from './pages/register-login-page/LoginPage';
import HomePage from './pages/home/HomePage';

function App() {

  const [user, setUser] = useState(null);

  // before component load
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) setUser(user);
      else setUser(null);
    })
  }, [])

  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <>
      {
        user ? <HomePage userData ={user} onSignOut={handleSignOut}/> : <LoginPage />
      }
      
    </>
  )
}

export default App
