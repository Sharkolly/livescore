import './Dashboard.css';
// import { signOutBtn } from '../Auth/Login';
import { useEffect } from 'react';
import Champe from './uefachamp.json';
import {  Link } from 'react-router-dom';

// console.log(Champe);


const Dashboard = ({ user, setUser }) => {
  const LogOut = () => {
    // localStorage.removeItem('User-profile');
    // signOutBtn()
    // setUser(null);
  };

  const clubScores = Champe.map((data, index) =>
  (
    <Link to={`/match_details/${data.match_id}/info`}>
      <div className='german' key={data.match_id}>
        <div className="uefa_stats">
          <h3>{`${new Date(data.match_date).toDateString()} ${data.match_time}`}</h3>
          <div className="german-container">
            <h2 className='team1'><img src={`${data.team_home_badge}`} alt="" /> {data.match_hometeam_name}  </h2>
            <span className="q">
              <span> [{data.match_hometeam_halftime_score}] {data.match_hometeam_score} </span>
              -
              <span>  {data.match_awayteam_score} [{data.match_awayteam_halftime_score}] </span>
              {/* ( FT ) */}
            </span>
            <h2 className='team2' ><img src={`${data.team_away_badge}`} alt="" />  {data.match_awayteam_name} </h2>
          </div>
        </div>

        <div className="match_status">
          <p>{ data.match_status === 'Finished' ? 'FT' : data.match_status}</p>
        </div>
        <div className="goal-scorers">
          {data?.goalscorer?.map((champs) => (
            <div className='goal_time_scorers'>
              <p> {champs?.home_scorer} <span>{champs?.home_assist === '' ? '' : `(${champs?.home_assist})`}</span></p>
              <span>'{champs?.time}'</span>
              <p> {champs?.away_scorer} <span>{champs?.away_assist === '' ? '' : `(${champs?.away_assist})`}</span></p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
  )
  return (
    <div className="dashboard">
      {clubScores}
    </div>
  )
}

export default Dashboard;