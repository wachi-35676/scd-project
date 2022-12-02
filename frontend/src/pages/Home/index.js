import React from "react";

import Background from "../../resources/background.jpg";

function Home(){
    return(
        <div data-testid = "Home" className="Home">
            <div className="HomeBackground" data-testid = "HomeBackground">
                <img src={Background} className="bg_img" alt="Background" />
            </div>
        </div>
    );
}

export default Home;