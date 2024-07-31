import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import BackgroundSelection from "./components/sidebar/BackgroundSelection";
import { useEffect, useState } from "react";

function App() {
	const { authUser } = useAuthContext();
	const [backgroundClass, setBackgroundClass] = useState('');

	useEffect(() => {
	  const savedBackground = localStorage.getItem('background') || '';
	  setBackgroundClass(savedBackground);
  
	  // if (savedBackground === 'Bg1') {
	  //   setBackgroundImage("url('/WhiteBg.jpeg')");
	  // } else if (savedBackground === 'Bg2') {
	  //   setBackgroundImage("url('/DarkBg.jpeg')");
	  // }
	}, []);
	return (
		<div className={`p-4 h-screen flex items-center justify-center ${backgroundClass}`}>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path="/BackgroundSelection" element={<BackgroundSelection />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
