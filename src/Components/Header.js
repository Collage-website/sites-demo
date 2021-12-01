import React from 'react';
import logo1 from '../images/govt-college-logo.png';
import logo2 from '../images/govt-logo.png'
const Header = () => {
    return (
        <>
            <div className="logo-img row">
                <div className="col">
                 <img src={logo1} alt="logo image" height="100" width="100"/>
                 <img src={logo2} alt="logo image" height="100" width="100"/>
                </div>
            </div>

            <center className="m-4">शासकीय अभियांत्रिकी व संशोधन महाविद्यालय, अवसरी खुर्द तालुका- आंबेगाव, जिल्हा- पुणे, ४१२४०५</center>
            <center className="m-4">GOVERNMENT COLLAGE OF ENGINEERING ANG RESEARCH, AWASARI</center>
        
        </>
    )
}

export default Header
