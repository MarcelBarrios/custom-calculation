// storing all the elements in variables so I can select them through querySelector
const radiusInputE = document.querySelector("#radius")
const heightInputE = document.querySelector("#height")
const selectShape = document.querySelector("#shapes")
const pResult = document.querySelector("#result")

// eventListener to listen for changes in input, if there is a change in the input the
// function calculateVolume is gonna get called
document.body.addEventListener("input", calculateVolume)

// function to calculate the volume with event object as a parameter.
function calculateVolume(e) {
    //radius and height variables to get the value of the input and then convert them
    //to a float so they can be used in the calculation
    const radius = parseFloat(radiusInputE.value);
    const height = parseFloat(heightInputE.value);
    // setting volume to 0
    let volume = 0;

    // if the id of the target is radius
    if(e.target.id == "radius") {
        // log to the cansole the changed radius
        console.log("Radius changed:", e.target.value);
    }
    // if the id of the target is height
    else if (e.target.id == "height") {
        // log the height value
        console.log("Height changed:", e.target.value);
    }
    // if the option cone is selected
    if (selectShape.value == "cone") {
        // if radius and height have values
        if (radius && height) {
            // store result of formula to calculate volume of cone
            volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
            // change the content of p element so the result is displayed
            pResult.innerText = `The volume of the cone is ${volume.toFixed(2)}`;
        }
    }
    // else if the option shpere is selected 
    else if (selectShape.value == "sphere") {
        // if radius has a value
        if (radius) {
            // store the result of the formula to calculate the volume of sphere
            volume = (4/3) * Math.PI * Math.pow(radius, 3);
            // change the content of p element so the result is displayed
            pResult.innerText = `The volume of the sphere is ${volume.toFixed(2)}`;
        }
    }
    // else if the selected option is cylinder
    else if (selectShape.value == "cylinder") {
        // if radius and height have values
        if (radius && height) {
            // store the result of the formula to calculate the volume of cylinder
            volume = Math.PI * Math.pow(radius, 2) * height;
            // change the content of p element so the result is displayed
            pResult.innerText = `The volume of the cylinder is ${volume.toFixed(2)}`;
        }
    }
    
}

// select the element with the id of form, and add to it and addEventListener to 
// lister when the submit button is clicked, then call the anonymous function with
// the event object as a parameter.
document.querySelector("#form").addEventListener("submit", function(e) {
    // Prevent the form from submitting
    e.preventDefault(); 
    // Perform volume calculation 
    calculateVolume(e)
    // log to the console
    console.log("Form submitted");
});

// listen through the change event if an option changes, if it changes then call anonymous
// function.
selectShape.addEventListener("change", function() {
    // select the option (string) and store it
    const selectedShape = selectShape.value;

    // if selectedShape is equal to cone
    if (selectedShape === "cone") {
        // change the background image to a cone image
        document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/48/86/10/360_F_248861088_mgkvwjrZ0HvyiBgPFezloiDVbvw7vDiX.jpg')";
    } 
    // if selectedShape is equal to sphere
    else if (selectedShape === "sphere") {
        // change the background image to a sphere image
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/abstract-sphere-color-background-3d-sphere-shape-light-pastel-buble-trendy-gradient-3d-rendering_34478-1949.jpg')";
    } 
    // if selectedShape is equal to cylinder
    else if (selectedShape === "cylinder") {
        // change the background image to a cylinder image
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/background-with-geometric-cylinders-shapes-black-color-3d-3d-illustration_78895-2435.jpg')";
    }
});