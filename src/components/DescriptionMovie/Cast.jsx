import Accordion from 'react-bootstrap/Accordion'
import styles from './styles.module.css'
import Card  from 'react-bootstrap/Card'
import { useContext } from 'react';
import { useAccordionButton } from 'react-bootstrap';
import { AccordionContext } from 'react-bootstrap';
import downarrow from './down-arrow.png'

export default function Cast({CastArray}) {

    const TextCast = ({eventKey, callback}) => {

        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div className={styles.textcast} onClick={decoratedOnClick}>
            <h4 >
                Cast
            </h4>
            <img className={styles.downarrow} src={downarrow}/>
        </div>
    )
}

    return (
        <div className={styles.containeractors}>
            <Accordion flush>
                <Card className={styles.allcard}>
                    <Card.Header>
                        <TextCast eventKey="0" />
                    </Card.Header>          
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.castbody}>
                            <ul className={styles.actors}>                    
                                {CastArray.map((el) => {
                                    return (
                                        <li key={el.id} className={styles.listaactors}>
                                            <figure className={styles.containerlistactorsimage}>
                                                <img className={styles.listactorsimage} src={el.image}/>
                                            </figure>
                                            <p className={styles.textname}>{el.name}</p>
                                        </li>
                                    )
                                })}
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}