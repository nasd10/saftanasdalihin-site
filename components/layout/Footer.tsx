import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t">
      <div className="container mx-auto flex flex-col items-center justify-between
                      px-4 py-6 sm:flex-row">
        <div className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Safta Nasdalihin. All Rights Reserved.
        </div>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          <a
            href="https://github.com/nasd10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/saftanasdalihin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/safta_nas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};