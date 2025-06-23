import Navbar from "./components/Navbar";
import "./App.css";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./components/RoomDetails";
import MyBooking from "./components/MyBooking";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/rooms" element={<AllRooms/>}></Route>
          <Route path="/rooms/:id" element={<RoomDetails/>}></Route>
          <Route path="/my-bookings" element={<MyBooking/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
