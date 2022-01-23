import {dates} from './data.js';
console.log(dates);


dates.map((date) => {
    console.log(date)
    const timelineItemDiv = document.createElement("div");
    timelineItemDiv.classList.add("timeline-item");
    const timelineItem = document.createElement("div");
    const timelineItemTitle = document.createElement("h2");
    const title = document.createTextNode("date,title"); 
    timelineItemTitle.appendChild(title);
    timelineItem.appendChild(timelineItemTitle);
    timelineItemTitle.className = "timeline-item-title"
    const timelineItemDate = document.createElement("span");
  });


//  trying to make a button 
  const button = document.createElement("button");
  const content = document.createTextNode(
      "More Info "
  );
  
  button.appendChild(content);
  document.body.appendChild(button);
  button.onclick = summary;
  
  


  