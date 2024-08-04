import './navbar.css'
import Logo from './logo';
import Navigation from './navigation';
import SearchBox from './searchbox';

function NavBar() {
  return (
    <div className="navbar">
      <Logo></Logo>
      <Navigation></Navigation>
      <SearchBox></SearchBox>
    </div>
  );
}

export default NavBar