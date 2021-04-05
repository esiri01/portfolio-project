import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
      <div class="header-wrapper">
          <div class="main-info">
              <h1>Esiri Onokurhefe</h1>
              <Typed
                className='typed-text'
                strings={["Aerospace Engineer", "Frontend Developer", "Data Analyst", "Tech Educator"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <a href="#" className="btn-main-offer">Contact Me</a>
          </div>
      </div>
    )
}

export default Header
