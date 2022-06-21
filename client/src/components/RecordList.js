import React from "react";
import RecordCard from "./RecordCard";
function RecordList({ record}) {
  return (
    <div className="cards">
      {record.map((rec) => (
        <RecordCard
          id={rec.id}
          key={rec.id}
          name={rec.name}
          artist={rec.artist}
          releaseDate={rec.relase_date}
          image={rec.image}
          userID={rec.user_id}
          
        />
      ))}
    </div>
  );
}
export default RecordList;