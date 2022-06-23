
import React from "react";


function Reviews({ record }) {
    

  const userItems = record.reviews.map((rc)=>(
    
    <div key={rc.id}>
       <h2> date: {rc.date}</h2>
       <h3>comment: {rc.comment}</h3>
       <h2>score: {rc.score}</h2>
    </div>
  ))


  return (
    // <div className="reviewcard">
    //   <h2> date: {date}</h2>
    //   <h3>comment: {comment} </h3>
    // </div>
    <div>
      
        <div>
            <div className="reviewCard">
            {record ? (
             <div>
            {userItems}
             </div>
                 ) : (
                <p>
             No Reviews Found
             </p>
                )}
            </div>
        </div>
    </div>
  );
}
export default Reviews;