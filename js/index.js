const apiEndpoint = "../rest-countries-api-with-color-theme-switcher-master/data.json";
const cardContainer = document.getElementById("card-container");

const getData = async () => {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
}

// getData();

const displayCountries = async () => {
    const payload = await getData();

    let dataDisplay = payload.map((country) => {
        return `<div class="card">
                                <img src=${country.flags.svg} alt="">
                                <div class="card-summary">
                                    <h2>${country.name}</h2>
                                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                                    <p><span>Region:</span> ${country.region}</p>
                                    <p><span>Capital:</span> ${country.capital}</p>
                                </div>
                            </div>`
    })

    cardContainer.innerHTML = dataDisplay;
}

displayCountries();