import styles from './styles.module.css'
import Cast from './Cast'
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import FetchDescriptionMovie from '../../actions/fetchdescriptiondata'

export default function DescriptionMovie(title) {
    

    const datos = {
        "id": "tt0107290",
        "title": "Jurassic Park",
        "originalTitle": "",
        "fullTitle": "Jurassic Park (1993)",
        "type": "Movie",
        "year": "1993",
        "image": "https://imdb-api.com/images/original/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_Ratio0.6751_AL_.jpg",
        "releaseDate": "1993-06-11",
        "runtimeMins": "127",
        "runtimeStr": "2h 7min",
        "plot": "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island.",
        "plotLocal": "",
        "plotLocalIsRtl": false,
        "awards": "Top rated movie #151 | Won 3 Oscars, 44 wins & 27 nominations total",
        "directors": "Steven Spielberg",
        "directorList": [
            {
                "id": "nm0000229",
                "name": "Steven Spielberg"
            }
        ],
        "writers": "Michael Crichton, David Koepp",
        "writerList": [
            {
                "id": "nm0000341",
                "name": "Michael Crichton"
            },
            {
                "id": "nm0462895",
                "name": "David Koepp"
            }
        ],
        "stars": "Sam Neill, Laura Dern, Jeff Goldblum",
        "starList": [
            {
                "id": "nm0000554",
                "name": "Sam Neill"
            },
            {
                "id": "nm0000368",
                "name": "Laura Dern"
            },
            {
                "id": "nm0000156",
                "name": "Jeff Goldblum"
            }
        ],
        "actorList": [
            {
                "id": "nm0000554",
                "image": "https://imdb-api.com/images/original/MV5BMjUyMTU0MzA0MF5BMl5BanBnXkFtZTgwNTA4MTQ4NjM@._V1_Ratio1.0000_AL_.jpg",
                "name": "Sam Neill",
                "asCharacter": "Grantas Grant"
            },
            {
                "id": "nm0000368",
                "image": "https://imdb-api.com/images/original/MV5BMjI3NzY0MDQxMF5BMl5BanBnXkFtZTcwNzMwMzcyNw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Laura Dern",
                "asCharacter": "Ellieas Ellie"
            },
            {
                "id": "nm0000156",
                "image": "https://imdb-api.com/images/original/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_Ratio1.0000_AL_.jpg",
                "name": "Jeff Goldblum",
                "asCharacter": "Malcolmas Malcolm"
            },
            {
                "id": "nm0000277",
                "image": "https://imdb-api.com/images/original/MV5BMTkwMDQzMTAwN15BMl5BanBnXkFtZTcwNTI4NTgwMw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Richard Attenborough",
                "asCharacter": "Hammondas Hammond"
            },
            {
                "id": "nm0669629",
                "image": "https://imdb-api.com/images/original/MV5BMTM1NzM1NDI0MV5BMl5BanBnXkFtZTcwNzk2NTgwMw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Bob Peck",
                "asCharacter": "Muldoonas Muldoon"
            },
            {
                "id": "nm0274684",
                "image": "https://imdb-api.com/images/original/MV5BMTUyNTE3MDY3OV5BMl5BanBnXkFtZTcwNjI2NTgwMw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Martin Ferrero",
                "asCharacter": "Gennaroas Gennaro"
            },
            {
                "id": "nm0000703",
                "image": "https://imdb-api.com/images/original/MV5BMTYxNTEyMjEyOF5BMl5BanBnXkFtZTcwNjAwNTMwNA@@._V1_Ratio1.0000_AL_.jpg",
                "name": "BD Wong",
                "asCharacter": "Wuas Wu"
            },
            {
                "id": "nm0001515",
                "image": "https://imdb-api.com/images/original/MV5BNTcwNzA3MzMwOF5BMl5BanBnXkFtZTcwOTkzNjI5OA@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Joseph Mazzello",
                "asCharacter": "Timas Tim"
            },
            {
                "id": "nm0000611",
                "image": "https://imdb-api.com/images/original/MV5BMTI4MDQ0ODI1N15BMl5BanBnXkFtZTcwMTk2NTgwMw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Ariana Richards",
                "asCharacter": "Lexas Lex"
            },
            {
                "id": "nm0000168",
                "image": "https://imdb-api.com/images/original/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_Ratio1.0000_AL_.jpg",
                "name": "Samuel L. Jackson",
                "asCharacter": "Arnoldas Arnold"
            },
            {
                "id": "nm0001431",
                "image": "https://imdb-api.com/images/original/MV5BZjM1N2MwY2ItMzRmMi00Nzc4LWEzOGEtZTdlZWI4OGQxYjdiXkEyXkFqcGdeQXVyNTUwNzA4Mw@@._V1_Ratio1.3286_AL_.jpg",
                "name": "Wayne Knight",
                "asCharacter": "Nedryas Nedry"
            },
            {
                "id": "nm0596520",
                "image": "https://imdb-api.com/images/original/MV5BMTExMTQ5NTI0MTFeQTJeQWpwZ15BbWU3MDU5NTQ2MTg@._V1_Ratio1.0000_AL_.jpg",
                "name": "Gerald R. Molen",
                "asCharacter": "Hardingas Harding"
            },
            {
                "id": "nm0762153",
                "image": "https://imdb-api.com/images/original/MV5BNDY4OWJjYjUtMDc2Yy00ZDhmLThiM2UtYjdhMWUxN2E3ZGZiL2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_Ratio1.3429_AL_.jpg",
                "name": "Miguel Sandoval",
                "asCharacter": "Rostagnoas Rostagno"
            },
            {
                "id": "nm0861151",
                "image": "https://imdb-api.com/images/original/MV5BYjcxMmI3NjAtMjllYS00NWM4LWEyOTgtNmZhMzgwYTU5MjUwXkEyXkFqcGdeQXVyMTA2NjY2NzQ0._V1_Ratio1.0000_AL_.jpg",
                "name": "Cameron Thor",
                "asCharacter": "Dodgsonas Dodgson"
            },
            {
                "id": "nm0276211",
                "image": "https://imdb-api.com/images/original/nopicture.jpg",
                "name": "Christopher John Fields",
                "asCharacter": "Volunteer #1as Volunteer #1"
            },
            {
                "id": "nm0381035",
                "image": "https://imdb-api.com/images/original/MV5BMTU4ODg5Njc4Ml5BMl5BanBnXkFtZTcwNjI4MDgyMQ@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Whit Hertford",
                "asCharacter": "Volunteer Boyas Volunteer Boy"
            },
            {
                "id": "nm0005678",
                "image": "https://imdb-api.com/images/original/MV5BMjE3MjQwMzU5Nl5BMl5BanBnXkFtZTcwNTQxNzg5Nw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Dean Cundey",
                "asCharacter": "Mateas Mate"
            },
            {
                "id": "nm0113909",
                "image": "https://imdb-api.com/images/original/MV5BMjEyMjk4NTc2M15BMl5BanBnXkFtZTYwNDk1Mjcy._V1_Ratio1.0000_AL_.jpg",
                "name": "Jophery C. Brown",
                "asCharacter": "Worker in Raptor Penas Worker in Raptor Pen"
            }
        ],
        "fullCast": null,
        "genres": "Action, Adventure, Sci-Fi",
        "genreList": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "companies": "Universal Pictures, Amblin Entertainment",
        "companyList": [
            {
                "id": "co0005073",
                "name": "Universal Pictures"
            },
            {
                "id": "co0009119",
                "name": "Amblin Entertainment"
            }
        ],
        "countries": "USA",
        "countryList": [
            {
                "key": "USA",
                "value": "USA"
            }
        ],
        "languages": "English, Spanish",
        "languageList": [
            {
                "key": "English",
                "value": "English"
            },
            {
                "key": "Spanish",
                "value": "Spanish"
            }
        ],
        "contentRating": "PG-13",
        "imDbRating": "8.2",
        "imDbRatingVotes": "946888",
        "metacriticRating": "68",
        "ratings": null,
        "wikipedia": null,
        "posters": null,
        "images": null,
        "trailer": {
            "imDbId": "tt0107290",
            "title": "Jurassic Park",
            "fullTitle": "Jurassic Park (1993)",
            "type": "Movie",
            "year": "1993",
            "videoId": "vi177055257",
            "videoTitle": "3D Re-Release Version",
            "videoDescription": " During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok. ",
            "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjE2NzI2MTg2Ml5BMl5BanBnXkFtZTgwMzc2MzIyMzE@._V1_.jpg",
            "uploadDate": null,
            "link": "https://www.imdb.com/video/vi177055257",
            "linkEmbed": "https://www.imdb.com/video/imdb/vi177055257/imdb/embed",
            "errorMessage": ""
        },
        "boxOffice": {
            "budget": "$63,000,000 (estimated)",
            "openingWeekendUSA": "$47,026,828",
            "grossUSA": "$404,214,720",
            "cumulativeWorldwideGross": "$1,099,428,303"
        },
        "tagline": "Life finds a way.",
        "keywords": "dinosaur,scientist,bipedal dinosaur,sneeze,national film registry",
        "keywordList": [
            "dinosaur",
            "scientist",
            "bipedal dinosaur",
            "sneeze",
            "national film registry"
        ],
        "similars": [
            {
                "id": "tt0119567",
                "title": "The Lost World: Jurassic Park",
                "image": "https://imdb-api.com/images/original/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_Ratio0.6860_AL_.jpg",
                "imDbRating": "6.5"
            },
            {
                "id": "tt0163025",
                "title": "Jurassic Park III",
                "image": "https://imdb-api.com/images/original/MV5BZDMyZGJjOGItYjJkZC00MDVlLWE0Y2YtZGIwMDExYWE3MGQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "5.9"
            },
            {
                "id": "tt0097576",
                "title": "Indiana Jones and the Last Crusade",
                "image": "https://imdb-api.com/images/original/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.2"
            },
            {
                "id": "tt0082971",
                "title": "Indiana Jones and the Raiders of the Lost Ark",
                "image": "https://imdb-api.com/images/original/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.4"
            },
            {
                "id": "tt0369610",
                "title": "Jurassic World",
                "image": "https://imdb-api.com/images/original/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "6.9"
            },
            {
                "id": "tt0088763",
                "title": "Back to the Future",
                "image": "https://imdb-api.com/images/original/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.5"
            },
            {
                "id": "tt0073195",
                "title": "Jaws",
                "image": "https://imdb-api.com/images/original/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.1"
            },
            {
                "id": "tt0076759",
                "title": "Star Wars",
                "image": "https://imdb-api.com/images/original/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.6"
            },
            {
                "id": "tt0086190",
                "title": "Star Wars: Episode VI - Return of the Jedi",
                "image": "https://imdb-api.com/images/original/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.3"
            },
            {
                "id": "tt0088247",
                "title": "The Terminator",
                "image": "https://imdb-api.com/images/original/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.1"
            },
            {
                "id": "tt0095016",
                "title": "Die Hard",
                "image": "https://imdb-api.com/images/original/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.2"
            },
            {
                "id": "tt0080684",
                "title": "Star Wars: Episode V - The Empire Strikes Back",
                "image": "https://imdb-api.com/images/original/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.7"
            }
        ],
        "tvSeriesInfo": null,
        "tvEpisodeInfo": null,
        "errorMessage": null
    }

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
                <img className={styles.image} src={data.image}/>
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


