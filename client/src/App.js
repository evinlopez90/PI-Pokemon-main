
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Home/Home';
import Inicio from "./Componentes/Inicio/Inicio"
import Crear from "./Componentes/CrearPokemon/Crear"
import About from "./Componentes/About/About"
import Detail from './Componentes/detail/Detail';
import Page404 from './Componentes/Error404/Page404';
function App() {
  return (
    <div className='App'>
     <Routes>
     <Route exact path='/' element={<Inicio/>}/>
     <Route exact path='/Home' element={<Home/>}/>
     <Route exact path='/Crear' element={<Crear/>}/>
     <Route exact path='/About' element={<About/>}/>
     <Route exact path='detail/:id' element={<Detail/>} />
     <Route path='*' element={<Page404/>} />
     </Routes>
    </div>
  );
}

export default App;
