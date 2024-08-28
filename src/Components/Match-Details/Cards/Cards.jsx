import './Cards.css';
import Champe from '../../Dashboard/uefachamp.json';

const Cards = () => {

  return (
    <div className='match_stats_cards'>
      {Champe.map((match) => (
        <div className="cards-container" key={match.match_id}>
          {match.cards.map((card, index) => (
            <div className="cards" key={index}>
              <div className={card.card === 'yellow card' ? 'yellow' : 'red' }></div>
              <div className="cards_stats">
                <div className="cards_home">{ card.home_fault}</div>
                <div className="cards_time">'{ card.time}'</div>
                <div className="cards_away">{ card.away_fault}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Cards;
