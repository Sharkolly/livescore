import { useContext, Suspense, lazy } from "react";
import Login from "./Components/Auth/SignIn/Login";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Bundesliga from './Components/Bundesliga/Bundesliga'
import ChampionsLeague from './Components/Champions-league/Champ'
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Search from "./Components/Search/Search";
import DfbCup from './Components/Dfb-cup/Dfb'
import Epl from './Components/Epl/Epl';
import Europa from './Components/Europa/Europa';
import LeagueTable from './Components/League-Table/LeagueTable';
import Laliga from './Components/Laliga/Laliga';
import Livescores from './Components/Livescores/Livescores';
import Layout from "./Layout";
import Error from "./Error";
import PlayerStats from "./Components/PlayerStats/PlayerStats";
import Bet from './Components/Bet/Bet';
import { Store } from "./Components/Store/Store";
import SignUp from "./Components/Auth/SignUp/SignUp";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Components/Profile/Profile";
import Teams from "./Components/Teams/Teams";
import Match from "./Components/Match-Details/Match.jsx";
import Cards from "./Components/Match-Details/Cards/Cards.jsx";
import Info from "./Components/Match-Details/Info/Info.jsx";
import Summary from "./Components/Match-Details/Summary/Summary.jsx";
import LineUps from "./Components/Match-Details/LineUps/LineUps.jsx";
import Stats from "./Components/Match-Details/Stats/Stats.jsx";
// import LoaderData from "./Components/LoaderData/LoaderData.js";

// const LeagueTable = lazy(() => './Components/League-Table/LeagueTable')

function App() {
  const { isAuthenticated } = useContext(Store);

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route element={<Layout />}>
      <Route path="/" element={isAuthenticated ? <Layout /> : <SignUp />}> 
        <Route path="/" index element={<Dashboard />}/> 
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/bet" element={<Bet />} />
        <Route path="/champions_league" element={<ChampionsLeague />} />
        <Route path="/dfb_Cup" element={<DfbCup />} />
        <Route path="/epl" element={<Epl />} />
        <Route path="/europa" element={<Europa />} />
        <Route path="/laliga" element={<Laliga />} />
        <Route path="/login" element={<Login />} />
        <Route path="/club_teams" element={<Teams />} /> 
        {/* <Route path={user ? "/login" : "/"} element={<Login />} /> */}
        {/* <Route path={user ? "/signup" : "/"} element={<SignUp />} /> */}
        <Route path="/league_table" element={<LeagueTable />} />

       <Route path="/match_details/:id/"  element={<Match />}>
       
        <Route path="cards"  element={<Cards />} />  
        <Route path="info" element={<Info />} />  
        <Route path="summary" element={<Summary />} />  
        <Route path="line_ups" element={<LineUps />} />  
        <Route path="stats" element={<Stats/>} />  
       </Route>
       
        <Route path="/livescores" element={<Livescores />} />
        <Route path="/players_stats" element={<PlayerStats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Player_search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  )
  return (
<Suspense>
    <RouterProvider router={router} />
    <ToastContainer/>
</Suspense>
  )
}

export default App;
