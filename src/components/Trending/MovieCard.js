import { BiTime } from 'react-icons/bi';
import  MoviesData  from './MovieData.js';

const MovieCard = ({ movieIndex }) => {
	const { src, title, main, runtime } = MoviesData[movieIndex]
	return (
		<div className='card'>
			<img src={src} className='w-full' />
			<div className='p-4 text-white'>
				<h4>{title}</h4>
				<p>{main}</p>
			</div>
			<div className='badge'>
				<BiTime />
				<p>{runtime}</p>
			</div>
		</div>
	)
}

export default MovieCard