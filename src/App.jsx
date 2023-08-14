import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HalamanLogin from "./pages/HalamanLogin"
import KontakKami from "./pages/KontakKami"
import TentangKami from "./pages/TentangKami"
import Header from "./components/header/Header"

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route path="/login" element={<HalamanLogin/>}/>
        <Route path="/about" element={<TentangKami/>}/>
        <Route path="/contact" element={<KontakKami/>}/>
      </Routes>
    </Router>
    </>
  )
}
