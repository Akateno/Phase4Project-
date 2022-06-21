

function RecordCard({ name, artist, releaseDate, image, id }) {

  return (
    <div className="card">
      <img className="cardPic" src={image} alt={name} />
      <h2> Name: {name}</h2>
      <h3>Artist: {artist} </h3>
      <h4>Release Date: {releaseDate} </h4>
    </div>
  );
}
export default RecordCard;
