var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4bc9ea3e-802d-44d6-b9da-0fcc6ddd1514"],"propsByKey":{"4bc9ea3e-802d-44d6-b9da-0fcc6ddd1514":{"name":"Ball","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ffS2Bur6XwSyaBumyb.KVHiLHAmIejQN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4bc9ea3e-802d-44d6-b9da-0fcc6ddd1514.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var YCor = 200;
var XCor = 200;
var Ball = createSprite(XCor,YCor,10,10);
Ball.setAnimation("Ball");

function draw() {
  background ("white");
  drawSprites();
  createEdgeSprites();
  
  if (keyDown("up")) {
    Ball.velocityY = -6;
    
  }
  if (keyDown("down")) {
    Ball.velocityY = 6;
  }
  if (Ball.isTouching(edges)) {
    Ball.bounceOff(edges);
  }
   if (keyDown("right")) {
    Ball.velocityX = 6;
    
  }
  if (keyDown("left")) {
    Ball.velocityX = -6;
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
