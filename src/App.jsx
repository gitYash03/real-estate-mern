import {BrowseRouter, Routes, Route } from 'react'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Header from "./Components/Header"

const App = () => {
  return (

      <BrowseRouter>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowseRouter>

  )
}

export default App
