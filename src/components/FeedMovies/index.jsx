import styles from './styles.module.css'
import Movie from '../Movie'
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import FetchAllMovies from '../../actions/fetchdata'


export default function AllMovies({location, search = ''}) {        
   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const getData = async () => {
            const {data, error} = await FetchAllMovies(location , search)
            setLoading(false);         
            setData(data);
            setError(error)
        }
        getData()                       
    }, [])

    if (loading) {
        return  <div className={styles.spinner}><Spinner animation="border" variant="light" className={styles.spinner}/></div>
    }
    if (error) {
        return  <h3>Something went wrong</h3>
    }

    if (search !== ''){        
        return (
            <ul className={styles.feedmovies}>
                {data.results.map((el) => {
                    return(
                        <li key={el.id} className={styles.movie}>
                            <a href={`/Description/${el.id}`} className={styles.linkdescription}>
                            <Movie  data={el} />
                        </a>
                    </li>
                    ) 
                })}
            </ul>
            
        )
    }

    return (
        <ul className={styles.feedmovies}>
            {data.items.map((el) => {
                return(
                    <li key={el.id} className={styles.movie}>
                        <a href={`/Description/${el.id}`} className={styles.linkdescription}>
                        <Movie  data={el} />
                    </a>
                </li>
                ) 
            })}
        </ul>
        
    )

}