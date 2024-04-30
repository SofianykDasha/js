function loadCatalog() {
  fetch('https://sofianykdasha.github.io/js/catalog.json')
      .then(response => response.json())
      .then(data => {
          let categories = '';
          data.forEach(category => {
              categories += `<a href="#" onclick="loadCategory('${category.shortname}')">${category.name}</a><br>`;
          });
          
          let specialCategoryIndex = Math.floor(Math.random() * 3) + 0;
          console.log(specialCategoryIndex);
          categories += `<a href="#" onclick="loadCategory('${data[specialCategoryIndex].shortname}', '${data[specialCategoryIndex].name}')">Specials</a><br>`;
          document.getElementById('menu').innerHTML = categories;
      });
}

function loadCategory(shortname, name) {
  fetch(`https://sofianykdasha.github.io/js/${shortname}.json`)
      .then(response => response.json())
      .then(data => {
          let categoryContent = `<h3>${data.name}</h3>`;
          data.items.forEach(item => {
              categoryContent += `
                  <div class="card">
                      <img src="https://via.placeholder.com/50" class="card-img-top" alt="${item.name}">
                      <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text">${item.description}</p>
                          <p class="card-text">Price: ${item.price}</p>
                      </div>
                  </div>
              `;
          });
          document.getElementById('content').innerHTML = `<h1>${name}</h1>`;
          document.getElementById('content').innerHTML = categoryContent;
      });
}

document.addEventListener('DOMContentLoaded', loadCatalog);
