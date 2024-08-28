import './Info.css';
import Champe from '../../Dashboard/uefachamp.json';

const Info = () => {
  return (
    <div>

      {Champe.map((match) => (
        <div className="info_container">
          <p>Match: <span>{match.league_name}
            {/* <img src={match.league_logo} alt={match.league_name} /> */}
          </span></p>
          <p>Date: <span>{`${new Date(match.match_date).toDateString()}`}</span></p>
          <p>Time: <span>{match.match_time} </span></p>
          <p>Home Lineup System: <span>{match.match_hometeam_system}</span></p>
          <p>Away Lineup System: <span>{match.match_awayteam_system}</span></p>
          <p>Stadim: <span>{match.match_stadium}</span></p>
          <p>Season: <span>{match.league_year}</span></p>
          <p>Match Referee: <span>{match.match_referee}</span></p>
        </div>
      ))}
    </div>
  )
}

export default Info;