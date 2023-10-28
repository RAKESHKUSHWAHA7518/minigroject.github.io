 
const arrayContainer = document.querySelector(".array-container");
const arrayInput = document.getElementById("arrayInput");
const targetInput = document.getElementById("targetInput");
const searchButton = document.getElementById("searchButton");

function renderArray(array) {
    arrayContainer.innerHTML = '';
    for (let value of array) {
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        bar.style.height = `${value * 2}px`;  // Multiply by 2 for better visualization
        arrayContainer.appendChild(bar);
    }
}

async function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        const bar = arrayContainer.children[i];
        bar.style.backgroundColor = "red";  // Highlight the bar being checked
        await new Promise(resolve => setTimeout(resolve, 500));  // Pause for 500ms
        if (array[i] === target) {
            bar.style.backgroundColor = "green";  // Indicate found
            return;
        } else {
            bar.style.backgroundColor = "blue";  // Reset color
        }
    }
    alert("Value not found!");
}

searchButton.addEventListener("click", function() {
    const arrayInputValue = arrayInput.value;
    const target = parseInt(targetInput.value);

    if (isNaN(target)) {
        alert("Please enter a valid target value.");
        return;
    }

    const array = arrayInputValue
        .split(',')
        .map(item => parseInt(item))
        .filter(item => !isNaN(item));

    if (array.length === 0) {
        alert("Please enter a valid array.");
        return;
    }

    renderArray(array);
    linearSearch(array, target);
});
