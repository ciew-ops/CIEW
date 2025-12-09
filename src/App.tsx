import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Verify from "./pages/Verify";
import Institutes from "./pages/Institutes";
import Membership from "./pages/Membership";
import Join from "./pages/Join";
import MainLayout from "./layouts/MainLayout";
import License from "./pages/Licenses";
import Members from "./pages/Members";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/institutes" element={<Institutes />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/members" element={<Members />} />
        <Route path="/license" element={<License />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
