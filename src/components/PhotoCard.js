//jshint esversion:6

import React from 'react';

const PhotoCard = (props) => {

  const srcPath= "https://farm"+ props.farm + ".staticflickr.com/"+ props.server + "/"+ props.id +"_"+ props.secret +"_q.jpg";
  return(
    <div className="tc bg-light-green dib br3 pa3 ma4 grow bw2 shadow-5">
      <img className="mw-100 grow" alt="Did not show" src={srcPath}></img>
      {/* <p>{props.number}</p> */}
    </div>           
  );
}

export default PhotoCard;

//tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5
// const Card = ({name, email, id }) => {