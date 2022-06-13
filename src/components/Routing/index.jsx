import { Routes, Route, Link, useLocation } from "react-router-dom";
import AllMovies from '../FeedMovies';
import InitialPage from '../InitialPage';
import FeedMoviesAdvanced from "../FeddMoviesAdvanced";
import DescriptionMovie from "../DescriptionMovie";


export default function PageRoutes(props) {    

    const location = useLocation();    
    const loc = location.pathname.split('/');
    loc.length > 2 ? loc[2].replace(/%20/g, " ") : ''        
    

    return(
        <Routes>
            <Route path="/" element={<AllMovies location='home'/>} />            
            { loc[1] === 'MoviesTop250' && <Route path={location.pathname} element={<AllMovies location='MoviesTop250'/>} /> }
            { loc[1] === 'MoviesPopular' && <Route path={location.pathname} element={<AllMovies location='MoviesPopular'/>} /> }
            { loc[1] === 'MoviesComingSoon' && <Route path={location.pathname} element={<AllMovies location='MoviesComingSoon'/>} /> }
            { loc[1] === 'SeriesTop250' && <Route path={location.pathname} element={<AllMovies location='SeriesTop250'/>} /> }
            { loc[1] === 'SeriesPopular' && <Route path={location.pathname} element={<AllMovies location='SeriesPopular'/>} /> }
            { loc[1] === 'SeriesComingSoon' && <Route path={location.pathname} element={<AllMovies location='SeriesComingSoon'/>} /> }
            { loc[1] === 'Search' && <Route path={location.pathname} element={<AllMovies location='Search' search={loc[2]}/>} /> }
            { loc[1] === 'Description' && <Route path={location.pathname} element={<DescriptionMovie title={loc[2]}/>} /> }
            { loc[1] === 'AdvancedSearch' && <Route path={location.pathname} element={<FeedMoviesAdvanced location='AdvancedSearch'/>} /> }
        </Routes>        
    )
}
