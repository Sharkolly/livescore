import { useEffect, useState } from 'react'
import Betting from './betting.json'
import './Bet.css'
import Home from '../Search/Search';

export default function Bet() {

    const [value, setValue] = useState(1);
    const [col, setCol] = useState(false);
    const [betting, setBetting] = useState([]);
    const [editBet, setEditBet] = useState([]);
    const [clickedBtn, setClickedBtn] = useState([]);
    const [clickedAlready, setClickedAlready] = useState(false);

    // const [displayBet, setDisplayBet] = useState({name: '', key: '', odds: '', point: '', team: ''}); 

    const addOdds = (e, key, odds, name, point, team, clickedBtn) => {
        setValue((prev) => e * prev);
        setCol(!col);

        const displayBet = {
            name,
            key,
            odds,
            point,
            team,
            clickedBtn: true
        };
        // setDisplayBet({ name,
        //     key,
        //     odds,
        //     point,
        //     team
        // });
        // seteditBet();
        editBet.push(displayBet);
        // console.log(editBet);

        // console.log(displayBet);
        // console.log(editBet);

        // if(!clickedBtn.includes(displayBet?.team[0]?.name || !clickedBtn.includes(displayBet?.team[1]?.name ))){
        //     console.log('Boom!!!!!');
        //     setClickedBtn((prev) => [...prev, displayBet.team[0].name, displayBet.team[1].name])
        // }
        // else{
        //     console.log('Doommmmmmmmm!!!!');
        // }
    }
    useEffect(() => {
    }, [value]);


    const handleDeleteBtn = (key, name, odds, point, team) => {
        const filterBet = editBet.filter((bet) => bet.odds !== odds);
        const filterBetDisplay = editBet.filter((bet) => bet.odds === odds);
        setEditBet(filterBet);
        setValue(prev => prev / Math.pow(filterBetDisplay[0]?.odds, filterBetDisplay.length));
    }

    useEffect(() => {
        const dataFetch = async () => {
            const datal = await fetch('http://localhost:5000/api');
            const res = await datal.json();
            setBetting(res);
            // console.log(betting);
        }
        // dataFetch();
    }, []);

    const reset = () => {
        setValue(1);

    }

    return (
        <div>
            <div className="gen">
                {Betting?.map(({ markets }) => {
                    const teamName = markets.filter(({ key }) => key === 'h2h').map((data) => data.outcomes);
                    // const teamName2 = [teamName[0].outcomes[0], teamName[0].outcomes[1]];
                    return (
                        markets.map((data) => (
                            <div >
                                <h3 className='key'>{data.key}</h3>
                                {data?.outcomes.map((datas) => (
                                    <div key={datas.price} className="prod">
                                        <span>{datas.name} {datas?.point}
                                            <input onClick={(e) => addOdds(e.currentTarget.value, data.key, datas.price, datas.name, datas?.point, teamName, clickedAlready
                                            )} type='button' className={col ? `bet` : ''} value={datas.price} />
                                        </span>
                                    </div>
                                )
                                )}
                            </div>
                        ))
                    )
                })}
            </div>

            {editBet?.map((data, index) => {
                const { name, key, odds, point, team } = data;
                console.log(odds);
                return (
                    <div className='dd'>
                        <span>{team[0][0].name} vs {team[0][1].name}</span>
                        {/* <span>{name}</span>  */}
                        <div className="odd">
                            <span>{key === 'h2h' ? name === team[0][0]?.name || name === team[0][1]?.name ? `${name} Win` : `${name} ${data.point === undefined ? '' : data?.point}` : name === team[0][0]?.name || name === team[0][1]?.name ? `${name} Handicap ${data?.point}` : `${name}  ${data?.point}`}</span>
                            <span>{odds}</span>

                            <button onClick={() => handleDeleteBtn(key, name, odds, point, team)}>X</button>
                        </div>
                    </div>
                )
            })}

            <div className='val'>

                <p>{value <= '1'  ? '' : value.toLocaleString()}<span onClick={reset}>{value > 1 && ' X'}</span>  </p>
            </div>

        </div>
    )
}



{/* <div className="prod">
                {/* <button onClick={(e) => addOdds(e.target.value)} value='1.05'></button> */}
{/* <input type='button' className={col ? `bet` : ''} onClick={(e) => addOdds(e.currentTarget.value)} value='1.05' /> */ }
{/* <input type='button' onClick={(e) => addOdds(e)} value='4.76' /> */ }
{/* <input onClick={(e) => addOdds(e.currentTarget.value)} type='button' value='8.92' /> */ }
{/* </div> */ }
{/* <div className="prod">
                <input type='button' className={col ? `bet` : ''} onClick={(e) => addOdds(e.currentTarget.value)} value='1.68' />
                <input type='button' className={col ? `bet` : ''} onClick={(e) => addOdds(e.currentTarget.value)} value='3.24' />
                <input type='button' className={col ? `bet` : ''} onClick={(e) => addOdds(e.currentTarget.value)} value='5.79' />
            </div> */}