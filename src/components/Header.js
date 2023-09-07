import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return <div className="absolute bg-gradient-to-b from-black z-10"> 
        <div className="w-44 mx-4 my-2">
            <img src={LOGO_URL} alt="logo" />
        </div>
    </div>
};

export default Header;