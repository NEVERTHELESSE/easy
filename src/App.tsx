import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./layout/header/Header";
import Image from "./components/Image";
import { lazy } from "react";

const Contact = lazy(() => import("./pages/contact/Contact"));
const Services = lazy(() => import("./pages/services/Services"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Link
        to="/whatsapp.com"
        className="fixed bottom-3 animate-bounce right-3"
      >
        <Image src="/images/whatsapp.png" />
      </Link>
    </BrowserRouter>
  );
}
