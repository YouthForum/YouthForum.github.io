const initiatives = [{name:'Onehunga Peoples Garden', summary:`We are aiming to start fortnightly weeding/planting bees at the Onehunga People's Gardens.`},{name:'Sustainable Transport in Schools', summary:`We are aiming to make transport to and from schools more sustainable`}];
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
renderInitiatives()
