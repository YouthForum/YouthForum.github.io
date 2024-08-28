
const eventspage = [
  
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

