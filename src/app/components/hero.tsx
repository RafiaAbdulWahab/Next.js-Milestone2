import Image from "next/image";

function Hero() {
    return (
        <div className="w-full h-[400px] flex justify-center items-center mt-8">
            <div className="w-4/5 h-full bg-white flex justify-evenly items-center shadow-lg md:flex-row flex-col">
                {/* Left Section */}
                <div className="flex justify-center mb-4 md:mb-0">
                    <Image 
                        className="w-[250] h-[250px] rounded-lg" 
                        src={"/images/Rafia.jpg"} 
                        width={250} 
                        height={250} 
                        alt="Profile" 
                    />
                </div>
                
                {/* Right Section */}
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl md:text-3xl leading-7 md:leading-normal">I'm Rafia Abdul Wahab, Full-Stack Developer</h1>
                    <p className="mt-5 text-base md:text-lg">
                        Welcome to my portfolio! I am a passionate full-stack developer skilled in creating responsive and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I bring designs to life and enhance user experiences through clean code and innovative solutions.
                    </p>
                    <button className="mt-8 px-5 py-2 bg-pink-300 rounded-md font-semibold cursor-pointer">HIRE ME</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;