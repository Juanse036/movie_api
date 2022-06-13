
export default async function FetchDescriptionMovie({title}) {    

    const API_KEY = import.meta.env.VITE_API_KEY
    
    
    const URL = `https://imdb-api.com/en/API/Title/${API_KEY}/${title}/Trailer,`
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