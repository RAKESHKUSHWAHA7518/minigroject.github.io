document.addEventListener("DOMContentLoaded", function() {
    const arrayInput = document.getElementById("arrayInput");
    const targetInput = document.getElementById("targetInput");
    const searchButton = document.getElementById("searchButton");
    const arrayContainer = document.getElementById("arrayContainer");
    const status = document.getElementById("status");

    searchButton.addEventListener("click", function() {
        const arrayString = arrayInput.value;
        const target = parseInt(targetInput.value);
        const array = arrayString.split(',').map(item => parseInt(item));

        clearArrayContainer();
        displayArray(array);

        const result = binarySearch(array, target);

        if (result !== -1) {
            status.textContent = `Element ${target} found at index ${result}`;
        } else {
            status.textContent = `Element ${target} not found in the array`;
        }
    });

    function clearArrayContainer() {
        arrayContainer.innerHTML = '';
    }

    function displayArray(array) {
        array.forEach((element, index) => {
            const span = document.createElement("span");
            span.textContent = element;
            arrayContainer.appendChild(span);
        });
    }

    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            // Visualize the current search by highlighting the mid element
            arrayContainer.children[mid].style.backgroundColor = "yellow";

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

            // Delay to visualize the search
            setTimeout(() => {
                arrayContainer.children[mid].style.backgroundColor = "";
            }, 500);
        }

        return -1;
    }
});
