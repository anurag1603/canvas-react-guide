import React from 'react';

export default class About extends React.Component {

   componentDidMount() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
      ctx.closePath();
    }

  render() {
     return (
        <div>
           <canvas ref="canvas" width={640} height={425} />
           <h1>About...</h1>
        </div>
     )
  }
}
