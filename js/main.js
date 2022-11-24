let shortTimeGoalsDiv = document.querySelector('#short-time-goals');
let longTimeGoalsDiv = document.querySelector('#long-time-goals');

const shortTimeGoals = [
  {
    goalName: 'احتراف CSS',
    progress: '75',
  },
  {
    goalName: 'القبول في اول عمل على Upwork',
    progress: '50',
  },
  {
    goalName: 'احتراف Javascript',
    progress: '20',
  },
];
const longTimeGoals = [
  // {
  //   goalName: 'دراسة React',
  //   progress: '0',
  // },
  // {
  //   goalName: 'Top-Rated on Upwork',
  //   progress: '0',
  // },
];

// Create short-time goals section

if (shortTimeGoals.length > 0) {
  let goalsDiv = document.createElement('div');
  let button = document.createElement('div');

  goalsDiv.classList.add('goals');
  shortTimeGoalsDiv.append(goalsDiv);

  shortTimeGoals.forEach((goal, index) => {
    let goalDiv = document.createElement('div');
    let goalTitleDiv = document.createElement('div');
    let percentDive = document.createElement('div');
    let progressDiv = document.createElement('div');

    goalDiv.classList.add('goal');
    goalDiv.setAttribute('data-index', index + 1);
    goalTitleDiv.classList.add('goal-title');
    goalTitleDiv.textContent = goal.goalName;
    percentDive.classList.add('percent');
    percentDive.textContent = goal.progress + '%';
    progressDiv.classList.add('progress');
    progressDiv.setAttribute('data-value', goal.progress);
    progressDiv.style.setProperty('--progress-value', goal.progress + '%');

    goalsDiv.append(goalDiv);
    goalDiv.append(goalTitleDiv, percentDive, progressDiv);
  });

  button.classList.add('button');
  button.textContent = 'عرض المزيد';
  goalsDiv.append(button);
} else {
  let noGoalsDiv = document.createElement('div');

  noGoalsDiv.classList.add('no-goals');
  noGoalsDiv.textContent = 'لم يتم اضافة اهداف بعد';
  shortTimeGoalsDiv.append(noGoalsDiv);
}

// Create long-time goals section

if (longTimeGoals.length > 0) {
  let goalsDiv = document.createElement('div');
  let button = document.createElement('div');

  goalsDiv.classList.add('goals');
  longTimeGoalsDiv.append(goalsDiv);

  longTimeGoals.forEach((goal, index) => {
    let goalDiv = document.createElement('div');
    let goalTitleDiv = document.createElement('div');
    let percentDive = document.createElement('div');
    let progressDiv = document.createElement('div');

    goalDiv.classList.add('goal');
    goalDiv.setAttribute('data-index', index + 1);
    goalTitleDiv.classList.add('goal-title');
    goalTitleDiv.textContent = goal.goalName;
    percentDive.classList.add('percent');
    percentDive.textContent = goal.progress + '%';
    progressDiv.classList.add('progress');
    progressDiv.setAttribute('data-value', goal.progress);
    progressDiv.style.setProperty('--progress-value', goal.progress + '%');

    goalsDiv.append(goalDiv);
    goalDiv.append(goalTitleDiv, percentDive, progressDiv);
  });

  button.classList.add('button');
  button.textContent = 'عرض المزيد';
  goalsDiv.append(button);
} else {
  let noGoalsDiv = document.createElement('div');

  noGoalsDiv.classList.add('no-goals');
  noGoalsDiv.textContent = 'لم يتم اضافة اهداف بعد';
  longTimeGoalsDiv.append(noGoalsDiv);
}
