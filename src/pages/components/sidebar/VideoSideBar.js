import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import "./videoSideBar.css";

function VideoSideBar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSideBar">
      <div className="videoSideBar_Options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p> {liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSideBar_Options">
        <ChatIcon fontSize="large" />
        <p> {messages} </p>
      </div>
      <div className="videoSideBar_Options">
        <ShareIcon fontSize="large" />
        <p> {shares} </p>
      </div>
    </div>
  );
}

export default VideoSideBar;
