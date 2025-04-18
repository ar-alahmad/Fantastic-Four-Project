import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accommodation from "./pages/Accommodation";
import RoomDetail from "./pages/RoomDetail";
import SummerHoliday from "./pages/SummerHoliday";
import WinterHoliday from "./pages/WinterHoliday";
import "./App.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="accommodation/:id" element={<RoomDetail />} />
          <Route path="summer-holiday" element={<SummerHoliday />} />
          <Route path="winter-holiday" element={<WinterHoliday />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
