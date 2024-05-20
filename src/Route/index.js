import  React from 'react';
import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';

import DetailsContainer from '../Container/Details';
import MoviesContainer from '../Container/Movies';

import SearchContainer from '../Container/Search';
import AboutContainer from '../Container/About';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                       
                        <Route path="/search" element={<SearchContainer />} />
                        
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
               
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;
