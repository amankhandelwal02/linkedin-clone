import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import { useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth, db } from './firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from './components/Spinner'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) { 
          dispatch(login({
            email: userAuth.email,
            name: userAuth.displayName,
            image: userAuth.photoURL,
            uid: userAuth.uid,
          }))
      } else {
          dispatch(logout())
      }
    })

  }, [])

  useEffect(() => {

    if(user) {
      setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
        photoURL: user.photoURL,
      })
    }

  }, [user])

  if (loading) return <Spinner />

  return (
    <div className='app'>
      <Header />
      {!user ? <Login /> : <Feed /> }
    </div>
  );
}

export default App;
