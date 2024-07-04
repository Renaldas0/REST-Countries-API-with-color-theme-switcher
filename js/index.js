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
}

displayCountries();

// Theme 

let darkMode = localStorage.getItem("darkMode");
const themeBtn = document.getElementById("theme-btn");

const enableDarkMode = () => {
    //1. add darkmode class to body
    console.log("test")
    document.body.classList.add("dark-mode");
    //2. update darkmode in localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    //1. add darkmode class to body
    document.body.classList.remove("darkMode");
    //2. update darkmode in localStorage
    localStorage.setItem("darkMode", null);
};


themeBtn.addEventListener("click", () => {
    if (darkMode !== "enabled") {
        enableDarkMode();
    }
})