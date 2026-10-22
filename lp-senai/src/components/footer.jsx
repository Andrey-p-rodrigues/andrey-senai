import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="/" className="footer__logo">
          SENAI<span>i</span>
        </a>

        <nav className="footer__social" aria-label="Redes sociais">
         
          <a href="#" aria-label="Instagram">
            <img src="/src/assets/insta.png" alt="" />
          </a>

          <a href="#" aria-label="LinkedIn">
            <img src="/src/assets/linkedin.png" alt="" />
          </a>

          <a href="#" aria-label="Facebook">
            <img src="/src/assets/facebook.png" alt="" />
          </a>

          <a href="#" aria-label="YouTube">
            <img src="/src/assets/yt.png" alt="" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
