import NavBarButton from "./NavBarButton";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <header className="flex flex-row justify-center items-center fixed w-full z-10 font-Outfit
    invisible lg:visible">
      <nav className="flex flex-row justify-around items-center w-full backdrop-blur-3xl py-2">
        <span className="font-oxanium text-2xl">GB Training</span>
        <ol className="flex gap-10 justify-center items-center font-outfit text-xl text-white">
          <NavBarItem>Início</NavBarItem>
          <NavBarItem>Sobre</NavBarItem>
          <NavBarItem>Qualificações</NavBarItem>
          <NavBarItem>Serviços</NavBarItem>
          <NavBarItem>Feedback</NavBarItem>
        </ol>
        <NavBarButton />
      </nav>
    </header>
  );
}
