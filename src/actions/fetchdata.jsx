
export default async function FetchAllMovies(page, search) {    

    const API_KEY = import.meta.env.VITE_API_KEY

    const Top250MoviesURL = `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`
    const MoviesPopularURL = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
    const MoviesComingSoonURL = `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`
    const Top250SeriesURL = `https://imdb-api.com/en/API/Top250TVs/${API_KEY}`
    const SeriesPopularURL = `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`    
    const SearchURL = `https://imdb-api.com/en/API/Search/${API_KEY}/${search.replace(/%20/g, " ")}`
    let URL = ''

    
    switch(page) {
        case 'home':
        case 'MoviesTop250':
            URL = Top250MoviesURL;
            break;
        case 'MoviesPopular':
            URL = MoviesPopularURL;
            break;
        case 'MoviesComingSoon':
            URL = MoviesComingSoonURL;
            break;
        case 'SeriesTop250':
            URL = Top250SeriesURL;
            break;
        case 'SeriesPopular':
            URL = SeriesPopularURL;
            break;
        case 'Search':
            URL = SearchURL;
            break;
    }            

    let data = {}
    let error = ''

    await fetch(URL)
        .then( async(response) => {   
            if (response.ok) {                      
                data = await response.json()
                error = false;
                
              } else {
                throw new Error('Something went wrong');
              }             
        })    
        .catch(async(err) => {                        
            error = true;            
        });

    return {data: data, error:error}

}