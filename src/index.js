import ReactDOM from 'react-dom/client';
import "../src/MovieCard.css"
import Movie1Img from '../src/movie1.jpg';
import Movie2Img from '../src/movie2.jpeg';
import Movie3Img from '../src/movie3.jpg';
import Movie5Img from '../src/movie5.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));

function MovieCard({ name, city, url }) {

    return (<div className="movie-card">
        <h3 className="heading">hi, i am {name}</h3>
        <p className="subheading">i am from {city}</p>
        <img src={url} />

    </div>

    )
}
root.render(
    <>
        <MovieCard name="raj" city="delhi" url="Movie1Img" />
        <MovieCard name="priyanka" city="shimla" url="Movie2Img" />
        <MovieCard name="arman" city="pune" url="Movie3Img" />
        <movieCard name="pranika" city="ahmadnagar" url="Movie5Img" />
    </>
)