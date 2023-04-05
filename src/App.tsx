import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
// import { setUser,selectUser } from './features/user/userSlice';
import { selectUser,login,logout } from './features/user/userSlice';
import { useAppSelector } from './app/hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';

function App() {
  const dispatch=useAppDispatch()
  const user=useAppSelector(selectUser)  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('logged in', authUser)
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email||'',
        }))
      }
      else {        
        dispatch(logout(null))
      }
    })
    return () => {
      unsubscribe()
    }
  }, [dispatch])
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>          
          {!user.user ?
            (<Route path='/*' element={<Login />} />
            ) :
            (<Route path='/'>
              <Route index element={<HomeScreen />} />
              <Route path='profile' element={<ProfileScreen />} />
            </Route>)}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
