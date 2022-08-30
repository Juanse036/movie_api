import styles from './styles.module.css'
import Cast from './Cast'
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import FetchDescriptionMovie from '../../actions/fetchdescriptiondata'

export default function DescriptionMovie(title) {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const {data, error} = await FetchDescriptionMovie(title)
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
    
    return (
        <div className={styles.allcontainer}>
            <div className= {styles.continerleft}>
                <img className={styles.image} src={data.image} alt={data.fullTitle}/>
                <section className={styles.extrainfo}>
                    <h1>{data.fullTitle}</h1>
                    <div className={styles.separador}></div>
                    <p><b>Director:</b> {data.directors}</p>   
                    <p><b>Time:</b> <smmal>{data.runtimeStr}</smmal></p>
                    <p><b>Release date:</b> <small>{data.releaseDate}</small></p>
                </section>
            </div>
            <div className= {styles.continerright}>            
                <div className={styles.videoresponsive}>
                    <iframe                        
                        className={styles.videotrailer}
                        src={`${data.trailer.linkEmbed}`}                                                
                        allowFullScreen
                        title={`Trailer ${data.title}`}                        
                    />       
                </div>    
                <div className={styles.continerdesciption}>
                    <h5>Description</h5>  
                    <p className={styles.description}>
                        {data.plot}
                    </p>
                </div>                
                <Cast CastArray={data.actorList}/>
                
            </div>
        </div>
    )


 }


