import {dates} from "./data.js";
console.log(dates);
  

// use for loop??
dates.map((date) => {
    console.log(date)
  
    const timelines = document.getElementsByClassName("timeline"); //getElementsByClassName
    const timelineDiv = timelines[0]



    const timelineItemDiv = document.createElement("div");
    timelineItemDiv.classList.add("timeline-item");
   

    // create timeline title
    const timelineItemTitle = document.createElement("h2");
    timelineItemTitle.classList.add("timeline-item-title");
    timelineItemDiv.appendChild(timelineItemTitle);
    timelineItemTitle.textContent = date.title;

 
    // create span for timeline date
    const timelineItemDate = document.createElement("span");
    timelineItemDate.className = ("timeline-item-date");
    timelineItemDiv.appendChild(timelineItemDate);
    timelineItemDate.textContent = date.date;
    


    // create summary for the timeline
    const timelineItemSummary = document.createElement("p");
    timelineItemSummary.className = ("timeline-item-summary");
    timelineItemDiv.appendChild(timelineItemSummary);
    timelineItemSummary.textContent = date.summary;
    


    // create a button for more information
    const timelineItemMoreInfo = document.createElement("button");
    timelineItemMoreInfo.className = ("timeline-item-more-info");
    timelineItemMoreInfo.textContent = "MORE INFO HERE";
    timelineItemMoreInfo.addEventListener("click", ()=> setModalData(date));
    timelineItemDiv.appendChild(timelineItemMoreInfo);


    timelineDiv.appendChild(timelineItemDiv); 

    // appendChild timelines 


  });

  // Second part, create a modal inside div
 

function setModalData(date){


// create modal container
const modalDiv = document.createElement("div");
modalDiv.setAttribute("id", "modal-container");
modalDiv.setAttribute("class", "modal-close");
document.body.appendChild(modalDiv); 

const modalShow = document.createElement("modal");
modalShow.setAttribute("id", "modal-show");
modalDiv.appendChild(modalShow); 

// create modal date
const modalDate = document.createElement("div");
modalDate.setAttribute("id", "modal-date");
modalDate.textContent = date.date;
modalShow.appendChild(modalDate);

// create modal title
const modalTitle = document.createElement("div");
modalTitle.setAttribute("id", "modal-title");
modalTitle.textContent = date.title;
modalShow.appendChild(modalTitle);


const modalImage = document.createElement("img");
modalImage.setAttribute("id", "modal-image");
modalImage.setAttribute("src", date.image);
// modalImage.textContent = date.image;
modalShow.appendChild(modalImage); 

// create modal full description
const modalFullDescription = document.createElement("div");
modalFullDescription.setAttribute("id", "modal-full-description");
modalFullDescription.textContent = date.fullDescription;
modalShow.appendChild(modalFullDescription);

// create modal close button
const modalCloseButton = document.createElement("button");
modalCloseButton.setAttribute("id", "modal-close-button");
modalCloseButton.textContent = "CLOSE";
modalCloseButton.addEventListener("click", ()=> closeModal());
modalShow.appendChild(modalCloseButton);


function closeModal() {

console.log("closeModal function");
let unshowmodal = document.getElementById('modal-container');
unshowmodal.remove();
}

}


