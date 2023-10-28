const arrayContainer = document.querySelector(".array-container");
const targetInput = document.getElementById("targetInput");
const searchButton = document.getElementById("searchButton");
const array = getRandomArray(10, 1, 100);  // Array of 10 random numbers between 1 and 100

function getRandomArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1) + min));
}

function renderArray(array) {
    arrayContainer.innerHTML = '';  // Clear previous bars
    for (let value of array) {
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        // bar.classList.add("array-bar");
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
    const target = parseInt(targetInput.value);
    linearSearch(array, target);
});

// Initially render the array
renderArray(array);
