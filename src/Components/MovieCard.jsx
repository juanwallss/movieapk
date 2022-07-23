import styles from './MovieCard.module.css'
import placeHolder from '../no-image.jpg'
import { Link } from 'react-router-dom'
export function MovieCard({ movie }) {
	const imageUrl = movie.poster_path
		? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
		: placeHolder

	return (
		<li className={styles.movieCard}>
			<Link to={'/movies/' + movie.id}>
				<img
					width={230}
					height={345}
					src={imageUrl}
					className={styles.movieImage}
					alt={movie.title}
				/>
			</Link>
			{movie.title}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						backgroundColor: '#335c3e',
						width: '30%',
						borderRadius: '15px',
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						alignItems: 'center',
						justifyItems: 'center',
					}}
				>
					{movie.release_date.slice(0, 4)}
				</div>
			</div>
		</li>
	)
}
