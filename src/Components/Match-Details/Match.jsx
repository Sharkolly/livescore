import React from 'react'
import { NavLink, useParams, Outlet, useLoaderData } from 'react-router-dom';
import Champe from '../Dashboard/uefachamp.json';
import './Match.css';
const Match = () => {


    const uefa = useLoaderData();
    console.log(uefa);

    const clubScores = Champe.map((data) =>
    (

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
                <p>{data.match_status === 'Finished' ? 'FT' : data.match_status}</p>
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
    )
    )

    return (
        <div className='match_stats_container'>
            {clubScores}
            <div className="match_stats_outlet">
                <div className="match_stats">
                    <NavLink to='info'>Info</NavLink>
                    <NavLink to='summary'>Summary</NavLink>
                    <NavLink to='stats'>Stats</NavLink>
                    <NavLink to='line_ups'>Squads</NavLink>
                    <NavLink to='cards'>Cards</NavLink>
                </div>
                <div className="match_outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Match;
