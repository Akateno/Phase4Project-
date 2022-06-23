// import { useEffect, useState } from "react";
// import UserList from "./UserList";

// function UserRecord({ user }) {
//   const [records, setRecords] = useState([]);
  
  
//   useEffect(() => {
//     fetch("/user_records")
//       .then((r) => r.json())
//       .then(setRecords);
//   }, []);

 
// //   function handleDeleteClick() {
   
// //     fetch(`/user_records/${id}`, {
// //       method: "DELETE",
// //     });
// //     onRecordDelete(records.id);
// //   }

// //   const id=records.id
// const displayedRecords = records.filter((rc) =>
//     rc.name.toLowerCase().includes(search.toLowerCase())
//   );

//   function handleDeleteRecord(id) {
//     const updatedRecords = records.filter((record) => record.id !== id);
//     setRecords(updatedRecords);
//   }

// //   const userItems = records.map((rc)=>(
    
// //     <div key={rc.id}>
// //        <img className="cardPic" src={rc.image} alt={rc.name} />
// //       <h2> Name: {rc.name}</h2>
// //       <h3>Artist: {rc.artist} </h3>
// //       <h4>Release Date: {rc.release_date} </h4>
// //       <button onClick={handleDeleteClick}>Remove From Library</button>
// //     </div>
// //   ))

//   return (
//     <div className="userContainer">
//     <h1> Welcome {user.username}</h1>
//     <Search searchTerm={search} onChangeSearch={setSearch} />
//     <UserList userRecords={displayedRecords} onRecordDelete={handleDeleteRecord} onUpdateDog={handleUpdateDog} />
//   </div>
//   )
// }


// export default UserRecord;
import React, { useState } from "react";

function UserRecord({user, id, name, artist, release_date, image, onRecordDelete, userID  }) {
  
  
 
  function handleDeleteClick() {
   
    fetch(`/user_records/${id}`, {
      method: "DELETE",
    });
    onRecordDelete(id);
  }

  return (
    <div key={id}>
       <img className="userRecordPic" src={image} alt={name} />
      <h2> Name: {name}</h2>
      <h3>Artist: {artist} </h3>
      <h4>Release Date: {release_date} </h4>
      <button onClick={handleDeleteClick}>Remove From Library</button>
    </div>
  )
}


export default UserRecord;