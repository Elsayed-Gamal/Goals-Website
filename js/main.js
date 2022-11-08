let shortGoal = document.querySelectorAll('.short-time-goals .goal');
let longGoal = document.querySelectorAll('.long-time-goals .goal');

// changing progress value and number of short-time goal dynamically with data attribute

shortGoal.forEach((element, index) => {
  let progressvalue = element.children[2].getAttribute('data-value');

  element.children[2].style.setProperty(
    '--progress-value',
    progressvalue + '%'
  );
  element.children[1].innerHTML = progressvalue + '%';

  element.setAttribute('data-index', index + 1);
});

// changing progress value and number of long-time goal dynamically with data attribute

longGoal.forEach((element, index) => {
  let progressvalue = element.children[2].getAttribute('data-value');

  element.children[2].style.setProperty(
    '--progress-value',
    progressvalue + '%'
  );
  element.children[1].innerHTML = progressvalue + '%';

  element.setAttribute('data-index', index + 1);
});
