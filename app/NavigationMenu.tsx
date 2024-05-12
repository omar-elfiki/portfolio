
function NavigationMenu() {
    return (
        <nav className="fixed top-2 left-0 w-full flex justify-around">
            <a href="#about" className="text-white-500 hover:text-blue-800 mx-3">About</a>
            <a href="#skills" className="text-white-500 hover:text-blue-800 mx-3">Skills</a>
            <a href="#projects" className="text-white-500 hover:text-blue-800 mx-3">Projects</a>
            <a href="#contact" className="text-white-500 hover:text-blue-800 mx-3">Contact</a>
        </nav>
    );
}

export default NavigationMenu;