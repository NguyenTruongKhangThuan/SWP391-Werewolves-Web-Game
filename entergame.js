import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function Entergame() {
  const navigate = useNavigate();

  const submitHandle = (event) => {
    event.preventDefault();

    navigate("/gamepage");
  };
  return (
    <Fragment>
      <h3>Enter the game room code: </h3>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          id="roomID"
          name="RoomID"
          placeholder="Enter the room ID"
        />
        <button type="submit">Enter</button>
      </form>

      {/* <a href="index_mainpage.html">
        <button type="submit">Return</button>
    </a> */}
      <Link to="/mainpage">
        <button>Return</button>
      </Link>
    </Fragment>
  );
}
export default Entergame;
// function CheckID()
//         {
//             let check = document.getElementById("roomID");
//             if(check.value === "123456")
//             {
//                 window.alert("Room ID Valid. Click Ok to continue");
//                 window.location.replace("http://127.0.0.1:5500/gamepage");
//             }
//             else
//             {
//                 window.alert("Roon ID does not exist.");
//                 window.location.reload();
//             }
//         }
