import tasks from '../util/data.json' assert { type: 'json' };

const timeFrame = location.search.substring(1) || 'weekly';

document
  .querySelector(`.app-nav > a[data-time-frame=${timeFrame}]`)
  .classList.add('active');

const taskCards = tasks
  .map(
    task =>
      `
    <div
      class="task-card ${task.title.toLowerCase().replaceAll(' ', '-')}"
      style ="background-image: url('${task.icon}')">

      <div>
        <header class="card-header">
          <span>${task.title}</span>

          <button class="options-button">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
          </button>
        </header>
        
        <div class="no-of-hours">
          <span class="current-hours">${task.timeframes[timeFrame].current}hrs
          </span>

          <span class="previous-hours">
            ${
              timeFrame === 'daily'
                ? 'yesterday'
                : 'last ' + timeFrame.replace('ly', '')
            }
            - ${task.timeframes[timeFrame].previous}hrs
        </div>
      </div> 
    </div>
    `
  )
  .join('');

document.querySelector('.dashboard').innerHTML += taskCards;
