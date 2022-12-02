import React from 'react'
import {Link} from 'react-router-dom'
import "./styles.css";

import { RiHome5Line, RiRestaurantLine, RiWalkLine, RiCalendarCheckLine } from "react-icons/ri";

const NavigationBar = () => {
    return (
        <div className="NavigationBar" data-testid = "NavigationBar">
          <Link to = "/">
            <RiHome5Line className="Icon" alt="Home" />
          </Link>
          <br/>
          <Link to = "/Diet">
            <RiRestaurantLine className="Icon" alt="Home" />
          </Link>
          <br/>
          <Link to = "/Exercise">
            <RiWalkLine className="Icon" alt="Home" />
          </Link>
          <br/>
          <Link to = "/Routine">
            <RiCalendarCheckLine className="Icon" alt="Home" />
          </Link>
        </div>
    )
}

export default NavigationBar