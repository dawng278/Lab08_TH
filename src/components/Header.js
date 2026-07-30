import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Movie App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/detail">Detail</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
