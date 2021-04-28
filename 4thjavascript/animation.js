var ball = document.getElementById('redballpointer');

ball.addEventListener('mouseenter', addAnimationClass);
ball.addEventListener('mouseout', addAnimationClassReverse);

function addAnimationClass() {
  ball.classList.add('redball-animation');
}

function addAnimationClassReverse() {
    ball.classList.remove('redball-animation');
  }