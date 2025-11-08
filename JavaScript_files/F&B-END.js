const invisible_container = document.querySelectorAll(".invisible-container");
const icons =  Array.from(invisible_container).map((container) => {
    return container.lastElementChild
});

invisible_container.forEach((container) => {
    container.addEventListener("mouseenter" , (e) => {
        e.target.lastElementChild.innerHTML = "arrow_drop_up";  
    });
});


invisible_container.forEach((container) => {
    container.addEventListener("mouseleave" , (e) => {
        e.target.lastElementChild.innerHTML = "arrow_drop_down"; 
    });
});



// ! ========================================================


// const overlays = document.querySelectorAll(".overlay");

// setInterval(() => {
//     overlays.forEach(container => {
//         container.style.height = "100%";
//         setTimeout(() => {
//             console.log("mmd");
//         }, 3000);
//     });
// }, 2500);

// setInterval(() => {
//     overlays.forEach(container => {
//         container.style.height = "0%";
//     });
// }, 6000);

