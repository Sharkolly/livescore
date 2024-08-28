import { useState, useEffect, Suspense } from 'react';
import './Search.css';
import { Oval } from 'react-loader-spinner';

const Search = () => {
  const [player, setPlayer] = useState('Ronaldo');
  const [dataValue, setDataValue] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchDataS = async () => {
    try {
      setLoading(true);
      const dataF = await fetch(`https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
      const res = await dataF.json()
      setDataValue(res);
      console.log(dataValue);
      setLoading(false);
    }
    catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    // fetchData();
    fetchDataS();

  }, [player]);

  const onChangee = (e) => {
    setPlayer(e.target.value);
  }
  return (
    // <div className="dashboard">
    <Suspense>
      <div className="search">
        <h1 className='SearchPlayer'>Search: </h1>
        <div className="search-input">
          {/* <label htmlFor="search">Search Your Favorite Player:</label> */}
          <input type="search" name='search' onChange={(e) => onChangee(e)} placeholder='Ronaldo' />
        </div>
      </div>
      {loading ? (
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

          {dataValue?.map((dataPlayer, index) => (
            <div className="player-container" key={index}>
              <div className='name-image'>
                <img src={dataPlayer.player_image} alt={dataPlayer.player_name} />
                <h3>Name: {dataPlayer.player_name}</h3>
                <p>Age: {dataPlayer.player_age}</p>
              </div>
              {/* <div>
          <p>Country: {dataPlayer.player_country}</p>
          <p>Matches Played: {dataPlayer.player_match_played}</p>
          <p>Position: {dataPlayer.player_type}</p>
          <p>Goals Scored: {dataPlayer.player_goals}</p>
          <p>Assists: {dataPlayer.player_assists === '' ? 0 : dataPlayer.player_assists}</p>
          <p>Times Substituted Out: {dataPlayer.player_substitute_out} </p>
          <p>Times Substitutes on bench: {dataPlayer.player_substitutes_on_bench} </p>
          <p>Yellow Cards: {dataPlayer.player_yellow_cards} </p>
          <p>Red Cards: {dataPlayer.player_red_cards} </p>
          <p>Minutes Played: {dataPlayer.player_minutes} minutes </p>
          <p>Injured: {dataPlayer.player_injured} </p>
          {dataPlayer.player_type === 'Defenders' || dataPlayer.player_type === 'Midfielders' ? <div>
            {dataPlayer.player_fouls_commited !== '' ? <p>Fouls made  {dataPlayer.player_fouls_commited} </p> : ''}

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
        </div> */}
              <div>
                <p>Team Name: {dataPlayer.team_name}</p>
                <p>Player Name: {dataPlayer.player_name}</p>
                <p>Player Number: {dataPlayer.number}</p>
                <p>Matches Played: {dataPlayer.player_match_played}</p>
                <p>Position: {dataPlayer.player_type}</p>
                <p>Goals Scored: {dataPlayer.player_goals}</p>
                <p>Assists: {dataPlayer.player_assists === '' ? 0 : dataPlayer.player_assists}</p>
                <p>Times Substituted Out: {dataPlayer.player_substitute_out} </p>
                <p>Times Substitutes on bench: {dataPlayer.player_substitutes_on_bench} </p>
                <p>Yellow Cards: {dataPlayer.player_yellow_cards} </p>
                <p>Red Cards: {dataPlayer.player_red_cards} </p>
                <p>Minutes Played: {dataPlayer.player_minutes} minutes </p>
                <p>Injured: {dataPlayer.player_injured} </p>
                {dataPlayer.player_type === 'Defenders' || dataPlayer.player_type === 'Midfielders' ? <div>
                  {dataPlayer.player_fouls_commited !== '' ? <p>Fouls made  {dataPlayer.player_fouls_commited} </p> : ''}

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
        </div>

      )}


    </Suspense>
    // </div>
  )
}

export default Search;
