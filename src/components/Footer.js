import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <p id="footer"> Copyright &copy; {year} Noobie</p>
    </div>
  );
};

export default Footer;
