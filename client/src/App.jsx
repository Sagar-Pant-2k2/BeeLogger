import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Write from "./components/Write";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/Auth";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { DrawerContext, DrawerContextProvider } from "./context/ShowDrawer";
import { useContext } from "react";
import Layout from "./components/Layout";
export default () => {
  
  return (
    <>
      <AuthProvider>
        <DrawerContextProvider>
          <BrowserRouter>
            <Layout>

            
            <Routes>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/write" element={<Write />}></Route>+
              <Route path="/blogs" element={<Blogs />}></Route>
            </Routes>
            {/* <Footer /> */}
            </Layout>
          </BrowserRouter>
        </DrawerContextProvider>
      </AuthProvider>
    </>
  );
};
