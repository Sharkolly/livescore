import React, { useState, useEffect, useContext } from 'react'
import EplTable from '../Json/table.json';
import './leagueTable.css';
import useFetch from '../useCustomHooks/useFetch';
import { Oval } from 'react-loader-spinner';
import { Store } from '../Store/Store';


const LeagueTable = () => {

  const [epl, setEpl] = useState({});
  const [ligue1, setLigue1] = useState({});
  const [seriaA, setSeriaA] = useState({});
  const [spain, setSpain] = useState({});
  const [bundesliga, setBundesliga] = useState({});

  const [lTable, setLTable] = useState('eng.1');
  const [lTableVal, setLTableVal] = useState({});


  const { countries } = useContext(Store);

  const [loading, setLoading] = useState(false);

  const fetchDataS = async () => {
    try {
      setLoading(true);
      const dataF = await fetch(`https://api-football-standings.azharimm.dev/leagues/${lTable}/standings?season=2023&sort=asc`);
      const res = await dataF.json()
      setLTableVal(res);
      setLoading(false);
    }
    catch (err) {
      console.log(err.message);
    }
  }
  console.log(lTable);
  useEffect(() => {
    // fetchData();
    fetchDataS();
  }, [lTable]);

  const year = new Date().getFullYear();
  return (
    <div>

      <div className="name_filter">
        <h1>{lTableVal?.data?.name || 'English Premier League'}</h1>


        <div className="season_filter">
          <select name="league table" onChange={(e) => {
            setLTable(e.target.value);
          }} id="">

            <option value="eng.1">English Premier League</option>
            <option value="esp.1">La Liga</option>
            <option value="ita.1">Seria A</option>
            <option value="fra.1">Ligue 1</option>
            <option value="ger.1">Bundesliga</option>
          </select>

          <p>{`${year - 1}/${year}`} Season</p>

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
        <div className="">
          <div className='heading'>
            <div className="rank">
              <p> Rank </p>
              <p>Team</p>
            </div>
            <div>
              <div className='table-stats' >
                <p> GP</p>
                <p> L</p>
                <p> GD</p>
                <p> P</p>
                {/* <p> G.C</p> */}
                {/* <p> G.S</p> */}
                <p> D</p>
                <p> W</p>
                {/* <p> Overall</p> */}
                <p></p>
              </div>
            </div>
          </div>
          {lTableVal?.data?.standings?.map((standings, index) => (
            <div className='standing' key={standings.team.id}>
              <div className="rank-teamname">
                <p className={`${standings?.note?.description === 'Champions League' ? 'ChampionsLeague' : ''} ${standings?.note?.description === 'Europa League' ? 'Europa' : ''} ${standings?.note?.description === 'Champions League qualiying' ? 'CLQ' : ''}${standings?.note?.description === 'Europa Conference League qualiying' ? 'ECLQ' : ''} ${standings?.note?.description === 'Relegation' ? 'relegation' : ''} ${standings?.note?.description === 'Relegation playoff' ? 'relegation_playoff' : ''} ${standings?.note?.description === 'Relegated' ? 'relegation' : ''} `}> {parseInt(index) + 1} </p>
                <div className='name_logo'>{standings.team.logos.map((logo) => (
                  <img src={logo.href} alt="" />
                ))}
                  <h3>{standings.team.displayName}</h3>
                </div>
              </div>
              <div className='standing-value-container'>
                {standings.stats.filter((stands) => stands.displayName !== 'Point Deductions' && stands.displayName !== 'Rank' && stands.displayName !== 'Rank Change' && stands.displayName !== 'Points Per Game' && stands.displayName !== 'Goals Against' && stands.displayName !== 'Goals For' && stands.displayName !== 'Overall').map((stand) => (
                  <div className='standing-value' key={stand.id}>
                    {/* <p>{ stand.displayName } </p> */}
                    <p>{stand.displayValue} </p>
                  </div>
                ))}
              </div>

            </div>
          ))}

          <div className="cc_container">
            <div className="color_container">
              <div className="color_details">
                <div className="lightgreen"></div>
                <p>Champions League</p>
              </div>
              <div className="color_details">
                <div className="blue"></div>
                <p>Europa League</p>
              </div>
              <div className="color_details">
                <div className="defaultYellow"></div>
                <p>Champions League Qualifying</p>
              </div>
              <div className="color_details">
                <div className="orangered"></div>
                <p>Europa Conference League Qualifying</p>
              </div>
              <div className="color_details">
                <div className="pink"></div>
                <p>Relegation Playoffs</p>
              </div>
              <div className="color_details">
                <div className="red"></div>
                <p>Relegation</p>
              </div>
            </div>
          </div>
        </div>
        // <div></div>
      )}

    </div>
  )
}

export default LeagueTable;
// const fetchData = async () => {
//     try {
//         const URLs = ['https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2023&sort=asc',
//             'https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=302&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d', 'https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=207&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d', 'https://api-football-standings.azharimm.dev/leagues/fra.1/standings?season=2023&sort=asc' ,'https://api-football-standings.azharimm.dev/leagues/ger.1/standings?season=2023&sort=asc'];

//         const [response1, response2, response3, response4, response5] = await Promise.all(URLs.map(url => fetch(url)));

//         const data1 = await response1.json();
//         const data2 = await response2.json();
//         const data3 = await response3.json();
//         const data4 = await response4.json();
//         const data5 = await response5.json();

//         setEpl(data1);
//         setSpain(data2);
//         setSeriaA(data3);
//         setLigue1(data4);
//         setBundesliga(data5);

//       console.log(data1);
//     }
//     catch (err) {
//         console.log(err);
//     };
// };

// <select name="league table" onChange={(e) => {
//   setScorersCountryID(e.target.value);
// }} id="">
//   {/* <option value="152">English Premier League</option>
//                   <option value="302">La Liga</option>
//                   <option value="207">Seria A</option>
//                   <option value="168">Ligue 1</option>

//                   */}

//   {countries?.map((country) => (
//     <option key={country?.country_id} value={country?.country_id}>{country?.country_name}</option>
//   ))}
// </select>
// <select name="league table" onChange={(e) => {
//   setScorersLeagueID(e.target.value);
// }} id="">
//   <option></option>
//   {scorersLeagueDataID?.map((league) => (

//     <option key={league?.league_id} value={league?.league_id}>{league?.league_name}</option>

//   ))}
// </select>