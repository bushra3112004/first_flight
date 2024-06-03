import ReactDOM from 'react-dom/client';
import "../src/MovieCard.css"
import Movie1Img from '../src/movie1.jpg';
import Movie2Img from '../src/movie2.jpeg';
import Movie3Img from '../src/movie3.jpg';
import Movie5Img from '../src/movie5.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));

function MovieCard({ name, view, url }) {

    return (<div className="movie-card">
        
        <img src={url} alt={`${name} from ${view}`} className="img"/>
        <h3 className="heading">Film: {name}</h3>
        <p className="subheading">View: {view}</p>
    </div>


    )

}
root.render(
    <>
        <MovieCard name="3 idiots" view="3.4K" url={Movie1Img} />
        <MovieCard name="12th fail" view="1.9M" url={Movie2Img} />
        <MovieCard name="PK" view="12.3K" url={Movie3Img} />
        <MovieCard name="Dear Zindagi" view="99.0K" url={Movie5Img} />
    </>
)