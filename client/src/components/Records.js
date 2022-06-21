
import React, { useEffect, useState } from "react";
import Search from "./Search";
import RecordList from "./RecordList";

function Records(){
    const [records, setRecords] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/records")
          .then((r) => r.json())
          .then((records) => setRecords(records));
      }, []);

      const displayedRecords = records.filter((rec) =>
    rec.name.toLowerCase().includes(search.toLowerCase()));

      return (
        <div className="recordcontainer">
          
          <h1 className="recordheader">Records</h1>
          <Search searchTerm={search} onChangeSearch={setSearch} />
          <RecordList record={displayedRecords} />
        </div>
      );
}

export default Records;