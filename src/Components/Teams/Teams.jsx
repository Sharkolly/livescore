import { useState, useEffect } from 'react';
import './Teams.css';
import { Oval } from 'react-loader-spinner';
import AllTeams from '../Json/JSON/EplTeams.json';
import { toast } from 'react-toastify';

const Teams = () => {

    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState();
    const [postPerPage, setPostPerPage] = useState(1);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = AllTeams.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(AllTeams.length / postPerPage); i++) {
        pageNumber.push(i);
    };
    const changeNumber = (number) => {
        setCurrentPage(number);
        console.log(number);

    }

    console.log(currentPage);
    console.log(currentPost.map(data => data.team_name));

    const [dataValue, setDataValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clubTeams, setClubTeams] = useState(152);
    const year = new Date().getFullYear();
    const fetchData = async () => {
        try {
            setLoading(true);
            const dataF = await fetch(`https://apiv3.apifootball.com/?action=get_teams&league_id=${clubTeams}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
            const res = await dataF.json()
            setDataValue(res);
            console.log(dataValue);
            setLoading(false);
            toast.info('Some images are not available Please bear with us Thank You!! ')
        }
        catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchData();
    }, [clubTeams]);

    // const onChangee = (e) => {
    //     setPlayer(e.target.value);
    // }
    return (
        <div>
            {!loading ? (
                <div className="loader">
                    <Oval
                        height={140}
                        width={140}
                        color="rgba(232, 210, 16, 0.73)"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="rgba(232, 210, 16, 0.73)"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : (
                <div>
                    <div className="season_filter club_teams">
                        <select name="Club Teams" onChange={(e) => {
                            setClubTeams(e.target.value);
                        }} id="">
                            <option value="152">English Premier League</option>
                            <option value="302">La Liga</option>
                            <option value="207">Seria A</option>
                            <option value="168">Ligue 1</option>
                            <option value="175">Bundesliga</option>
                        </select>
                        <p>{`${year - 1}/${year}`} Season</p>
                    </div>
                    <div className="pagination-container">
                        {pageNumber.map((number) => (
                            <span key={number} className='pagination'>
                                <span style={currentPage === number ? { border: '2px solid yellow' } : {}} onClick={() => changeNumber(number)}>{number}</span>
                            </span>
                        ))}
                    </div>
                    {currentPost?.map((dataPlayers) => (
                        <div key={dataPlayers.team_key}>
                            <div className="teams_container">
                                {/* <p>Number</p> */}
                            </div>
                            {dataPlayers?.players?.map((dataPlayer, index) => (
                                <div className="player-container pc" key={dataPlayer.player_id}>
                                    <div className="team_details">
                                        <img src={dataPlayers.team_badge} alt={dataPlayers.team_name} />
                                        <div className="team_profile">
                                            {/* <p>Team Name: { dataPlayers.team_name} </p> */}
                                            <p>Team Country: {dataPlayers.team_country}</p>
                                            <p>Year Founded: {dataPlayers.team_founded}</p>
                                            <p>Stadium: {dataPlayers.venue.venue_name}</p>
                                            <p>Stadium Address: {dataPlayers.venue.venue_address}</p>
                                            <p>Stadium Capacity: {dataPlayers.venue.venue_capacity}</p>
                                            <p>Stadium Surface: {dataPlayers.venue.venue_surface}</p>
                                            <p>Team Coach: {dataPlayers.coaches[0].coach_name}</p>
                                        </div>
                                    </div>
                                    <div className='name-image club_team_player_image'>
                                        <img src={dataPlayer.player_image} alt={dataPlayer.player_name} />
                                        <h3>Name: {dataPlayer.player_name}</h3>
                                        <p>Age: {dataPlayer.player_age}</p>
                                        <p>Team Name: {dataPlayers.team_name} </p>
                                    </div>

                                    <div className='player_stats_details'>
                                        {/* <p>Team Name: {dataPlayer.team_name}</p> */}
                                        <p className='player-name'>Player Name: {dataPlayer.player_complete_name}</p>
                                        <p>Date of birth: {dataPlayer.player_birthdate}</p>
                                        <p>Player Number: {dataPlayer.player_number}</p>
                                        <p>Matches Played: {dataPlayer.player_match_played}</p>
                                        <p>Times Captained: {dataPlayer.player_is_captain} times</p>
                                        <p>Position: {dataPlayer.player_type}</p>
                                        <p>Goals Scored: {dataPlayer.player_goals}</p>
                                        <p>Assists: {dataPlayer.player_assists === '' ? 0 : dataPlayer.player_assists}</p>
                                        <p>Times Substituted Out: {dataPlayer.player_substitute_out} </p>
                                        <p>Times Substitutes on bench: {dataPlayer.player_substitutes_on_bench} </p>
                                        <p>Yellow Cards: {dataPlayer.player_yellow_cards} </p>
                                        <p>Red Cards: {dataPlayer.player_red_cards} </p>
                                        {/* <p>Minutes Played: {dataPlayer.player_minutes} minutes </p> */}
                                        <p>Injured: {dataPlayer.player_injured} </p>
                                        {dataPlayer.player_type === 'Defenders' || dataPlayer.player_type === 'Midfielders' ? <div>
                                            {dataPlayer.player_fouls_commited !== '' ? <p>Fouls made: {dataPlayer.player_fouls_committed} </p> : ''}
                                            {dataPlayer.player_tackles !== '' ? <p>Tackles:  {dataPlayer.player_tackles} </p> : ''}
                                            {dataPlayer.player_blocks !== '' ? <p>Blocks:  {dataPlayer.player_blocks} </p> : ''}
                                            {dataPlayer.player_crosses_total !== '' ? <p>Total Cross:  {dataPlayer.player_crosses_total} </p> : ''}
                                            {dataPlayer.player_interceptions !== '' ? <p>Interceptions:  {dataPlayer.player_interceptions} </p> : ''}
                                            {dataPlayer.player_clearances !== '' ? <p>Clearances:  {dataPlayer.player_clearances} </p> : ''}
                                            {dataPlayer.player_dispossesed !== '' ? <p>Times Dispossed:  {dataPlayer.player_dispossesed} </p> : ''}
                                            {dataPlayer.player_duels_total !== '' ? <p>Total Duels:  {dataPlayer.player_duels_total} </p> : ''}
                                            {dataPlayer.player_duels_won !== '' ? <p>Duels Won:  {dataPlayer.player_duels_won} </p> : ''}
                                        </div> : ''}
                                        {dataPlayer.player_dribble_attempts !== '' ? <p>Dribble Attempts:  {dataPlayer.player_dribble_attempts} </p> : ''}
                                        {dataPlayer.player_dribble_succ !== '' ? <p>Dribble Success:  {dataPlayer.player_dribble_succ} </p> : ''}
                                        {dataPlayer.player_pen_won !== '' ? <p>Penalty Won:  {dataPlayer.player_pen_won} </p> : ''}
                                        {dataPlayer.player_pen_comm !== '' ? <p>Penalty Commited:  {dataPlayer.player_pen_comm} </p> : ''}
                                        {dataPlayer.player_pen_scored !== '' ? <p>Penalty scored:  {dataPlayer.player_pen_scored} </p> : ''}
                                        {dataPlayer.player_pen_missed !== '' ? <p>Penalty missed:  {dataPlayer.player_pen_missed} </p> : ''}
                                        {dataPlayer.player_passes !== '' ? <p>Passes Made:  {dataPlayer.player_passes} </p> : ''}
                                        {dataPlayer.player_passes_accuracy !== '' ? <p>Pass Accuracy :  {dataPlayer.player_passes_accuracy} </p> : ''}
                                        {dataPlayer.player_rating !== '' ? <p>Player Rating:  {dataPlayer.player_rating}/10 </p> : ''}
                                    </div>
                                </div>
                            ))}

                            <div className="pagination-container">
                                {pageNumber.map((number, index) => (
                                    <span key={index} className='pagination'>
                                        <span className='page' onClick={() => changeNumber(number)}>{number}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )



                    )}
                </div>
            )}
        </div>
    )
}

export default Teams;
