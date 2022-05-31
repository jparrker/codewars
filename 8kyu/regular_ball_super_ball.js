
// given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"





var Ball = function(ballType) {
  return {ballType: ballType || 'regular'}
};