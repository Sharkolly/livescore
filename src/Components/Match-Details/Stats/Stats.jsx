import './Stats.css'
import Champe from '../../Dashboard/uefachamp.json';


const Stats = () => {
  return (
    <div>
      {Champe.map((match) => (

        <div key={match.match_id}>
          {match.statistics.map((stats) => (
            <div className="stats_name_value_progress_container">
              <div className="stats_name_value">
                <p>{stats.home}</p>
                <p>{stats.type}</p>
                <p>{stats.away}</p>
              </div>

              <div className='progress_bar'>
                <progress className='home' value={stats.home.replace('%', '')} max={parseInt(stats.home.replace('%', '')) + parseInt(stats.away.replace('%', ''))}></progress>
                <progress className='away' value={stats.away.replace('%', '')} max={parseInt(stats.home.replace('%', '')) + parseInt(stats.away.replace('%', ''))}></progress>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      ))}



    </div>
  )
}

export default Stats