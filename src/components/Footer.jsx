
import React from "react";

var myDate = new Date();
myDate =myDate.getFullYear();

var x="Hola;"
function Footer(){
    return (
        <footer><p>CopyRight:{myDate}</p>
        </footer>
      );
}

export default Footer;

