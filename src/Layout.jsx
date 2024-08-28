import { Outlet } from 'react-router-dom';
import './Layout.css';
import Navbar from './Components/Navbar/Navbar';
const Layout = () => {
  const date = new Date();

  return (
    <div className="dashboard">
      <Navbar />
      <div className="team-container">
        <Outlet />
      </div>
      {/* <div className='team-container' style={{ border: 'none', textAlign: 'right', marginBlock: '1.5rem', background: 'transparent', fontSize: '1.2rem', fontWeight: 'bold' }}> */}
        {/* {date.toDateString()} {date.getHours()}:{date.getMinutes()} */}
        {/* {loading ? (
        <div className="loader">
          <Circles
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='circles-loading'
          />
        </div>
      ) : (
        <div>
          <h1>Content Loaded</h1>
        </div>
        )} */}
      {/* </div> */}
    </div>
  )
}

export default Layout;