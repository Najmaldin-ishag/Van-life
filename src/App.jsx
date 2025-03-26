import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VansDetails from "./Pages/VansDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/host/dashboard";
import Income from "./Pages/host/income";
import Reviews from "./Pages/host/reviews";
import HostVanDetails from "./Pages/host/HostVanDetails";
import HostLayout from "./Components/HostLayout";
import HostVans from "./Pages/host/HostVans";
import HostVanInfo from "./Pages/host/HostVanInfo";
import HostVanPricing from "./Pages/host/HostVanPricing";
import HostVanPhoto from "./Pages/host/HostVanPhoto";
// import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route path="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
