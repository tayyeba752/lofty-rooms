
import Home from './Home/Home';
import Lahore from './Cities/Lahore';
// import Krachi from './Cities/Krachi';
import Form from './Home/Form';
import Booking from './Home/Booking';
import Clinder from './Home/Clinder';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomByCity from './Cities/RoomByCity';
import Favorite from "./nav-bar/Favorite";
import B from './Home/B';
import Tab from './Home/Tab'; 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="Lahore" element={<Lahore />}/>
      <Route path="city/:cityId/:cityName" element={<RoomByCity />}/>
      <Route path="Form" element={<Form />}/>
      <Route path="booking/:roomId" element={<Booking />}/>
      <Route path="Clinder" element={<Clinder />}/>
      <Route path="Favorite" element={<Favorite/>}/>  
      <Route path="B" element={<B/>}/>  
      <Route path="Tab" element={<Tab/>}/>  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
