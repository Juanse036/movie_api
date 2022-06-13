import styles from './styles.module.css'
import Movie from '../Movie'
import { useLocation } from 'react-router-dom'

const ArrayMovies = {
    "items": [
        {
            "id": "tt2581458",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMTQyOTU1OTM1NF5BMl5BanBnXkFtZTgwMTc3MjMwMTE@._V1_Ratio0.7273_AL_.jpg",
            "title": "Looking",
            "description": "(2014) (TV Series)"
        },
        {
            "id": "tt4552118",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BNmEwZmM2MTgtYmIxMy00MWZkLTk1NWItYzc5OTI0MTA2MzUyXkEyXkFqcGdeQXVyMTUxMzY0Mzk@._V1_Ratio0.7273_AL_.jpg",
            "title": "Looking",
            "description": "(2016) (TV Movie)"
        },
        {
            "id": "tt5654260",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMDFlOGU2OGUtODQ1Zi00YTM3LWJlMmItMGJhMDFjYmVkMjA0XkEyXkFqcGdeQXVyNjYxMTg2MDc@._V1_Ratio1.8182_AL_.jpg",
            "title": "Looking",
            "description": "(2007) (Short)"
        },
        {
            "id": "tt0124298",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BZGFiZjRhMTYtZmMzYS00MGEyLWEzN2EtNWMzMjA3OGI0NGZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg",
            "title": "Blast from the Past",
            "description": "(1999) aka \"Looking for Eve\""
        },
        {
            "id": "tt3829868",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BZjNjYzk0YjQtOWU2NS00ZjM2LWIwYmUtNmJlYTg2ZjM3ODFhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg",
            "title": "Looking for Alaska",
            "description": "(2019) (TV Mini Series)"
        },
        {
            "id": "tt0076327",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BYzdjNDhkOWMtMTllMS00OTJlLWIxZTAtMTQ0MGZjNzc0OWJlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
            "title": "Looking for Mr. Goodbar",
            "description": "(1977)"
        },
        {
            "id": "tt6083648",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMTYxMzg1OTI3Nl5BMl5BanBnXkFtZTgwOTQ4Njk2NDM@._V1_Ratio0.7273_AL_.jpg",
            "title": "Looking Glass",
            "description": "(I) (2018)"
        },
        {
            "id": "tt0259403",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMjAxNzQxNTAzNV5BMl5BanBnXkFtZTcwMzQ2MzMyMQ@@._V1_Ratio0.7273_AL_.jpg",
            "title": "The lost child",
            "description": "(2000) (TV Movie) aka \"Looking for Lost Birds\""
        },
        {
            "id": "tt11286314",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7727_AL_.jpg",
            "title": "Don't Look Up",
            "description": "(2021)"
        },
        {
            "id": "tt9244554",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BOTRjMjAzOGMtM2JmNi00YjkxLTk0ZGQtZDE5YjlmNWZhZjNiXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_Ratio0.7273_AL_.jpg",
            "title": "Last Looks",
            "description": "(I) (2021)"
        }
    ]
}

export default function InitialPage() { 
   
    return (
        <ul className={styles.feedmovies}>
            {ArrayMovies.items.map((el, idx) => {                
                return(
                    <li key={idx} className={styles.movie}>
                        <a key={idx} href={`/Description/${el.id}`} className={styles.linkdescription}>
                        <Movie key={idx} data={el} />
                        </a>
                    </li>
                ) 
            })}
        </ul>
        
    )

}