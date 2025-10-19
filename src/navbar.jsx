import Logo from './images/Umerch-Logo.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Food from './food.jsx';
import Card from './Card.jsx';

function Navbar() {
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='/food'>Home</Link></li>
                    <li><Link to='/Card'>Shop</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/food' element={<Food />} />
                <Route path='/Card' element={<Card />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Navbar