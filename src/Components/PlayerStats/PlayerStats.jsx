import './PlayersStats.css';
import { Oval } from 'react-loader-spinner';
import { useContext, useEffect, useState } from "react";
import { Store } from '../Store/Store';

export default function PlayerStats() {
    const [loading, setLoading] = useState(false);
    const [scorers, setScorers] = useState({});
    const [scorersCountryID, setScorersCountryID] = useState('');
    const [scorersLeagueDataID, setScorersLeagueDataID] = useState([]);
    const [scorersLeagueID, setScorersLeagueID] = useState('152');
    //https://api-football-standings.azharimm.dev/leagues/${scorersLeagueID}/standings?season=2023&sort=asc


    const { countries } = useContext(Store);
    console.log(countries.map((coun) => coun.country_name));

    const fetchDataC = async () => {
        try {
            // setLoading(true);
            console.log(scorersCountryID);
            const dataF = await fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${scorersCountryID}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
            const res = await dataF.json()
            setScorersLeagueDataID(res);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const fetchDataS = async () => {
        try {
            setLoading(true);
            console.log(scorersLeagueID)
            const dataF = await fetch(` https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=${scorersLeagueID}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
            const res = await dataF.json()
            setScorers(res);
            setLoading(false);
            // console.log(scorers);
            // console.log(res)
        }
        catch (err) {
            console.log(err.message);
        }
    }
   
    useEffect(() => {
        fetchDataC();
    }, [scorersCountryID]);
    useEffect(() => {
        fetchDataS();
    }, [scorersLeagueID,scorersCountryID]);


    const year = new Date().getFullYear();

    return (
        <div>
            <div className="goal-scorers">
                <div className="stats-container pl">
                    <div className="name_season">
                        {/* <h1>{scorers?.data?.name || 'Premier League Top Scorers'}</h1> */}
                        <h1>League Top Scorers <span>{`${year - 1}/${year}`} Season</span></h1>
                        <div className="season_filter">

                            {/* <select name="league table" onChange={(e) => {
                                setScorersCountryID(e.target.value);
                            }} id=""> */}
                                {/* <option value="152">English Premier League</option>
                            <option value="302">La Liga</option>
                            <option value="207">Seria A</option>
                            <option value="168">Ligue 1</option>

                            */}
                                {/* {countries?.map((country) => (
                                    <option key={country?.country_id} value={country?.country_id}>{country?.country_name}</option>
                                ))} */}
                            {/* </select> */}
                            <select name="league table" onChange={(e) => {
                                setScorersLeagueID(e.target.value);
                            }} id="">
                                <option></option>
                               {scorersLeagueDataID?.map((league) => (
                                   <option key={league?.league_id} value={league?.league_id}>{league?.league_name}</option>
                                ))}
                            </select>
                            {/* <select name="league table" onChange={(e) => {
                                setScorersLeagueID(e.target.value);
                            }} id="">
                                <option value="152">English Premier League</option>
                                <option value="302">La Liga</option>
                                <option value="207">Seria A</option>
                                <option value="168">Ligue 1</option>
                                <option value="175">Bundesliga</option>
                            </select> */}
                            {/* <p>{`${year - 1}/${year}`} Season</p> */}
                        </div>
                    </div>
                    {!loading ? (
                        <div className="loader" style={{}}>
                            <Oval
                                height={120}
                                width={120}
                                color="rgba(232, 210, 16, 0.93)"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="rgba(232, 210, 16, 0.43)"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                    ) : (
                        <div>
                            {scorers?.result?.map((player, playerIndex) => (
                                // <div title={player.player_name} className='playerBio' key={player.team_key }>
                                <div title={player.player_name} className='playerBio' key={playerIndex}>
                                    <div className="rank_name">
                                        <span>
                                            <p className={parseInt(playerIndex) + 1 === 1 ? 'first' : ''}>{parseInt(playerIndex) + 1}</p>
                                        </span>
                                        <div className="name_team">
                                            <h3>{player.player_name}</h3>
                                            <p>{player.team_name}</p>
                                        </div>
                                    </div>
                                    {/* <p>{ player.goals }</p> */}
                                    <div className="stats">
                                        <p>Goals: {player.goals}</p>
                                        <p>Assists: {player.assists === null ? 0 : player.assists}</p>
                                        <p>Pen-Goals: {player.penalty_goals}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="color_container">
                                <div className="color_details">
                                    <div className="blue"></div>
                                    <p>Golden Boot Winner</p>
                                </div>

                            </div>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    )
}
// const plData = scorers?.result?.map((player, playerIndex) => (
//     // <div title={player.player_name} className='playerBio' key={player.team_key }>
//     <div title={player.player_name} className='playerBio' key={playerIndex}>
//         <div className="rank_name">
//             <span>
//                 <p className={parseInt(playerIndex) + 1 === 1 ? 'first' : ''}>{parseInt(playerIndex) + 1}</p>
//             </span>
//             <div className="name_team">
//                 <h3>{player.player_name}</h3>
//                 <p>{player.team_name}</p>
//             </div>
//         </div>
//         {/* <p>{ player.goals }</p> */}
//         <div className="stats">
//             <p>Goals: {player.goals}</p>
//             <p>Assists: {player.assists === null ? 0 : player.assists}</p>
//             <p>Penalty-Goals: {player.penalty_goals}</p>
//         </div>
//     </div>
// ))
