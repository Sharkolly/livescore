import { useContext, useState } from 'react';
import { Store } from '../Store/Store';
import { NavLink, Link } from 'react-router-dom';
import Menu from '../Svg/menu.svg';
import { toast } from 'react-toastify';



const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { user, setIsAuthenticated } = useContext(Store);
  // console.log(user?.user.photoURL);

  const logOut = () => {
    setIsAuthenticated(false);
    toast.success('Log out Successful');
  }

  return (
    <div className='top'>
      <div className='navbar'>
        <div className="top-nav">
          <div className="logo">
            <h2>Mola Fast<span>Score⚽</span></h2>
          </div>
          <div className="navlinks">
            <nav>
              <ul>
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                <li><NavLink to="/Bet">Bet</NavLink></li>
                <li><NavLink to="/Search">Search</NavLink></li>
                {/* <li><NavLink to="/">Live-Scores</NavLink></li> */}
              </ul>
            </nav>
          </div>
          <div className="profilePic">
            <img className='hamburger' onClick={() => setToggleNav(true)} src={Menu} alt="Hamburger" />

            <div className="pic" >
              <Link to='/profile'>
                {/* {user?.user.photoURL ? <img title={user?.user.email} src={user?.user.photoURL} alt="Profile-Picture" /> :
                  <p title={user?.user.email} >{user ? user?.user.email[0].toUpperCase() : ''}</p>} */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${toggleNav ? 'block' : 'none'}`} >
        <div className="sidebar-nav" >
          <p onClick={() => setToggleNav(false)}  >X</p>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/bet">Bet</NavLink></li>
              {/* <li><NavLink to="/dfb_Cup">Dfb Pokal</NavLink></li> */}
              {/* <li><NavLink to="/epl">English Premier League</NavLink></li> */}
              {/* <li><NavLink to="/bundesliga">Fußball-Bundesliga </NavLink></li> */}
              <li><NavLink to="/bundesliga">Bundesliga </NavLink></li>
              {/* <li><NavLink to="/laliga">Laliga</NavLink></li> */}
              {/* <li><a to="/Livescores">Live Game</a></li> */}
              <li><NavLink to="/league_table">League Table</NavLink></li>
              <li><NavLink to="/club_teams">Club Teams</NavLink></li>
              {/* <li><NavLink to="/champions_league">UEFA Champions League</NavLink></li> */}
              {/* <li><NavLink to="/europa">UEFA Europa League</NavLink></li> */}
              {/* <li><NavLink to="/UEFA">UEFA</NavLink></li> */}
              <li><NavLink to="/Internatonal-Cups">Cups</NavLink></li>
              <li><NavLink to="/Club-cups">Clubs Cups</NavLink></li>
              <li><NavLink to="/players_stats">Players Stats</NavLink></li>
              {/* <li><NavLink to="/player_search">Search Players</NavLink></li> */}
              {/* <li><NavLink to="/logout">Log Out</NavLink></li> */}
              <li><span onClick={logOut}>Log Out</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar;