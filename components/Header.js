import { FiHome } from "react-icons/fi";

const Navbar = () => {
    return (
        <header className="h-24 bg-white">
            <nav className="flex justify-between items-center h-full">
                <p className="text-3xl font-bold text-primary">
                    Header Content
                </p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;