import data from '../Json/europa.json'

const Europa = () => {
  const clubScores = data.map((dat, index) =>
    
  (
    <div className='german' key={dat.matchID}>
      <h3 style={{ marginBottom: 0, marginTop: '.6em' }}>{`${new Date(dat.matchDateTime).toDateString()} ${new Date(dat.matchDateTime).toLocaleTimeString()}`}</h3>
      <div className="german-container">
        <h2 className='team1'><img src={`${dat.team1.teamIconUrl}`} alt="" /> {dat.team1.teamName}  </h2>
        <span className="q">
          {/* <span> {dat.matchResults[1].pointsTeam1} </span> */}
          -
          {/* <span> {dat.matchResults[1].pointsTeam2} </span> */}
          {/* ( FT ) */}
        </span>
        <h2 className='team2' ><img src={`${dat.team2.teamIconUrl}`} alt="" />  {dat.team2.teamName} </h2>
      </div>

      <div className="goal-scorers">

        {data[index].goals.map((data) => (
          <div>
            {/* <p> {data.goalGetterName} <span>'{data.matchMinute}'</span></p> */}
          </div>
        ))}
      </div>
    </div>
  )
    // }
  )
  return (
    <div>
    
    <div className="bundesliga">{clubScores}</div>
    
    
    </div>

  )
}

export default Europa