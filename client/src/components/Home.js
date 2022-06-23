// import React, { useState } from "react";

// function Home({id, name, artist, release_date, image, onRecordDelete, userID  }) {
  
  
 
//   function handleDeleteClick() {
   
//     fetch(`/user_records/${id}`, {
//       method: "DELETE",
//     });
//     onRecordDelete(records.id);
//   }

//   return (
//     <div key={id}>
//        <img className="userRecordPic" src={image} alt={name} />
//       <h2> Name: {name}</h2>
//       <h3>Artist: {artist} </h3>
//       <h4>Release Date: {release_date} </h4>
//       <button onClick={handleDeleteClick}>Remove From Library</button>
//     </div>
//   )
// }


// export default Home;


import { useEffect, useState } from "react";
import UserList from "./UserList";
import Search from "./Search";

function Home ({ user }) {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  
  
  useEffect(() => {
    fetch("/user_records")
      .then((r) => r.json())
      .then(setRecords);
  }, []);

 
const displayedRecords = records.filter((rc) =>
    rc.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleDeleteRecord(id) {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  }


  return (
    <div className="userContainer">
    <h1> Welcome {user.username}</h1>
    <Search searchTerm={search} onChangeSearch={setSearch} />
    <UserList userRecords={displayedRecords} onRecordDelete={handleDeleteRecord} />
  </div>
  )
}


export default Home;