const events = [
  {name: 'OPG Visit', Date: "21-7-2024 9:30am", summary: 'The OPG group is meeting to survey the OPG and decide which area they will start to look after as well as talk to Echo & Paul about what plants/weeds are in the gardens', Day:'21', Month:'7'},
  {name: 'No Upcoming Events', Date: "Check Back Soon", summary: '', Day:'32', Month:'13'}
];

const Initiatives = [{name:''}];

const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
let mostUrgentEvent = [{name:'', date:'', summary:''}];
const d = new Date();
let currentMonth = d.getMonth() + 1; // getMonth() returns 0-11, so add 1 to match with your event Month format

function findNextEvent() {
  events.forEach(event => {
    if (event.Month >= currentMonth) {
      if (event.Day >= dayOfMonth) {
        mostUrgentEvent[0].name = event.name;
        mostUrgentEvent[0].date = event.Date;
        mostUrgentEvent[0].summary = event.summary;
      }
    }
  });
}

function renderNextEvent() {
  findNextEvent();
  let nextEventhtml = `<div class="initiative">
      <h3>${mostUrgentEvent[0].name}</h3>
      <h4>${mostUrgentEvent[0].date}</h4>
      <p>${mostUrgentEvent[0].summary}</p>
    </div>`;
  document.querySelector('.js-nextEvent').innerHTML = nextEventhtml;
}

// Call the function to render the next event
renderNextEvent();

function renderEvents() {
  console.log(allhtml)
  events.forEach(event => {
    let html = `<div class="initiative">
      <h3>${event.name}</h3>
      <h4>${event.Date}</h4>
      <p>${event.summary}</p>
    </div>`;
    allhtml += html;
  });
  
  document.querySelector('.js-events').innerHTML = allhtml;
}

console.log(dayOfMonth);

renderEvents();

