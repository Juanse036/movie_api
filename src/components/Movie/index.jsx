import styles from './styles.module.css'
import { PropTypes } from "prop-types";

export default function Movie({data}) {    
    const {image, title} = data    
    
    return (
        <>
            <div className={styles.imagebox}>
                <img className={styles.image} src={image} alt={title}/>            
            </div>
            <div className='movide-data'>
                <h4 className={styles.title}>{title}</h4>
            </div>
        </>
    )

}

Movie.propTypes = {
    data: PropTypes.object.isRequired
};