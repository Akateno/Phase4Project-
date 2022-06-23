import React from "react";
import UserRecord from "./UserRecords";
function UserList({userRecords,onRecordDelete}) {


    
  return (
    <div className="Usercards">
      {userRecords.map((rec) => (
        <UserRecord
        id={rec.id}
        key={rec.id}
        name={rec.name}
        artist={rec.artist}
        release_date={rec.release_date}
        image={rec.image}
        userID={rec.user_id}
        onRecordDelete={onRecordDelete}
        />
      ))}
    </div>
  );
}
export default UserList;
