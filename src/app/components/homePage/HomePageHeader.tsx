import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <header className="flex justify-around items-center absolute h-20 w-screen z-10 py-8 bg-black font-Outfit">
        <span className="font-oxanium text-2xl">GB Training</span>
        <nav>
            <ol className="flex gap-8 justify-center items-center font-outfit text-[20px] text-gray-500">
                <NavBarItem>Início</NavBarItem>
                <NavBarItem>Sobre</NavBarItem>
                <NavBarItem>Qualificações</NavBarItem>
                <NavBarItem>Serviços</NavBarItem>
                <NavBarItem>Feedback</NavBarItem>
            </ol>
        </nav>
    </header>
  );
}
