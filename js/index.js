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
    timelineItemDate.className = "timeline-item-date"
    timelineItemDate.textContent = date.date;
    document.body.prepend(timelineItemDate);
    

    const timelineItemSummary = document.createElement("summary");
    timelineItemSummary.className = "timeline-item-summary"
    timelineItemSummary.textContent = date.summary;
    document.body.prepend(timelineItemSummary);

    // when u commented it doesnt work
    
    // const timelineItemMoreInfo = document.createElement("timelineitemmoreinfo")
    // timelineItemMoreInfo.className = "timeline-item-more-info"
    // timelineItemMoreInfo.textContent = fullDescription;
    // document.body.prepend(timelineItemMoreInfo);
    // timelineItemMoreInfo.addEventListener("click", () => setModalData(date));

});

    



    
// // 1. Create the element 
// const timelineItemTitle = document.createElement("h2");

// // 2. Give it a class name 
// timelineItemTitle.classList.add("timeline-item-title");

//   // 3. Give it text 
// timelineItemTitle.textContent = date.title; 

// // 4. add to the DOM (browser window )
// document.body.appendChild(timelineItemTitle);
timelineItemMoreInfo.addEventListener("click", () => setModalData(date));
timelineItemMoreInfo.addEventListener("click", () => setModalData(date));
date.setAttribute("id", "date");


//  trying to make a button 
  // const button = document.createElement("button");
  // const content = document.createTextNode(
  //     "More Info "
  // );
  
  // button.appendChild(content);
  // document.body.appendChild(button);
  // button.onclick = summary;
  
  


  