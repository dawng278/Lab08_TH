import './MovieCard.css';

function MovieCard({ title, image, description }) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__image"
        src={image}
        alt={`Hình minh họa phim ${title}`}
        loading="lazy"
      />
      <div className="movie-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
