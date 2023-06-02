import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './Pages/index_mainpage';
import Signup from './Pages/signup';
import Inventory from './Pages/inventory';
import Mission from './Pages/mission';
import Game from './Pages/game';
import Info from './Pages/info';
import Entergame from './Pages/entergame';
import Shop from './Pages/shop';
import Gamepage from './Pages/gamepage';
import Edit from './Pages/edit';
import Login from './Pages/login';
import Gamebegin from './Pages/gamebegin';
import Setting from './Pages/setting';
import './App.css';
import Change from './Pages/change';
import Welcome from './Pages/welcome';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/mainpage' element={<Mainpage/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='/mission' element={<Mission/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
          <Route path='/info' element={<Info/>}></Route>
          <Route path='/entergame' element={<Entergame/>}></Route>
          <Route path='/gamepage' element={<Gamepage/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/gamebegin' element={<Gamebegin/>}></Route>
          <Route path='/setting' element={<Setting/>}></Route>
          <Route path='/change' element={<Change/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
