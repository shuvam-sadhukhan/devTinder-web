import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './Components/Body'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Provider } from 'react-redux'
import appStore from './Utils/appStore'
import Feed from './Components/Feed'
import Connections from './Components/Connections'



function App() {  
  

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body />}>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Profile />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/connections' element={<Connections />} />

      </Route>
    </Routes>
   
    </BrowserRouter>
    </Provider>
   
    </>
  )
}

export default App
