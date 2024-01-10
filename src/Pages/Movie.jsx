import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import playIcon from '/public/play-trailer-icon.svg'
import iconLike from '/public/icon-like.svg'
import iconDisLike from '/public/icon-dislike.svg'
import heartIcon from '/public/heart.svg'

import './Movie.scss'

const Movie = () => {
    const [movieData, setMovieData] = useState([]);
    const { filmId } = useParams()


    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
                    headers: {
                        'X-API-KEY': 'b84dec2d-65e6-4747-9164-27a9ff2b1edb',
                        'Content-Type': 'application/json',
                    },
                    params: {
                        page: 1,
                        type: 'TOP_250_BEST_FILMS',
                    },
                });

                setMovieData(response.data.films);
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

    const startIndex = 1; // Индекс, с которого начинаем
    const moviesDataList = movieData.slice(startIndex);


    const findMovie = moviesDataList?.find((el) => {
        return el?.filmId == +filmId
    })

    console.log(findMovie);


    return (
        <>
            {/* <div className="kino__card">
                <div className="kino__img">
                    <img src={findMovie?.posterUrlPreview} alt="img" />
                    <p className="kino__rating">{findMovie?.rating}</p>
                </div>
                <h3 className="kino__name">{findMovie?.nameRu}</h3>
                <p className="kino__genre">{findMovie?.genres.map((genre) => genre.genre).join(', ')}</p>
            </div> */}

            <section className="movie">
                <div className="container">
                    <div className="movie__wrapper">
                        <img className="movie__poster" src={findMovie.posterUrl} alt="poster" />

                        <div className="movie__content">
                            <div className="movie__beard">
                                <Link className='movie__beard-link' to={'/'}>Главная</Link>
                                <p>{`>`}</p>
                                <Link className='movie__beard-link' to={'/movies'}>Фильмы</Link>
                                <p>{`>`}</p>
                                <p className='movie__beard-link'>{findMovie.nameRu}</p>

                            </div>
                            <h1 className="movie__title">{findMovie.nameRu}</h1>
                            <p className="movie__pretitle">{findMovie.nameEn}</p>

                            <div className="movie__rating">
                                <div className="movie__rating-box">
                                    <b>{findMovie.rating}</b>
                                    <p>Kinoarea</p>
                                </div>

                                <div className="movie__rating-box">
                                    <b>6.30</b>
                                    <p>IMDb</p>
                                </div>
                            </div>

                            <p className="movie__desc">Lorem, ipsum.</p>

                            <div className="movie__inner">
                                <button className="movie__btn">
                                    <img className="movie__btn-icon" src={playIcon} alt="" />
                                    Смотреть трейлер
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="movie__inner">
                        <button className="movie__icon">
                            <img src={iconLike} alt="icon" />
                        </button>
                        <button className="movie__icon">
                            <img src={iconDisLike} alt="icon" />
                        </button>
                        <button className="movie__icon">
                            <img src={heartIcon} alt="icon" />
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Movie


