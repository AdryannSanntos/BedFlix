import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Event />}/>
      <Route path="/movies/:slug" element={<Event />}/>
    </Routes>
  )
}