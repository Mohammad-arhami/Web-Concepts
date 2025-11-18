const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const h1s = document.querySelectorAll("h1");
const ps = document.querySelectorAll("p");
const bs = document.querySelectorAll("b");
const h1_title = document.querySelector(".typewriter-animation");

themBtn.addEventListener("click" , () => {
    if ( themImg.classList.contains("dark") ) {
        themImg.classList.replace("dark" , "light");
        themImg.setAttribute("src","../Images_files/light.jpg");
        span.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";
        h1_title.style.cssText = " background-image: url(../HTML-Images_file/Pure-White-full-2.jpg);";

        h1s.forEach((h1) => {
            h1.style.color = "white";
        });

        ps.forEach((p) => {
            if (p.parentElement.classList.contains("specific_p")) {
                p.style.cssText = "color : black";
            }
            else if(p.classList.contains("p_table") || p.classList.contains("intro-p")){
                p.style.color = "white";
            }
            if(!p.parentElement.classList.contains("specific_p") && !p.classList.contains("p_table") && !p.classList.contains("intro-p")){
                p.style.color = "rgb(252, 252, 252)";
            }
        });

        bs.forEach((b) => {
            b.style.color = "rgb(255, 255, 255)";
        });

    } else{
        themImg.classList.replace("light" , "dark");
        themImg.setAttribute("src","../Images_files/moon.jpg");
        span.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "white";
        h1_title.style.cssText = " background-image: url(../HTML-Images_file/History.png);";


        h1s.forEach((h1) => {
            if (h1.classList.contains("h1_table")) {
                h1.style.color = "white";
            }
            else if (h1.classList.contains("intro-h1")) {
                h1.style.color = "white";
            }
            else {
                h1.style.color = "black";
            }
        });

        ps.forEach((p) => {
            if (p.classList.contains("p_table")) {
                p.style.color = "white";
            }else {
                p.style.removeProperty("color")
            }
        });

        bs.forEach((b) => {
            b.style.color = "black";
        });
    }
});

 




//  ! ===============================================


let content_list = document.getElementsByClassName("content-list-container")[0];
let ul = content_list.lastElementChild;
let lis = Array.from(ul.children);


lis.forEach((li) => {
    li.addEventListener("click" , () => {
        li.firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
        lis.forEach(innerLi => {
            if (innerLi !== li) {
                innerLi.firstElementChild.style.borderLeftColor = "rgb(0,0,0)"
            }
        })
    })
});




// ! scroll event
// addEventListener("scroll" , () => {
//    if (window.scrollY < 650) {
//         lis[0].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[1].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 650 && window.scrollY < 2530) {
//         lis[0].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[1].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[2].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 2530 && window.scrollY < 3500) {
//         lis[1].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[2].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[3].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 3500 && window.scrollY < 5500) {
//         lis[2].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[3].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[4].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//      else if (window.scrollY > 5500 && window.scrollY < 5800) {
//         lis[3].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[4].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[5].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 5800 && window.scrollY < 7300) {
//         lis[4].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[5].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[6].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 7300 && window.scrollY < 8250) {
//         lis[5].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[6].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[7].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 8250 && window.scrollY < 8650) {
//         lis[6].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[7].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[8].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
//     else if (window.scrollY > 8650 && window.scrollY < 8800) {
//         lis[7].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//         lis[8].firstElementChild.style.borderLeftColor = "rgb(255, 255, 255)";
//         lis[0].firstElementChild.style.borderLeftColor = "rgb(0,0,0)";
//     }
// });


// 2530 history
// 3500 html
// 5500 most
// 5860 inline
// 7300 pros
// 8250 communication
// 8600 conclusion


