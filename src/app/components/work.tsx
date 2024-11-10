function Work() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full mt-12 mb-12">
            {/* Work History Text Section */}
            <div className="w-11/12 md:w-1/2 flex flex-col items-center mb-8 text-center">
                <h1 className="text-3xl font-semibold">Work History</h1>
                <p className="mt-4">
                    I have grown through web development, professional training, and academic achievements with continuous dedication and hard work. Here's a brief overview of my work history:
                </p>
            </div>

            {/* Work Experience Boxes */}
            {[
                {
                    title: "University of Karachi",
                    role: "Student",
                    journeyTitle: "Academic Journey - UK",
                    description: "In 2024, I enrolled in the University of Karachi to pursue a Bachelor's in Computer Science, combining academic knowledge with practical skills."
                },
                {
                    title: "Governor IT Initiative",
                    role: "Student",
                    journeyTitle: "Giaic - Reaching Quarter 2",
                    description: "Through hard work, I progressed to Quarter 2, mastering AI, Metaverse, Blockchain and tools like Next.js and Tailwind CSS."
                },
                {
                    title: "Web Development",
                    role: "Completed",
                    journeyTitle: "Web - Journey",
                    description: "I started by learning HTML, CSS and JavaScript, building websites, freelancing, and working on personal projects to sharpen my skills."
                }
            ].map((work, index) => (
                <div key={index} className="w-11/12 md:w-4/5 bg-white flex justify-between items-center p-5 mb-4 rounded-lg shadow-md flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/3">
                        <h1 className="text-xl font-bold">{work.title}</h1>
                        <span>{work.role}</span>
                    </div>
                    <div className="w-full md:w-2/3 mt-2 md:mt-0">
                        <h1 className="text-lg font-semibold">{work.journeyTitle}</h1>
                        <p>{work.description}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Work;