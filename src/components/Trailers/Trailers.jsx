import React from 'react'

const Trailers = () => {
    return (
        <section className="trailers">
            <div className="container">
                <div className="section__top">
                    <h2 className="section__title">Новые трейлеры</h2>
                    <div className="section__menu">
                        <a className="section__menu-all" href="">
                            Все трейлеры
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="trailers__wrapper">

                </div>
            </div>
        </section>
    )
}

export default Trailers