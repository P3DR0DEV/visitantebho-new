import { Route, Routes } from "react-router-dom";
import { Home, Login, NotAllowed } from "@/pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/not-allowed" element={<NotAllowed />} />
    </Routes>
  );
}
