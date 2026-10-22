 import './header.css';

function Header() {
  return (
    <header className="header">
    
      <div className="top-bar">
        <div className="container">
          <ul className="links">
            <li><a href="#fiesc">FIESC</a></li>
            <li><a href="#ciesc">CIESC</a></li>
            <li><a href="#sesi">SESI</a></li>
            <li><a href="#senai" className="active">SENAI</a></li>
            <li><a href="#iel">IEL</a></li>
          </ul>
        </div>
      </div>

     
      <nav className="main-nav">
        <div className="container nav-content">
          
          <div className="nav-logo">
            <a href="/">
              <span className="logo">SENAI</span>
            </a>
          </div>

         
          <ul className="nav-links">
            <li><a href="#institucional">Institucional</a></li>
            <li><a href="#para-voce">Para você</a></li>
            <li><a href="#para-empresas">Para empresas</a></li>
            <li><a href="#ja-sou-aluno">Já sou aluno</a></li>
            <li><a href="#transparencia">Transparência</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
