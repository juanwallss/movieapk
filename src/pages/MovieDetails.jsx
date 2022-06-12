import movie from './movie.json'
import styles from './MovieDetails.module.css'
import { useParams } from 'react-router'
import { get } from '../utils/httpClients'
import { useEffect, useState } from 'react'
import { Spinner } from '../Components/Spinner'
import placeHolder from '../no-image.jpg'
import { getMoviesImg } from '../utils/getMoviesImg'

export function MovieDetails() {
	//Ventana con los detalles de las peliculas e imagen
	const { movieId } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [movie, setMovie] = useState(null)

	useEffect(() => {
		setIsLoading(true)
		get(`/movie/${movieId}`).then((data) => {
			setIsLoading(false)
			setMovie(data)
		})
	}, [movieId])
	if (isLoading) {
		return <Spinner />
	}
	if (!movie) {
		return null
	}
	const imageUrl = getMoviesImg(movie.poster_path, 300)
	// const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : placeHolder;

	return (
		<div className={styles.detailsContainer}>
			<img
				className={`${styles.col} ${styles.movieImage}`}
				src={imageUrl}
				alt={movie.title}
			/>
			<div className={`${styles.col} ${styles.movieDetails}`}>
				<p className={styles.firstItem}>
					<strong>Title</strong>: {movie.title}
				</p>
				<p>
					<strong>Description</strong>: {movie.overview}
				</p>
				<p>
					<strong>Genres</strong>:{' '}
					{movie.genres.map((genre) => genre.name).join(', ')}
				</p>
				<p>
					<strong>Release Date: </strong>
					{movie.release_date}
				</p>
			</div>
		</div>
	)
}
