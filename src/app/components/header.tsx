import Link from "next/link";

function Header() {
    return (
        <div className="w-full h-20 bg-yellow-400 flex justify-between items-center">
            {/* Left Section */}
            <div className="ml-2">
                <h1 className="text-3xl font-sans">RT.</h1>
            </div>

            {/* Right Section */}
            <div className="w-2/5">
                <ul className="flex justify-evenly">
                    <li>
                        <Link className="text-black text-lg font-sans hover:underline hover:text-brown-600" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="text-black text-lg font-sans hover:underline hover:text-brown-600" href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className="text-black text-lg font-sans hover:underline hover:text-brown-600" href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;