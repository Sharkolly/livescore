import React from 'react'
import Champe from '../../Dashboard/uefachamp.json';
import './LineUps.css';

const LineUps = () => {
  console.log(Champe);
  return (
    <div>
      <div className="">

        {Champe.map((match) => (
          <div className="lineup_container">
            <div className="home_team_lineup">
              <h2>{match.match_hometeam_name}</h2>
              <p className='starting lineUp'>Starting Line-up</p>
              {match.lineup.home.starting_lineups.map((lineup) => (
                <>
                  <div className="">
                    <div className="home_lineup_number">
                      <div className="number">
                        <p className='lineUp'>{lineup.lineup_number}</p>
                      </div>
                      <p className='lineUp'>{lineup.lineup_player}</p>
                    </div>
                  </div>
                </>

              ))}
              <p className='substitutes lineUp'>Substitutes</p>
              {match.lineup.home.substitutes.map((lineup) => (
                <>
                  <div className="home_team_lineup">
                    <div className="home_lineup_number">
                      <div className="number">
                        <p className='lineUp'>{lineup.lineup_number}</p>
                      </div>
                      <p className='lineUp'>{lineup.lineup_player}</p>
                    </div>
                  </div>
                </>
              ))}
              <p className="home_coach">Team Coach</p>
              {match.lineup.home.coach.map((lineup) => (
                <>
                  <div className="home_team_coach">
                    <div className="away_coach">
                      <p className='lineUp'>{lineup.lineup_player}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="away_team_lineup">
              <h2>{match.match_awayteam_name}</h2>
              <p className='starting lineUp'>Starting Line-up</p>
              {match.lineup.away.starting_lineups.map((lineup) => (
                <>
                  <div className="">
                    <div className="away_lineup_number ">
                      <div className="player_lineup">
                        <p className='lineUp'>{lineup.lineup_player}</p>
                      </div>
                      <div className="number">
                        <p className='lineUp'>{lineup.lineup_number}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}

              <p className='substitutes lineUp'>Substitutes</p>
              {match.lineup.away.substitutes.map((lineup) => (
                <>
                  <div className="home_team_lineup">
                    <div className="away_lineup_number">
                      <div className="player_lineup">
                        <p className='lineUp'>{lineup.lineup_player}</p>
                      </div>
                      <div className="number">
                        <p className='lineUp'>{lineup.lineup_number}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <p className="away_coach">Team Coach</p>
              {match.lineup.away.coach.map((lineup) => (
                <>
                  <div className="away_team_coach">
                    <div className="away_coach">
                      <p className='lineUp'>{lineup.lineup_player}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default LineUps
