<script>

    let filters = {
        pricePerPortion: 3,
        countryOfOrigin: '',
        allergies: [],
        kcal: 10,
        fat: 10,
        sugar: 10
    };

    function applyFilters() {
        filteredProducts = products.filter(product => {
            let match = true;

            if (filters.pricePerPortion && product.pricePerPortion !== filters.pricePerPortion) {
                match = false;
            }

            if (filters.countryOfOrigin && product.countryOfOrigin !== filters.countryOfOrigin) {
                match = false;
            }

            if (filters.allergies.length > 0) {
                for (let allergy of filters.allergies) {
                    if (!product.allergies.includes(allergy)) {
                        match = false;
                        break;
                    }
                }
            }

            if (filters.kcal && product.kcal !== filters.kcal) {
                match = false;
            }

            if (filters.fat && product.fat !== filters.fat) {
                match = false;
            }

            if (filters.sugar && product.sugar !== filters.sugar) {
                match = false;
            }

            return match;
        });
    }
</script>

<style>
    /* Your component-specific styles here */
    @import './style.css';
</style>

<div class="search-section">
    <h1>Search Page</h1>

    <div>
        <label for="pricePerPortion">Price per Portion:</label>
        <input type="range" id="pricePerPortion" min="0" max="25" step="0.1" bind:value={filters.pricePerPortion} on:input={applyFilters} />
        <output>{filters.pricePerPortion}</output>
    </div>

    <div>
        <label for="countryOfOrigin">Origin of Recipe:</label>
        <div class="radio-options">
            <label for="Italian">
                <input type="radio" id="Italian" name="countryOfOrigin" value="Italian" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> Italian
            </label>
            <label for="French">
                <input type="radio" id="French" name="countryOfOrigin" value="French" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> French
            </label>
            <label for="Asian">
                <input type="radio" id="Asian" name="countryOfOrigin" value="Asian" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> Asian
            </label>
            <label for="Spanish">
                <input type="radio" id="Spanish" name="countryOfOrigin" value="Spanish" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> Spanish
            </label>
            <label for="American">
                <input type="radio" id="American" name="countryOfOrigin" value="American" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> American
            </label>
            <label for="Dutch">
                <input type="radio" id="Dutch" name="countryOfOrigin" value="Dutch" bind:group={filters.countryOfOrigin} on:change={applyFilters} />
                <span ></span> Dutch
            </label>
            <!-- Add more options here -->
        </div>
    </div>
    

    <div>
        <label for="allergies">Allergies/Preferences:</label>
        <div>
            <label for="vegan">
                <input type="checkbox" id="vegan" bind:group={filters.allergies} value="vegan" on:change={applyFilters} />
                Vegan
            </label>
        </div>
        <div>
            <label for="gluten-free">
                <input type="checkbox" id="gluten-free" bind:group={filters.allergies} value="gluten-free" on:change={applyFilters} />
                Gluten-free
            </label>
        </div>
        <div>
            <label for="dairy-free">
                <input type="checkbox" id="dairy-free" bind:group={filters.allergies} value="dairy-free" on:change={applyFilters} />
                Dairy-free
            </label>
        </div>
        <div>
            <label for="nut-free">
                <input type="checkbox" id="nut-free" bind:group={filters.allergies} value="nut-free" on:change={applyFilters} />
                Nut-free
            </label>
        </div>
        <div>
            <label for="wheat-free">
                <input type="checkbox" id="wheat-free" bind:group={filters.allergies} value="wheat-free" on:change={applyFilters} />
                Wheat-free
            </label>
        </div>
        <div>
            <label for="soy-free">
                <input type="checkbox" id="soy-free" bind:group={filters.allergies} value="soy-free" on:change={applyFilters} />
                Soy-free
            </label>
        </div>
        <div>
            <label for="fish-free">
                <input type="checkbox" id="fish-free" bind:group={filters.allergies} value="fish-free" on:change={applyFilters} />
                Fish-free
            </label>
        </div>

    <div>
        <label for="kcal">Amount of kcal per 100g:</label>
        <input type="range" id="kcal" min="0" max="500" step="10" bind:value={filters.kcal} on:input={applyFilters} />
        <output>{filters.kcal}</output>
    </div>

    <div>
        <label for="fat">Amount of fat per 100g:</label>
        <input type="range" id="fat" min="0" max="50" step="1" bind:value={filters.fat} on:input={applyFilters} />
        <output>{filters.fat}</output>
    </div>

    <div>
        <label for="sugar">Amount of sugar per 100g:</label>
        <input type="range" id="sugar" min="0" max="50" step="1" bind:value={filters.sugar} on:input={applyFilters} />
        <output>{filters.sugar}</output>
    </div>
</div>
</div>