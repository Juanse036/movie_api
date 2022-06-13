import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Filters() { 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [type, setType] = useState({        
            movie: {name:'feature', checked:false},
            series: {name:'tv_series', checked:false},
    });

    const [genres, setGenres] = useState({
        action:{name:'action', checked:false},
        adventure:{name:'adventure', checked:false},
        biography:{name:'biography', checked:false},
        comedy:{name:'comedy', checked:false},
        drama:{name:'drama', checked:false},
        fantasy:{name:'fantasy', checked:false},
        horror:{name:'horror', checked:false},
        romance:{name:'romance', checked:false},
        scifi:{name:'sci_fi', checked:false},
        western:{name:'western', checked:false},
    });        
        
    const handleTypeClick = (e) =>{   

        setType(prevState => ({
            ...prevState,
            [e.target.name]: {
                ...prevState[e.target.name], 
                'checked': !prevState[e.target.name]['checked']}
        }))

    }

    const handleGenresClick = (e) => {           

        setGenres(prevState => ({
            ...prevState,
            [e.target.name]: {
                ...prevState[e.target.name], 
                'checked': !prevState[e.target.name]['checked']}
        }))

    }

    const handleFilters = () => {
        console.log('type', type)
        console.log('genres', genres)
    }
    

    return (
        <>
        
        <Button variant="outline-light" onClick={handleShow} className={styles.buttonfilters}>
            Filters
        </Button>

        <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.body}>     
                <div className={styles.bodyfilters}>
                    <p>Title Type</p>
                    <div className={styles.gridcheckbox}>
                    {Object.getOwnPropertyNames(type).map((el, idx)=>{                    
                    return( 
                        <Form.Check 
                            key={idx}
                            type='checkbox'
                            id={`default-checkbox`}
                            label={el}
                            name={el}
                            defaultChecked={type[el]['checked']}
                            onChange={handleTypeClick}
                        />
                    )
                    })}  
                    </div>             
                </div>   
                <div className={styles.bodyfilters2}>
                    <p>Genres</p>
                    <div className={styles.gridcheckbox}>
                    {Object.getOwnPropertyNames(genres).map((el, idx)=>{                    
                    return( 
                        <Form.Check 
                            key={idx}
                            type='checkbox'
                            id={`default-checkbox`}
                            label={el}
                            name={el}
                            defaultChecked={genres[el]['checked']}
                            onChange={handleGenresClick}
                        />
                    )
                    })}
                    </div>
                </div>

            </Offcanvas.Body>
            <Link to={"/AdvancedSearch"}
                state={{type: type, genres:genres}}
            >
                <Button 
                    variant="secondary"  
                    className={styles.buttonsearch} 
                    onClick={handleClose}
                >
                    Search
                </Button>
            </Link>
        </Offcanvas>

        </>
    )
}