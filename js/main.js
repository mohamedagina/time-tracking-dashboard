import tasks from '../util/data.json' assert { type: 'json' };

let timeFrame = 'weekly';

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

const taskCards = tasks
  .map(
    task =>
      `
    <div
      class="task-card ${task.title.replaceAll(' ', '-')}"
      style ="background-image: url('${task.icon}')">

      <header class="card-header">
        <span class="task-title">${task.title}</span>
        <button class="options-button"><img src="../images/icon-ellipsis.svg"/></button>
      </header>

      <span class="current-hours">${task.timeframes[timeFrame].current}hrs
      </span>

      <span class="previous-hours">
      last
        ${timeFrame === 'daily' ? 'yesterday' : timeFrame.replace('ly', '')}
        - ${task.timeframes[timeFrame].previous}hrs
    </div>
    `
  )
  .join('');

tasksContainer.innerHTML = taskCards;

document.body.appendChild(tasksContainer);
