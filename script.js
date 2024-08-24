//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled'];

        // Function to remove articles and sort bands
        function sortBands(bands) {
            return bands.map(band => band.replace(/^(a|an|the)\s+/i, '')).sort();
        }

        // Sort the bands and populate the list
        const sortedBands = sortBands(bands);
        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);   

