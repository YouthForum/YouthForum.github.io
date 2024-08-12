const events = [
  {name: 'OPG Visit', Date: "18-8-2024 9:30am", summary: 'The OPG group is meeting to survey the OPG and decide which area they will start to look after as well as talk to Echo & Paul about what plants/weeds are in the gardens', Day:'18', Month:'8'},
  {name: 'No Upcoming Events', Date: "Check Back Soon", summary: '', Day:'32', Month:'13'} //Keep this in no matter what
];
const initiatives = [
  {name:'Onehunga Peoples Garden', summary:`We are aiming to start fortnightly weeding/planting bees at the Onehunga People's Gardens.`},
  {name:'Sustainable Transport in Schools', summary:`We are aiming to make transport to and from schools more sustainable`}//only add 2-3 initiatives to this
]; 
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
const d = new Date();
let mostUrgentEvent = [{name:'', date:'', summary:''}];
let currentMonth = d.getMonth() + 1; 
let currentNextEventMonth = 13;
let currentNextEventDay = 32;
const initiative = document.querySelector('.js-initiatives');
function renderInitiatives() {
  let fullHtml = '';
  initiatives.forEach((initiativesObject, index) => {
    const { name } = initiativesObject;
    const { summary } = initiativesObject;
    const html = `
      <div class="initiative">
          <h3>${name}</h3>
          <p>${summary}</p>
      </div>`
    fullHtml += html;
  })
  initiative.innerHTML = fullHtml
}
function findNextEvent() {
  events.forEach(event => {
    if (event.Month >= currentMonth && event.Month < currentNextEventMonth) {
      if (event.Day >= dayOfMonth && event.Day < currentNextEventDay) {
        currentNextEventDay = event.Day;
        currentNextEventMonth = event.Month;
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
renderNextEvent();
renderInitiatives();
