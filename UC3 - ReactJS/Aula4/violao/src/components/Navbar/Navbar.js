import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ assetsBase, currentUser, onLogout }) {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/produtos', label: 'Produtos' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
  ];

  return (
    <header className={styles.hero} style={{ backgroundImage: `url('${assetsBase}/guitarras_header.jpg')` }}>
      <div className={styles.menu}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className={styles.userBar}>
        {currentUser ? (
          <>
            <span>Olá, {currentUser.name}</span>
            <button type="button" onClick={onLogout}>
              Sair
            </button>
          </>
        ) : (
          <span>Você não está logado.</span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
