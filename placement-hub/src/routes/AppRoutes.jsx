import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OS from "../pages/OS";
import DBMS from "../pages/DBMS";
import CN from "../pages/CN";
import OOPS from "../pages/OOPS";
import Resume from "../pages/Resume";
import Roadmap from "../pages/Roadmap";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/os" element={<OS />} />
      <Route path="/dbms" element={<DBMS />} />
      <Route path="/cn" element={<CN />} />
      <Route path="/oops" element={<OOPS />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}