
const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const h1s = document.querySelectorAll("h1");
const ps = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const as = document.querySelectorAll("a");

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

        
        lis.forEach((li) => {
            li.style.color = "white";
        });

        as.forEach((a) => {
            a.style.color = "white";
        });

    } else{
        themImg.classList.replace("light" , "dark");
        themImg.setAttribute("src","../Images_files/moon-icon.svg");
        span.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "whitesmoke";

        h1s.forEach((h1) => {
            h1.style.color = "black";
        });

        ps.forEach((p) => {
            p.style.color = "black";
        });

        lis.forEach((li) => {
            li.style.color = "black";
        });

        as.forEach((a) => {
            a.style.color = "black";    
        });
    }
});

















