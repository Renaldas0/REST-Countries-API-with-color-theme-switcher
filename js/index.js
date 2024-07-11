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
        return `<div class="card" data-theme="default">
                                <div class="img-container">
                                    <img src=${country.flags.svg} alt="Flag of ${country.name}">
                                </div>
                                <div class="card-summary">
                                    <h2>${country.name}</h2>
                                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                                    <p><span>Region:</span> ${country.region}</p>
                                    <p><span>Capital:</span> ${country.capital}</p>
                                </div>
                            </div>`
    })

    cardContainer.innerHTML = dataDisplay.join("");

    if (darkMode === "enabled") {
        enableDarkMode();
    }
}

displayCountries();

// Theme 

let darkMode = localStorage.getItem("darkMode");
const themeBtn = document.getElementById("theme-btn");

const header = document.getElementById("header");
const title = document.getElementById("title");
const main = document.getElementById("main-container");
const searchBar = document.getElementById("search-bar");
const regionFilter = document.getElementById("region-filter");
const searchInput = document.getElementById("search");

const enableDarkMode = () => {
    //1. add darkmode class to body

    header.setAttribute('data-theme', 'dark');
    title.setAttribute('data-theme', 'dark');
    themeBtn.setAttribute('data-theme', 'dark');
    main.setAttribute('data-theme', 'dark');
    searchBar.setAttribute('data-theme', 'dark');
    regionFilter.setAttribute('data-theme', 'dark');
    Array.from(document.getElementsByClassName("card")).forEach(card => {
        card.setAttribute('data-theme', 'dark');
    });
    searchInput.setAttribute('data-theme', 'dark');
    //2. update darkmode in localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    //1. add darkmode class to body
    header.setAttribute('data-theme', 'default');
    title.setAttribute('data-theme', 'default');
    themeBtn.setAttribute('data-theme', 'default');
    main.setAttribute('data-theme', 'default');
    searchBar.setAttribute('data-theme', 'default');
    regionFilter.setAttribute('data-theme', 'default');
    Array.from(document.getElementsByClassName("card")).forEach(card => {
        card.setAttribute('data-theme', 'default');
    });
    searchInput.setAttribute('data-theme', 'default');
    //2. update darkmode in localStorage
    localStorage.setItem("darkMode", null);
};


themeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});