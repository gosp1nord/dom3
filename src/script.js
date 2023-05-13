import ControlGoblin from './changeImg';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new ControlGoblin(document.querySelector('.table'));
  setInterval(() => {
    goblin.movieGoblin();
  }, 1000);
});
