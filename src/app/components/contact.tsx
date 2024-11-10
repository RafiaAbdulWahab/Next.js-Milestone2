function Contact() {
    return (
        <main className="flex justify-center w-full h-full mt-12 mb-12">
            <div className="bg-white w-11/12 md:w-7/12 h-96 rounded-lg p-5">
                <h1 className="pl-2 text-2xl font-bold">Contact Us</h1>
                <form action="" className="flex flex-col mt-4">
                    <input 
                        type="text" 
                        placeholder="Enter Your Name" 
                        className="p-2 mb-2 bg-gray-200 border-none rounded-lg"
                    />
                    <input 
                        type="email" 
                        placeholder="abc@gmail.com" 
                        className="p-2 mb-2 bg-gray-200 border-none rounded-lg"
                    />
                    <input 
                        type="text" 
                        placeholder="Your Message" 
                        className="p-2 mb-10 bg-gray-200 border-none rounded-lg"
                    />
                    <button 
                        type="submit" 
                        className="p-2 px-4 bg-blue-400 text-white text-lg rounded-lg mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Contact;