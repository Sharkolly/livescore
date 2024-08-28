import Champe from '../../Dashboard/uefachamp.json';
import './Summary.css';

const Summary = () => {
  return (
    <div className='team_substitutions'>
      {Champe.map((match) => (
        <div className='match_substitution'>
          <div className="home_sub">
            {/* <p className='sub_team_name'>{ match.match_hometeam_name }</p> */}
            {match.substitutions.home.map((sub) => (
              <div className="sub_container">
                <div className="sub_time"><p>'{sub.time}'</p></div>
                <p className="home_sub">{sub.substitution.replace(/\|/g, '🔛')} </p>
              </div>
            ))}
          </div>
          <div className="away_sub">
            {/* <p className='sub_team_name'>{ match.match_awayteam_name }</p> */}
            {match.substitutions.away.map((sub) => (
              <div className="sub_container sub_container_right">
                <p className="away_sub">{sub.substitution.replace(/\|/g, '🔛')}</p>
                <div className="sub_time"><p>'{sub.time}'</p></div>
              </div>
            ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default Summary;