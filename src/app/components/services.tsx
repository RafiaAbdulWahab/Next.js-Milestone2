import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdNoPhotography } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";

function Services() {
    return (
        <main className="flex justify-center items-center w-full h-full mt-24">
            <div className="w-4/5 flex flex-col items-center">
                {/* Top Section */}
                <div className="w-1/2 flex flex-col items-center">
                    <h2 className="text-3xl font-sans">My Services</h2>
                    <p className="mt-5 text-center mx-4">
                        I offer a diverse array of services, including web development for creating dynamic websites, sound design to enhance audio experiences, and UI/UX design for intuitive user interactions. Additionally, I specialize in game design to bring engaging digital experiences to life, alongside professional photography and advertising solutions to elevate your brand's visibility. Let’s collaborate to transform your ideas into reality!
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="w-full mt-8 flex justify-center items-center flex-wrap">
                    {/* Service Boxes */}
                    {[
                        { icon: <FaLaptopCode className="text-[120px]" />, title: "Web Development", description: "Blog, E-Commerce" },
                        { icon: <GiSoundOn className="text-[120px]" />, title: "Sound Design", description: "Voice Over, Beat Making" },
                        { icon: <RiComputerFill className="text-[120px]" />, title: "UI/UX Design", description: "Mobile App, Website Design" },
                        { icon: <IoGameControllerOutline className="text-[120px]" />, title: "Game Design", description: "Character Design, Props & Objects" },
                        { icon: <MdNoPhotography className="text-[120px]" />, title: "Photography", description: "Portrait, Landscape, Macro" },
                        { icon: <FcAdvertising className="text-[120px]" />, title: "Advertising", description: "Print, Digital, Social Media" },
                    ].map((service, index) => (
                        <div key={index} className="w-[300px] h-[200px] bg-[#c4daf5] border-2 border-black rounded-[20px] m-2 flex flex-col justify-start items-center p-4">
                            {service.icon}
                            <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                            <span>{service.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Services;