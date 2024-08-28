import { createContext, useState, useEffect } from 'react'
import App from '../../App';
import AllCountries from '../Json/JSON/allCountries.json';
import Spain from '../Json/JSON/spainCompetition.json';

export const Store = createContext();
export default function AppStore() {

    const [countries, setCountries] = useState([]);
    const [countriesCompetition, setCountriesCompetition] = useState([]);
    const mapCID = AllCountries.map((country) => [country.country_id, country.country_name]);
    const mapSpain = Spain.map((spainC) => [spainC.league_id, spainC.league_name, spainC.league_season]);

    // console.log(mapSpain);
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('User-profile')) || null);
    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(sessionStorage.getItem('Authenticated')) || false);

    const fetchDataS = async () => {
        try {
            //   setLoading(true);
            // const dataF = await fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
            // const res = await dataF.json();
            // setCountries(res);
            // console.log(countries);
            //   console.log(dataValue);
            //   setLoading(false);

            // const mapCountries = countries.map(async (country) => {
            //     const fetchDatas = await fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country.country_id}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`);
            //     const res = await dataF.json();
            //     setCountriesCompetition(res);
            // });
            // console.log(countriesCompetition);

            // countries.map(async (country) => {
            //     console.log(country);
            //     const URLs = [`https://apiv3.apifootball.com/?action=get_leagues&country_id=${countries.country_id}&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d`];
            //     // console.log(URLs);
            //     // console.log('Food');

            // });
        }
        catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        sessionStorage.setItem('User-profile', JSON.stringify(user));
        sessionStorage.setItem('Authenticated', isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        fetchDataS();

    }, [])

    return (
        <Store.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, countries }}>
            <App />
        </Store.Provider>
    )
}
