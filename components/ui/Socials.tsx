import React from "react";
import {
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://twitter.com/AbdallhSabry9"
        className="social"
        target="_blanck"
      >
        <FaTwitter
          className="social-icon"
          style={{ backgroundColor: "#1DA1F2" }}
        />
      </a>
      <a href="#s" className="social">
        <FaTelegram
          className="social-icon"
          style={{ backgroundColor: "#229ED9" }}
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007172563893"
        target="_blanck"
        className="social"
      >
        <FaFacebook
          className="social-icon"
          style={{ backgroundColor: "#4267B2" }}
        />
      </a>
      <a className="social">
        <FaYoutube
          className="social-icon"
          style={{ backgroundColor: "#FF0000" }}
        />
      </a>
      <a href="https://wa.me/+201091415560" className="social" target="_blanck">
        <FaWhatsapp
          className="social-icon"
          style={{ backgroundColor: "#25D366" }}
        />
      </a>
    </div>
  );
};

export default Socials;
