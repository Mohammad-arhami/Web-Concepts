const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const h1s = document.querySelectorAll("h1");
const ps = document.querySelectorAll("p");
const bs = document.querySelectorAll("b");
const lis = document.querySelectorAll("li");

themBtn.addEventListener("click" , () => {
    if ( themImg.classList.contains("dark") ) {
        themImg.classList.replace("dark" , "light");
        themImg.setAttribute("src","../Images_files/light.jpg");
        span.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";

        h1s.forEach((h1) => {
            h1.style.color = "white";
        });

        ps.forEach((p) => {
            p.style.color = "white";
        });

        bs.forEach((b) => {
            b.style.color = "rgb(255, 255, 255)";
        });

        lis.forEach((li) => {
            li.style.color = "white";
        });

    } else{
        themImg.classList.replace("light" , "dark");
        themImg.setAttribute("src","../Images_files/moon.jpg");
        span.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "whitesmoke";

        h1s.forEach((h1) => {
            h1.style.color = "black";
        });
        
        ps.forEach((p) => {
            if (!p.classList.contains("specific")) {
                p.style.color = "black";
            };
        });

        bs.forEach((b) => {
            b.style.color = "black";
        });

        lis.forEach((li) => {
            li.style.color = "black";
        })
    }
});





// ! ==========================================================

let firsth1 = document.getElementById("scrolled1");
let h2 = document.getElementById("scrolled2");

window.addEventListener("scroll" , () => {
    if (window.scrollY > 1300) {
        firsth1.style.transform = "translateY(-150px)";
        h2.style.transform = "translateY(-150px)";
    }
})

window.addEventListener("scroll" , () => {
    if (window.scrollY < 1250) {
        firsth1.style.transform = "translateY(0)";
        h2.style.transform = "translateY(0)";
    }
})


// ! h1 and p =================================================

let secondh1 = document.getElementById("scrolled3");
let p = document.getElementById("scrolled4");

window.addEventListener("scroll" , () => {
    if (window.scrollY > 1730) {
        secondh1.style.transform = "translateY(-130px)";
        p.style.transform = "translateY(-130px)";
    }
});

window.addEventListener("scroll" , () => {
    if (window.scrollY < 1680) {
        secondh1.style.transform = "translateY(0)";
        p.style.transform = "translateY(0)";
    }
});


// ! Hidden IMG

let hiddenIMG = document.getElementById("hiddenIMG");

window.addEventListener("scroll" , () => {
    if (window.scrollY < 2160) {
        hiddenIMG.style.opacity = "1";
    }
});

window.addEventListener("scroll" , () => {
    if (window.scrollY < 2035) {
        hiddenIMG.style.opacity = "0";
    }
});


