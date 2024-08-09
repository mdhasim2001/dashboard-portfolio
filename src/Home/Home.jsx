import { Link } from "react-router-dom";
import hasim from "../assets/Hasim.jpg"

const Home = () => {
    return (
        <div className="w-full h-full lg:flex items-center justify-around px-5 lg:p-10">
            <div>
                <h1 className="logo-font mb-5 text-3xl">Hi, I am a Web Developar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur porro ipsa fuga amet, perferendis autem corrupti distinctio voluptatem vel, quibusdam mollitia atque dignissimos sit possimus alias saepe iusto velit repellat.</p>
                <button className="header-font mt-5 py-2 px-5 border mr-5">DOWNLOAD CV</button>
                <button className="header-font mt-5 py-2 px-5 border"><Link to="/contact">CONTACT ME</Link></button>
            </div>
            <div>
                <img className="mt-5 lg:mt-0 md:w-4/5" src={hasim} alt="" />
            </div>
        </div>
    );
};

export default Home;