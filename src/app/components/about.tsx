import Image from "next/image";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* left */}
                <div className="flex flex-col items-center">
                    <Image 
                        className="rounded-full" 
                        src={"/images/Rafia.jpg"} 
                        width={200} 
                        height={200} 
                        alt="Profile" 
                    />
                    <div className="flex justify-center items-center mt-4">
                        <Link href={"https://www.youtube.com/"} className="text-red-500 text-2xl mx-2">
                            <FaYoutube />
                        </Link>
                        <Link href={"https://www.facebook.com/"} className="text-blue-500 text-2xl mx-2">
                            <FaFacebook />
                        </Link>
                        <Link href={"https://www.instagram.com/"} className="text-pink-500 text-2xl mx-2">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                {/* right */}
                <div className="ml-0 md:ml-10 mt-6 md:mt-0 text-center md:text-left">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">
                        Welcome to my portfolio! I am a passionate front-end developer skilled in creating responsive and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I bring designs to life and enhance user experiences through clean code and innovative solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;