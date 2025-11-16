const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const spans = document.querySelectorAll("span");
const h1s = document.querySelectorAll("h1");
const lis = document.querySelectorAll("li");
const as = document.querySelectorAll("a");
const ps = document.querySelectorAll("p");
const bs = document.querySelectorAll("b");
const piece = document.querySelectorAll(".piece");


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

        piece.forEach(el => {
            el.style.backgroundColor = "black";
        });

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
            a.style.color = "black";
        });

        bs.forEach((b) => {
            b.style.color = "black";
        });

        piece.forEach(el => {
            el.style.backgroundColor = "white";
        });
    }
});