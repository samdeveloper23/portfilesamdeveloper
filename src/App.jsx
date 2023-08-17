import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Sobremi from './pages/Sobremi/Sobremi';
import Proyectos from './pages/Proyectos/Proyectos';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/sobremi' element={<Sobremi />} />
                <Route path='/proyectos' element={<Proyectos />} />
            </Routes>
        </>
    );
}

export default App;
