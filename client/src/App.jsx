import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Home from "./components/Home";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Write from "./components/Write";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/Auth";
import Footer from "./components/Footer";
export default ()=>{
  return (
    <>
    <AuthProvider>

    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/write" element={<Write/>}></Route>

      </Routes>
    <Footer/>
    </BrowserRouter>
    
    </AuthProvider>
    </>
  )
}