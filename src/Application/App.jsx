import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import { useState } from "react";


const App = () => {

    const [navbar, setNavbar] = useState(false)
    

    return (
        <div className="w-full lg:flex bg-red-50">
            <div className={`${navbar ?"":"hidden" } lg:block w-[70%] md:w-[40%] lg:w-0 absolute lg:relative`}>
                <RiMenuFoldFill className={`${navbar ? "": "hidden"} lg:hidden m-5 text-xl`}  onClick={()=> setNavbar(false)}/>
                <Navbar/>
            </div>
            <div className="lg:w-4/5 lg:ml-[20%] lg:h-[100vh]">
                <div className="p-5 lg:p-0 text-xl">
                    <RiMenuFold2Fill className={`${navbar ? "hidden": ""} lg:hidden`} onClick={()=> setNavbar(true)} />
                    
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default App;