import React from "react";
import { useNavigate } from "react-router-dom";
function Change() {
  const navigate = useNavigate();

    const submitHandle = event =>{
        event.preventDefault();
        
		navigate('/setting');
    }
  return (
      <div className="form">
        <p>Room ID: </p>
        <input
          type="text"
          name="roomID"
          id="RoomID"
          placeholder="Enter the new RoomID"
        />
        <form onSubmit={submitHandle}>
          <p>Room Status: </p>
          <input type="radio" id="public" name="state" value="public" />
          <label htmlfor="public">Public</label>
          <input type="radio" id="private" name="state" value="private" />
          <label htmlfor="private">Private</label>
          <button type="submit" >
          Change
        </button>
        </form>
        
      </div>
    
  );
}
export default Change;
// function Direct() {
//   window.alert("Settings Complete!");
//   window.location.replace("http://192.168.0.102:3000/gamepage.js");
// }
