function Education() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full mt-12 mb-12">
            {/* Education Text Section */}
            <div className="w-11/12 md:w-1/2 flex flex-col justify-center items-center mb-8 text-center">
                <h1 className="text-3xl font-bold">Education</h1>
                <p className="mt-4">
                    Trusted by professionals for Exceptional Quality and Service, our clients from various industries trust us to deliver top-notch quality and results. Here's what they have to say about our work..
                </p>
            </div>

            {/* Education Boxes */}
            {[{
                university: "University of Karachi",
                role: "Student",
                degree: "Bachelor in Computer Science",
                description: "Graduating with a Bachelor in Computer Science from the University of Karachi, I gained comprehensive knowledge in both theoretical and practical aspects of computing. The program emphasized critical skills such as software development, data analysis, and problem-solving, preparing me for diverse roles in the tech industry. My education was enriched by hands-on experience with cutting-edge technologies and collaborative projects, fostering a strong foundation for my future career."
            }, {
                university: "Governor IT Initiative",
                role: "Student",
                degree: "Certified Web 3.0 and Metaverse",
                description: "Completing the Certified Web 3.0 and Metaverse course by the Governor IT Initiative equipped me with essential skills in cutting-edge technologies shaping the digital landscape. This program emphasized practical applications of blockchain, decentralized applications, and immersive experiences within the Metaverse, fostering innovative thinking and technical proficiency. Engaging with industry experts and hands-on projects prepared me to contribute effectively to the evolving fields of Web 3.0 and virtual environments."
            }, {
                university: "Web Development",
                role: "Completed",
                degree: "Certificate of Web Training",
                description: "The Certificate in Web Development from the Web Training program provided me with a solid foundation in front-end and back-end technologies. Through hands-on projects, I mastered essential skills in HTML, CSS, JavaScript, and various frameworks, enabling me to create responsive and user-friendly websites. This course not only enhanced my technical abilities but also fostered my creativity and problem-solving skills in web design and development."
            }].map((edu, index) => (
                <div key={index} className="w-11/12 md:w-4/5 bg-white flex justify-between items-center p-5 mb-4 rounded-lg shadow-md flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/3">
                        <h1 className="text-xl font-semibold">{edu.university}</h1>
                        <span>{edu.role}</span>
                    </div>
                    <div className="w-full md:w-2/3 mt-2 md:mt-0">
                        <h1 className="text-lg font-bold">{edu.degree}</h1>
                        <p>{edu.description}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Education;