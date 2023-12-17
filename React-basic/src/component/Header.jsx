import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul style={{ display:"flex", justifyContent:"center", gap:"2em", listStyle:'none', backgroundColor:"#ddd", padding:"20px" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </div>
    );
};

export default Header;