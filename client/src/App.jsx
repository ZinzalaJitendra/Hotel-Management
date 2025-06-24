import Navbar from "./components/Navbar";
import "./App.css";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./components/RoomDetails";
import MyBooking from "./components/MyBooking";
// import HotelReg from "./components/HotelReg";
import Layout from "./Pages/hotelOwner/Layout";
import Dashboard from "./Pages/hotelOwner/Dashboard";
import ListRoom from "./Pages/hotelOwner/ListRoom";
import AddRoom from "./Pages/hotelOwner/AddRoom";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}

      {/* {false && <HotelReg />} */}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<AllRooms />}></Route>
          <Route path="/rooms/:id" element={<RoomDetails />}></Route>
          <Route path="/my-bookings" element={<MyBooking />}></Route>
          <Route path="/owner" element={<Layout></Layout>}>
            <Route index element={<Dashboard />}></Route>
            <Route path="add-room" element={<AddRoom />}></Route>
            <Route path="list-room" element={<ListRoom />}></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
