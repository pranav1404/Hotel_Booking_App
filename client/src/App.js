import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Allhotels from "./pages/allHotels/allHotels";
import Underdev from "./pages/underDev/underDev";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login2" element={<Login/>}/>
        <Route path="/allhotels" element={<Allhotels/>}/>
        <Route path="/underdev" element={<Underdev/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
