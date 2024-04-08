const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-48 pr-4 hover:scale-125 ">
      <img className="rounded-md" alt="Movie Card" src={"https://image.tmdb.org/t/p/w500" + posterPath} />
    </div>
  );
};
export default MovieCard;
