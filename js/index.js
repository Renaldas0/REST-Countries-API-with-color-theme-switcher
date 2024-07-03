const cardContainer = document.getElementById("card-container");

const data = fetch("../rest-countries-api-with-color-theme-switcher-master");

cardContainer.innerHTML = `<div class="card">
                                <img src="https://flagcdn.com/af.svg" alt="">
                                <div class="card-summary">
                                    <h2>Country name</h2>
                                    <p>Population:</p>
                                    <p>Region:</p>
                                    <p>Capital:</p>
                                </div>
                            </div>`;