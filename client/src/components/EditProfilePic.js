import React, { useState } from "react";
function EditDog({id, user, pic, onUpdatePic}) {
    const [image_url, setImage_url] = useState(pic);
   

    function handleFormSubmit(e) {
        e.preventDefault();
         fetch(`/users/${user.id}`, {
           method: "PATCH",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
            image_url,
             
           }),
         })
           .then((r) => r.json())
           .then((updatedPic) => onUpdatePic(updatedPic));
      }




    return (
    <form className="edit-dog" onSubmit={handleFormSubmit}>
      <input  type="url" onChange={(e) => setImage_url(e.target.value)} value={image_url} name="image" placeholder="Image URL" />
      <input type="submit" value="Save" />
     </form>
    )
  }
  
  export default EditDog;