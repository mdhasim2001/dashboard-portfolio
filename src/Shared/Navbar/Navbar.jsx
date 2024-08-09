import { Link } from "react-router-dom";
import Hasim from "../../assets/Hasim.jpg"


const Navbar = () => {

    return (
        <div className={`lg:w-[20%] lg:h-[100vh] lg:fixed flex flex-col items-center border-r`}>
            <img className="w-[100px] m-5 lg:mt-10 rounded-full" src={Hasim} alt="" />
            <h2 className="logo-font mb-5">I am MD HASIM</h2>
            <ul className={`navbar-font flex flex-col items-center`}>
                <li className="px-3 py-2"><Link to="/">Home</Link></li>
                <li className="px-3 py-2"><Link >About</Link></li>
                <li className="px-3 py-2"><Link>Skill</Link></li>
                <li className="px-3 py-2"><Link>Project</Link></li>
                <li className="px-3 py-2"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;