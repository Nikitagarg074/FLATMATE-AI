import { useState } from "react";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";
import HomePage  from "./home.jsx";
import AboutPage  from "./about.jsx";
import ContactPage  from "./contact.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Nav setPage={setPage} activePage={page} />

      {page === "home" && <HomePage setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "contact" && <Contact setPage={setPage} />}
    </>
  );
}