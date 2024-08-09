

const Contact = () => {
    return (
        <div className="w-full lg:h-[100vh] px-5 flex flex-col items-center justify-center">
            <input className="w-full md:w-4/5 lg:w-2/4 mx-auto py-3 px-5 border-b outline-none mb-5" type="text" placeholder="Enter your name" />
            <input className="w-full md:w-4/5 lg:w-2/4 mx-auto py-3 px-5 border-b outline-none mb-5" type="email" placeholder="Enter your email" />
            <textarea className="w-full md:w-4/5 lg:w-2/4 mx-auto py-3 px-5 border outline-none mb-5" name="" id="" rows="5" placeholder="You can speak your mind"></textarea>
            <button className="w-full md:w-4/5 lg:w-2/4 mx-auto py-3 border">Send</button>
        </div>
    );
};

export default Contact;