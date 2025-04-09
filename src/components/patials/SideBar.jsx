import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: '200px', position: 'fixed', top: 0, left: 0 }}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create-book">Créer un livre</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profil</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
