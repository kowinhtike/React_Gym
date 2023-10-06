import Hero from "./components/Hero/Hero";
import "./App.css";
import Program from "./components/program/Program";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Join from "./components/Join/Join";

// https://www.youtube.com/watch?v=gpqoZQ8GNK8 for gym tutorial
// https://www.youtube.com/watch?v=TWz4TjSssbg for route

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <div className="App">
              <Hero />
              <Program />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join/>
            </div>} />
           <Route path="program" element={<Program/>} />
           <Route path="plans" element={<Plans/>} />
           <Route path="*" element={<ErrorPage/>} />         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
