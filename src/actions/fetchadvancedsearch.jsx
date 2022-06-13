
export default async function FetchAdvancedSearch(state) {       

    const API_KEY = import.meta.env.VITE_API_KEY

    let title_type= `title_type=`
    let genres = 'genres='
    let separator = '&'

    Object.getOwnPropertyNames(state.type).map((el, idx)=>{                   
        if (state.type[el]['checked']){
            title_type += `${state.type[el]['name']},`
        }
        
    })
    Object.getOwnPropertyNames(state.genres).map((el, idx)=>{                   
        if (state.genres[el]['checked']){
            genres += `${state.genres[el]['name']},`
        }        
    })

    title_type == `title_type=` ? title_type = '' : title_type = title_type.slice(0, -1);
    genres == `genres=` ? genres = '' : genres = genres.slice(0, -1);
    if(title_type == '' || genres == '') separator = '';

    
    
    const query_string = `${title_type}${separator}${genres}`
    let URL = ''
    

    query_string == '' ? URL = `https://imdb-api.com/API/AdvancedSearch/${API_KEY}?title_type=feature` : URL = `https://imdb-api.com/en/API/AdvancedSearch/${API_KEY}?${query_string}`
    
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
            console.log(err)                       
            error = true;            
        });    
    return {data: data, error:error}

    
    
}