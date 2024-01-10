import { useEffect, useState } from 'react';
import axios from 'axios';

import './Now.scss'
import { Link } from 'react-router-dom';

const Now = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                let allMovies = [];

                for (let page = 1; page <= 1; page++) {
                    const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
                        headers: {
                            'X-API-KEY': 'b84dec2d-65e6-4747-9164-27a9ff2b1edb',
                            'Content-Type': 'application/json',
                        },
                        params: {
                            page,
                            type: 'TOP_250_BEST_FILMS',
                        },
                    });

                    allMovies = [...allMovies, ...response.data.films];
                }

                setMovieData(allMovies);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovieData();
    }, []);

    if (!movieData.length) {
        return (
            <div className='loading'>
                <img src="https://i.stack.imgur.com/kOnzy.gif" alt="" />
            </div>
        );
    }

    const startIndex = 1;
    const moviesDataList = movieData.slice(startIndex, startIndex + 50);


    return (
        <section className="now">
            <div className="container">
                <div className="section__top">
                    <h2 className="section__title">Сейчас в кино</h2>
                    <div className="section__menu">
                        <p className="section__menu-link">Все</p>
                        <p className="section__menu-link">Боевики</p>
                        <p className="section__menu-link">Приключения</p>
                        <p className="section__menu-link">Комедии</p>
                        <p className="section__menu-link">Фантастика</p>
                        <p className="section__menu-link">Триллеры</p>
                        <p className="section__menu-link">Драма</p>
                    </div>
                </div>
                <div className="kino__wrapper">
                    {moviesDataList.map((movie) => (
                        <Link to={`/movie/${movie?.filmId}`} className="kino__card" key={movie.filmId}>
                            <div className="kino__img">
                                <img src={movie.posterUrlPreview} alt="img" />
                                <p className="kino__rating">{movie.rating}</p>
                            </div>
                            <h3 className="kino__name">{movie.nameRu}</h3>
                            <p className="kino__genre">{movie.genres.map((genre) => genre.genre).join(', ')}</p>
                        </Link>
                    ))}
                </div>

                <div className="kino__btn">Все новинки</div>
            </div>
        </section>
    );
};

export default Now;