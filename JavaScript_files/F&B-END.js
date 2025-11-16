
const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const spans = document.querySelectorAll("span");
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const lis = document.querySelectorAll("li");
const as = document.querySelectorAll("a");
const ps = document.querySelectorAll("p");
const bs = document.querySelectorAll("b");
const framework_container = document.getElementsByClassName("framework-container")[0];
const list_of_advantage = document.getElementsByClassName("list-of-advantage");
const visible_container = document.getElementsByClassName("visible-container");
const invisible_container = document.querySelectorAll(".invisible-container");
const languages_list = document.querySelectorAll(".languages-list");


themBtn.addEventListener("click" , () => {
    if ( themImg.classList.contains("dark") ) {
        themImg.classList.replace("dark" , "light");
        themImg.setAttribute("src","../Images_files/light.jpg");
        span.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";

        h1s.forEach((h1) => {
            h1.style.color = "white";
        });

        h2s.forEach((h2) => {
            h2.style.color = "white";
        });

        ps.forEach((p) => {
            p.style.color = "white";
        });

        spans.forEach((span) => {
            if (!span.classList.contains("specific")) {
                span.style.color = "white";
            }
        });

        lis.forEach((li) => {
            li.style.color = "white";
        });

        as.forEach((a) => {
            a.style.color = "white";
        });

        bs.forEach((b) => {
            b.style.color = "white";
        });

        framework_container.style.backgroundColor = "black";

        Array.from(list_of_advantage).forEach((liAdvantage) => {
            liAdvantage.style.boxShadow = "-3px 6px 10px rgba(63, 63, 63, 1)";
        });

        Array.from(visible_container).forEach((visible) => {
            visible.style.backgroundColor = "rgba(0, 0, 0, 1)";
        })

        Array.from(invisible_container).forEach((invisible) => {
            invisible.style.backgroundColor = "rgba(0, 0, 0, 1)";
        })

                
        Array.from(invisible_container).forEach((invisible) => {
            invisible.firstElementChild.nextElementSibling.style.border = "1px solid rgb(255, 255, 255)";
        })

        Array.from(invisible_container).forEach((invisible) => {
            invisible.lastElementChild.style.color = "rgb(255, 255, 255)";
        })

        Array.from(languages_list).forEach((lang) => {
            lang.style.backgroundColor = "rgba(0, 0, 0, 1)";
        })

    } else{
        themImg.classList.replace("light" , "dark");
        themImg.setAttribute("src","../Images_files/moon-icon.svg");
        span.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "whitesmoke";

        h1s.forEach((h1) => {
            if (!h1.classList.contains("specific")) {
                h1.style.color = "black";
            };
        });

        h2s.forEach((h2) => {
            if (!h2.parentElement.classList.contains("overlay")) {
                h2.style.color = "black";
            }
        });


        ps.forEach((p) => {
            if (!p.classList.contains("specific")) {
                p.style.color = "black";
            };
        });

        spans.forEach((span) => {
            if (!span.classList.contains("specific")) {
                span.style.color = "black";
            };
        });

        lis.forEach((li) => {
            if (!li.classList.contains("specific")) {
                li.style.color = "black";
            };
        });

        as.forEach((a) => {
            if (!a.parentElement.classList.contains("overlay")) {
                a.style.color = "black";    
            }
        });

        bs.forEach((b) => {
            b.style.color = "black";
        });

        framework_container.style.backgroundColor = "whitesmoke";

        Array.from(list_of_advantage).forEach((liAdvantage) => {
            liAdvantage.style.boxShadow = "-3px 6px 10px rgb(187, 187, 187)";
        });

        Array.from(visible_container).forEach((visible) => {
            visible.style.backgroundColor = "rgba(255, 255, 255, 1)";
        })

        Array.from(invisible_container).forEach((invisible) => {
            invisible.style.backgroundColor = "rgba(255, 255, 255, 1)";
        })
        
        Array.from(invisible_container).forEach((invisible) => {
            invisible.firstElementChild.nextElementSibling.style.color = "rgba(255, 255, 255, 1)";
            invisible.firstElementChild.nextElementSibling.style.border = "1px solid rgba(0, 0, 0, 1)";
        })

        Array.from(invisible_container).forEach((invisible) => {
            invisible.lastElementChild.style.color = "rgba(0, 0, 0, 1)";
        })

        Array.from(languages_list).forEach((lang) => {
            lang.style.backgroundColor = "rgba(233, 233, 233, 1)";
        })
    }
});







// ! =============================================================

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

