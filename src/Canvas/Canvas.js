import React from 'react';
import './Canvas.css';
import useCanvas from './useCanvas';

const Canvas = props => {  
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);
  
  return <canvas ref={canvasRef} {...rest} className="canvas" />;
}

export default Canvas;