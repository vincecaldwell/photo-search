import React from 'react';

const Scroll = (props) => {
  return (
    <div className="scroll-field"style={ {overflowY: 'scroll', border: '2px solid #0984e3', height: '600px' } }>
      {props.children}
    </div>
  );
};

export default Scroll;