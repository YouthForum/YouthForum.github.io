
const eventspage = [
  {name: 'OPG Visit', Date: "18-8-2024 9:30am", summary: 'The OPG group is meeting to survey the OPG and decide which area they will start to look after as well as talk to Echo & Paul about what plants/weeds are in the gardens', Day:'18', Month:'8'}
];
const eventdiv = document.querySelector('.js-events');
function renderEvents() {
  let allhtml = '';
  eventspage.forEach((eventspageObject, Index) => {
    const { name } = eventspageObject;
    const { Date } = eventspageObject;
    const { summary } = eventspageObject;
    let html = `<div class="initiative">
      <h3>${name}</h3>
      <h4>${Date}</h4>
      <p>${summary}</p>
    </div>`;
    allhtml += html;
    eventdiv.innerHTML = allhtml;
  });
}
renderEvents();

