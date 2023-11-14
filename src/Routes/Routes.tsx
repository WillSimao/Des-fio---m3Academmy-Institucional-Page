import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )   
}

export default RoutesComponent;


