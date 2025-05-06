export default function Movies({ movies }) {
    return (
        <div className="movie-boxes">
            {movies.map((movie, index) => {
                return (
                    <div key={index} className="movie-box">
                        <div>
                            <a href={movie.imdbLink} target="_blank">
                                <p className="movie-title">{movie.name}</p>
                            </a>
                        </div>
                        <div className="movie-info">
                            <p>{movie.date}</p>
                            <div className="rating">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="yellow"
                                    role="presentation"
                                >
                                    <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                                {movie.rating}
                            </div>
                        </div>

                        <div className="img-wraper">
                            <a href={movie.imdbLink} target="_blank">
                                <img src={movie.imgUrl} alt={'poster'} />
                            </a>
                        </div>
                        <div className="genre-all">
                            {movie.genre.map((genre, i) => {
                                return (
                                    <span key={i} className="genre">
                                        {genre}
                                    </span>
                                )
                            })}
                        </div>
                        <p className="movie-plot">{movie.plot}</p>
                        <div className="director">
                            <span>Director</span>
                            <span>{movie.director}</span>
                        </div>
                        <div className="cast">
                            <span>Cast</span>
                            <div className="stars">
                                {movie.cast.map((star, ind) => {
                                    return (
                                        <span className="star" key={ind}>
                                            {star}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
