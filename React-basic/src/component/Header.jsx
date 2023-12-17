import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul style={{ display:"flex", justifyContent:"center", gap:"2em", listStyle:'none', backgroundColor:"#ddd", padding:"20px" }}>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li> */}
                <NavLink className={({isActive})=>isActive? "text-success":"text-primary"} to="/">Home</NavLink>
                <NavLink className={({isActive})=>isActive? "text-success":"text-primary"} to="/about">About</NavLink>
                <NavLink className={({isActive})=>isActive? "text-success":"text-primary"} to="/service">Service</NavLink>
            </ul>
        </div>
    );
};

export default Header;