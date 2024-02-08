import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'

function App() {
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ChatPage />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
