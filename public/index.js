window.addEventListener('DOMContentLoaded', function (){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');
  let x = 10;
  let y = 10;

  window.addEventListener('keydown', function(event){
    draw(event.keyCode)
  });

  // start point using mouse for little circle say bottom left of canvas
  // move with arrows to draw
  // click to stop drawing

  // const setStart = function()

  const edgeCheckerX = function(x){
    if( x < 5){
      x = 5;
    }else if ( x > 494) {
      x = 494;
    }
    return x
  }

  const edgeCheckerY = function(y){
    if ( y < 5) {
      y = 5;
    } else if (y > 345) {
      y = 345
    }
    return y;
  }

  // const draw = function(keyCode){
  //   if(keyCode === 38){
  //     drawLineUp(x, y);
  //   }else if (keyCode === 40) {
  //     drawLineDown();
  //   }else if (keyCode === 37) {
  //     drawLineLeft();
  //   }else if (keyCode === 39){
  //     drawLineRight();
  //   }
  // };

  const draw = function(keyCode){
    switch(keyCode){
      case 38:
      drawLineUp(x, y);
      break;
      case 40:
      drawLineDown(x, y);
      break;
      case 37:
      drawLineLeft(x, y);
      break;
      case 39:
      drawLineRight(x, y);
      break;
    }
  };

  const drawLineUp = function(){
    context.strokeStyle = 'black';
    context.beginPath(); // start drawing
    context.moveTo(x, y); // move cursor to here
    y -= 10;
    y = edgeCheckerY(y);
    context.lineTo(x,y); // draw line to this coord
    context.stroke(); // stroke colours in the line
  };

  const drawLineDown = function(){
    context.strokeStyle = 'black';
    context.beginPath(); // start drawing
    context.moveTo(x, y); // move cursor to here
    y += 10;
    y = edgeCheckerY(y);
    context.lineTo(x,y); // draw line to this coord
    context.stroke(); // stroke colours in the line
  };

  const drawLineLeft = function(){
    context.strokeStyle = 'black';
    context.beginPath(); // start drawing
    context.moveTo(x, y); // move cursor to here
    x -= 10;
    x = edgeCheckerX(x);
    context.lineTo(x,y); // draw line to this coord
    context.stroke(); // stroke colours in the line
  };

  const drawLineRight = function(){
    context.strokeStyle = 'black';
    context.beginPath(); // start drawing
    context.moveTo(x, y); // move cursor to here
    x += 10;
    x = edgeCheckerX(x);
    context.lineTo(x,y); // draw line to this coord
    context.stroke(); // stroke colours in the line
  };

  const clearButton = document.querySelector('#button-clear')
  clearButton.addEventListener('click', function(){
    context.clearRect(0, 0, 600, 500)
    x = 10;
    y = 10;
  })

});
