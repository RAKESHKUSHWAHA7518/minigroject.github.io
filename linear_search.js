document.addEventListener("DOMContentLoaded", function() {
    const arrayInput = document.getElementById("arrayInput");
    const targetInput = document.getElementById("targetInput");
    const searchButton = document.getElementById("searchButton");
    const status = document.getElementById("status");

    searchButton.addEventListener("click", function() {
        const arrayString = arrayInput.value;
        const target = parseInt(targetInput.value);
        const array = arrayString.split(',').map(item => parseInt(item));

 

  

        const result = linearSearch(array, target);

        if (result !== -1) {
            status.textContent = `Element ${target} found at index ${result}`;
        } else {
            status.textContent = `Element ${target} not found in the array`;
        }
    });

    const insertArrayToHtml = (array) => {
        const html = '<div class="array-element">' + 
            array.join('</div><div class="array-element">') + 
                '</div>';
        document.getElementById('array').innerHTML = html;
    }

    function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
        }
        return -1;
    }
});
