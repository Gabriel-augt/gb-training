import Link from "next/link";
import NavBarButton from "./NavBarButton";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <header
      className="flex flex-row justify-center items-center fixed w-full z-10 font-Outfit
    invisible lg:visible">
      <nav className="flex flex-row justify-around items-center w-full backdrop-blur-3xl py-2">
        <span className="font-oxanium text-2xl">
          <a href="#home">
            GB Training
          </a>
        </span>
        <ul
          className="flex gap-6 justify-center items-center font-outfit text-lg text-white 
        min-[1280px]:text-xl min-[1280px]:gap-10">
          <NavBarItem>
            <Link href="#home">
              Início
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#about">
              Sobre
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#qualification">
              Qualificações
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#services">
              Serviços
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#feedback">
              Feedback
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#contact">
              Contato
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#faq">
              FAQ
            </Link>
          </NavBarItem>
        </ul>
        <NavBarButton />
      </nav>
    </header>
  );
}
