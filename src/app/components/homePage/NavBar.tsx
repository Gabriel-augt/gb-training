import NavBarButton from "./NavBarButton";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <header className="flex justify-around items-center relative h-20 w-full z-10 py-8 bg-black font-Outfit">
        <span className="font-oxanium text-2xl">GB Training</span>
        <nav>
            <ol className="flex gap-8 justify-center items-center font-outfit text-[20px] text-white">
                <NavBarItem>Início</NavBarItem>
                <NavBarItem>Sobre</NavBarItem>
                <NavBarItem>Qualificações</NavBarItem>
                <NavBarItem>Serviços</NavBarItem>
                <NavBarItem>Feedback</NavBarItem>
            </ol>
        </nav>
        <NavBarButton />
    </header>
  );
}
