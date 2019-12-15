apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25'
}

updatePage();



const goBtn = document.getElementById('go');

goBtn.addEventListener('click', function() {
    apiData.id = document.getElementById('idNum').value;

    updatePage();
});

function updatePage() {

    const {
        url,
        type,
        id
    } = apiData


    const apiUrl = `${url}${type}/${id}`;
    fetch(apiUrl)
        .then((data) => data.json())
        .then((pokemon) => generateHtml(pokemon));

    const generateHtml = (data) => {
        const html = `
                <div class="name">${data.name}</div>
                <img src=${data.sprites.front_default}>
                <div class="details">
                    <span>Height: ${data.height}</span>
                    <span>Weight: ${data.weight}</span>
                </div>
            `;

        const pokemonDiv = document.querySelector('.pokemon');
        pokemonDiv.innerHTML = html;
    }

}