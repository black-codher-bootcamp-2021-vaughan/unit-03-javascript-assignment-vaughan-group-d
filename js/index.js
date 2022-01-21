import {dates} from './data.js';
console.log(dates);

dates.map((date) => {
    console.log(date)
    const timelineItemDiv = document.createElement("div");
    timelineItemDiv.classList.add("timeline-item");
    timelineContainer.appendChild(timelineItemDiv);
  });
  

  