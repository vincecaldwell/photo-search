import React from 'react';

const PhotoCard = (props) => {

  const srcPath= "https://farm"+ props.farm + ".staticflickr.com/"+ props.server + "/"+ props.id +"_"+ props.secret +"_c.jpg";
  return(
    <div className="">
      <img className="mw-100 grow" alt="Did not show" src={srcPath}></img>
      {/* <p>{props.number}</p> */}
    </div>           
  );
}

export default PhotoCard;


