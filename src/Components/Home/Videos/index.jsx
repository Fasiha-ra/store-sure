import React from "react";
import { VideosWrap } from "./Videos.styles";
import videos from "../../../images/home/videos.png";
const Videos = () => {
  return (
    <VideosWrap>
      <div className="container">
        <img src={videos} alt="" />
        <img src={videos} alt="" />
      </div>
    </VideosWrap>
  );
};

export default Videos;
