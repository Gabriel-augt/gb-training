"use client";
import { useState } from "react";
import MobileNavBarItem from "./MobileNavBarItem";

export default function NavBarMobile() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div className="fixed left-1/2 -translate-x-1/2 top-1 flex items-center z-50 bg-transparent h-16 lg:hidden">
        <button
          className="relative group p-2 backdrop-blur-2xl rounded-full"
          onClick={handleClick}>
          <div
            className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all
          bg-purple-800 ring-0 ring-purple-950 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            {!isOpen && (
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
              </div>
            )}
            {isOpen && (
              <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 w-12">
                <div className="absolute bg-white h-[2px] w-6 transform transition-all duration-500 rotate-45"></div>
                <div className="absolute bg-white h-[2px] w-6 transform transition-all duration-500 -rotate-45"></div>
              </div>
            )}
          </div>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white z-40 font-outfit transition-all duration-500 ease-in-out
        ${ isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none" }`}>
        <div className="flex flex-col  items-center justify-center text-2xl font-outfit bg-purple-900/95 w-full h-full">
          <ul className="flex flex-col gap-12 text-left" onClick={() => setOpen(false)}>
                <MobileNavBarItem>
                  <a href="#home">
                    Início
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#about">
                    Sobre
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#qualification">
                    Qualificações
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#services">
                    Serviços
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#feedback">
                    Feedback
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#contact">
                    Contato
                  </a>
                </MobileNavBarItem>
                <MobileNavBarItem>
                  <a href="#faq">
                    FAQ
                  </a>
                </MobileNavBarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
