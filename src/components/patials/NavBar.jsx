import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogged(!!token); // true si token existe
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">LivreApp</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>

          {isLogged ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-book">Créer un livre</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm btn-danger ms-2" onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Connexion">Connexion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Inscription">Inscription</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
