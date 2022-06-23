import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Reviews from "./Reviews"

function RecordCard({ id, name, artist, release_date, image, selectedRecord, setId }) {

    const [errors, setErrors] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [visibleDetails, setVisibleDetails] = useState(false);
    const history = useHistory();
    function handleClick() {
        fetch("/user_records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            artist,
            image,
            release_date,
          }),
        }).then((r) => {
          if (r.ok) {
            history.push("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

      const handleImageClick  = () => {
        setVisibleDetails(!visibleDetails)
    }
    

  return (
    <div className="card" onClick={() => setId(id)}>
      <img  onClick={handleImageClick}className="cardPic" src={image} alt={name} />
      { visibleDetails ? <Reviews record={selectedRecord} review={reviews} /> : []}
      <h2> Name: {name}</h2>
      <h3>Artist: {artist} </h3>
      <h4>Release Date: {release_date} </h4>
      <button onClick={handleClick}> Add to Library</button>
    </div>
  );
}
export default RecordCard;
