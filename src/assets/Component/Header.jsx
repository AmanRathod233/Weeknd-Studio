import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import MotionFadeIn from "./ScrollAnimation";
import logo from '../Images1/Layer1.svg';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleScroll = (e, id) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } }); 
    }
  };

  return (
    <header className="px-4 lg:px-0 fixed left-0 top-0 w-full z-100">
      {/* Desktop Nav */}
      <MotionFadeIn animation="slideDownFade" delay={0.2} duration={0.8}>
        <nav className="bg-[#ececec] rounded-full py-[12px] px-[13px] items-center justify-between mx-auto container-header mt-[30px] border border-[#b5b5b5] sm:flex hidden">
          <div className="flex items-center space-x-[30px]">
            <Link to="/">
              <img src={logo} alt="Logo" className="p-[15px]" draggable="false" />
            </Link>
          </div>

          <ul className="flex items-center space-x-[40px] font-[500]">
            <li>
              <a href="/#About" onClick={(e) => handleScroll(e, "About")} className="text-black font-prime hover:text-[#FF4202] transition-colors duration-200 ease-in-out">About Us</a>
            </li>
            <li>
              <a href="/#services" onClick={(e) => handleScroll(e, "services")} className="text-black font-prime hover:text-[#FF4202] transition-colors duration-200 ease-in-out">Services</a>
            </li>
            <li>
              <a href="/#Portfolio" onClick={(e) => handleScroll(e, "Portfolio")} className="text-black font-prime hover:text-[#FF4202] transition-colors duration-200 ease-in-out">Portfolio</a>
            </li>
          </ul>

          <div>
            <button className="bg-[#171717] text-white px-[30px] py-[14px] rounded-full font-prime flex items-center cursor-pointer hover:bg-[#FF4202] transition-colors duration-300 ease-in-out">
              Book A Call
            </button>
          </div>
        </nav>
      </MotionFadeIn>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-between items-center px-4 py-3 border border-[#b5b5b5] rounded-full mt-[20px] mx-3 bg-[#ececec]">
        <img src={logo} alt="Logo" className="w-[200px] object-cover" draggable="false" />
        <button onClick={() => setSidebarOpen(true)} className="text-white bg-[#171717] px-4 py-2 rounded-full font-prime text-sm">
          Menu
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
        <div className="p-4 border-b">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img src={logo} alt="Logo" className="h-6 w-full object-contain" />
          </Link>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-black font-prime text-lg">
          <li>
            <a href="/#About" onClick={(e) => { handleScroll(e, "About"); setSidebarOpen(false); }}>About Us</a>
          </li>
          <li>
            <a href="/#services" onClick={(e) => { handleScroll(e, "services"); setSidebarOpen(false); }}>Services</a>
          </li>
          <li>
            <a href="/#Portfolio" onClick={(e) => { handleScroll(e, "Portfolio"); setSidebarOpen(false); }}>Portfolio</a>
          </li>
        </ul>

        <div className="px-6">
          <button className="bg-[#171717] text-white w-full py-3 rounded-full font-prime">Book A Call</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
