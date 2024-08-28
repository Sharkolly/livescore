import {useState, useEffect} from 'react'
import './Bundesliga.css'
import data from './scores.json';
import gen from '../Json/Table/Gen.json';

const Bundesliga = () => {
  const filt = data.map((data) => data.goals.map((data) => (
    <div>
      <h3 style={{ marginTop: 0 }}>{data.goalGetterName}</h3>
      <p style={{ marginTop: 0 }}>{data.matchMinute}</p>
    </div>
  )));
  const clubScores = data.map((dat, index) =>
  (
    <div className='german' key={dat.matchID}>
      <h3 style={{ marginBottom: 0, marginTop: '.6em' }}>{`${new Date(dat.matchDateTime).toDateString()} ${new Date(dat.matchDateTime).toLocaleTimeString()}`}</h3>
      <div className="german-container">
        <h2 className='team1'><img src={`${dat.team1.teamIconUrl}`} alt="" /> {dat.team1.teamName}  </h2>
        <span className="q">
          <span> {dat.matchResults[1].pointsTeam1} </span>
          -
          <span> {dat.matchResults[1].pointsTeam2} </span>
          {/* ( FT ) */}
        </span>
        <h2 className='team2' ><img src={`${dat.team2.teamIconUrl}`} alt="" />  {dat.team2.teamName} </h2>
      </div>

      <div className="goal-scorers">

        {data[index].goals.map((data) => (
          <div>
            <p> {data.goalGetterName} <span>'{data.matchMinute}'</span></p>
          </div>
        ))}
      </div>
      {/* <div className="goal-scores">
      Goal Scorers:
      <span> {data[index].goals.goalGetterName} {data[index].matchMinute}</span>

      </div> */}

    </div>
  )
    // }
  )


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = gen.data.slice(indexOfFirstPost, indexOfLastPost);


  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(gen.data.length / postPerPage); i++) {
    pageNumber.push(i);
  }


  const changeNumber = (number) => setCurrentPage(number);
  return (
    <div>
      <div className='bundesliga'>
        {/* <h1>Fußball-Bundesliga 2023/2024</h1> */}
        {/* {clubScores} */}
        Hello
        {currentPost.map((post) => (
          <div>
            {post.name}
          </div>
        ))}

        {pageNumber.map((number) => (
          <span style={{margin: '2rem'}}> 
            <span style={{ border: '2px solid white', padding: '.7em' }} onClick={() => changeNumber(number)}>{ number }</span>
          </span>
        )) }
      </div>
    </div>
  )
}

export default Bundesliga