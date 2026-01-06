import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <h2
                className="text-lg lg:text-2xl font-bold tracking-wide
      bg-linear-to-r ml-[-4px] from-primary to-accent
      bg-clip-text text-transparent"
              >
                ReCloset
              </h2>
            </Link>
            <p className="mt-4 text-sm text-neutral-content/70">
              ReCloset is a sustainable fashion platform helping pre-loved
              clothes find a second life while reducing waste and guilt.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Quick Links</h3>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Collections</a>
            <a className="link link-hover">Donate Clothes</a>
            <a className="link link-hover">Contact Us</a>
          </div>

          {/* Company */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Company</h3>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Goal</a>
            <a className="link link-hover">Collaborate</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>

          {/* Social */}
          <div className="flex justify-center flex-col">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="cursor-pointer hover:text-primary transition" />
              <FaInstagram className="cursor-pointer hover:text-primary transition" />
              <FaTwitter className="cursor-pointer hover:text-primary transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-primary transition" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-content/20 py-6 text-center text-sm text-neutral-content/70">
          © {new Date().getFullYear()} ReCloset. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
