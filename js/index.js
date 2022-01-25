import {dates} from './data.js';
console.log(dates);


dates.map((date) => {
    console.log(date)
    const timelineItemDiv = document.createElement("div");
    timelineItemDiv.classList.add("timeline-item");

    const timelineItemTitle = document.createElement("h2");
    timelineItemTitle.className = "timeline-item-title"
    timelineItemTitle.textContent = date.title;
    document.body.prepend(timelineItemTitle);
    
    
    const timelineItemDate = document.createElement("span");
  });
// // 1. Create the element 
// const timelineItemTitle = document.createElement("h2");

// // 2. Give it a class name 
// timelineItemTitle.classList.add("timeline-item-title");

//   // 3. Give it text 
// timelineItemTitle.textContent = date.title; 

// // 4. add to the DOM (browser window )
// document.body.appendChild(timelineItemTitle);

//  trying to make a button 
  // const button = document.createElement("button");
  // const content = document.createTextNode(
  //     "More Info "
  // );
  
  // button.appendChild(content);
  // document.body.appendChild(button);
  // button.onclick = summary;
  
  


  