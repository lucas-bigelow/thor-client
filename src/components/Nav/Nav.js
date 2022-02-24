import { useHistory } from 'react-router-dom';

function Nav() {
  const history = useHistory();
  
  const handleHome = () => {
    history.push('/');
  }

  const handleTrails = () => {
    history.push('/trails');
  }

  const handleUser = () => {
    // TODO
  }

  return (
    <nav>
      <div><button onClick={handleHome}>Home</button></div>
      <div><button onClick={handleTrails}>Trails</button></div>
      <div><button onClick={handleUser}>Log In/Sign Up</button></div>
    </nav>
  )
}

export default Nav;