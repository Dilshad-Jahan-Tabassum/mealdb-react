import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">

  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by MealDB</p>
  </aside>
</footer>
    );
};

export default Footer;