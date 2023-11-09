import Nav from "./components/Nav"
import { AuthContextProvider } from "./context/Auth/AuthContext"
import { ThemeContextProvider } from "./context/Theme/ThemeContext"
import Blog from "./pages/blog/blog"
import Blogs from "./pages/blogs/Blogs"
import Home from "./pages/home/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Write from "./pages/write/Write"

import SignupPage from "./pages/auth/Register"
import LoginPage from "./pages/auth/Login"
import AlertModal from "./components/Modal"
export default ()=>{
  return (
  <AuthContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
          <Nav/>
          {/* <AlertModal/> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/write" element={<Write/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<SignupPage/>}></Route>
        </Routes>
         
      </BrowserRouter>
      
    </ThemeContextProvider>
  
  </AuthContextProvider>

  )
}