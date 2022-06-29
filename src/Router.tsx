import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/movie/:slug" element={<Movie />}/>
    </Routes>
  )
}