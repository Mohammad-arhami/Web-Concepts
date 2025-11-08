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




























// themBtn.addEventListener("click" , () => {
//     if ( themIcon.classList.contains("fa") ) {
//         themIcon.classList.remove("fa");
//         themIcon.classList.replace("fa-moon-o" , "material-icons");
//         themIcon.innerHTML = "wb_sunny";
//         span.innerHTML = "Light Mode";
//         document.body.style.backgroundColor = "black";
//         h1_title.style.cssText = " background-image: url(../HTML-Images_file/Pure-White-full-2.jpg);";

//         h1s.forEach((h1) => {
//             h1.style.color = "white";
//         });

//         ps.forEach((p) => {
//             if (p.parentElement.classList.contains("specific_p")) {
//                 p.style.cssText = "color : black";
//             }
//             else if(p.classList.contains("p_table") || p.classList.contains("intro-p")){
//                 p.style.color = "white";
//             }
//             if(!p.parentElement.classList.contains("specific_p") && !p.classList.contains("p_table") && !p.classList.contains("intro-p")){
//                 p.style.color = "rgb(211, 211, 211)";
//             }
//         });

//         bs.forEach((b) => {
//             b.style.color = "rgb(255, 255, 255)";
//         });

//     } else{
//         themIcon.classList.add("fa");
//         themIcon.classList.replace("material-icons" , "fa-moon-o");
//         themIcon.innerHTML = "";
//         span.innerHTML = "Dark Mode";
//         document.body.style.backgroundColor = "white";
//         h1_title.style.cssText = " background-image: url(../HTML-Images_file/History.png);";


//         h1s.forEach((h1) => {
//             if (h1.classList.contains("h1_table")) {
//                 h1.style.color = "white";
//             }
//             else if (h1.classList.contains("intro-h1")) {
//                 h1.style.color = "white";
//             }
//             else {
//                 h1.style.color = "black";
//             }
//         });

//         ps.forEach((p) => {
//             if (p.classList.contains("p_table")) {
//                 p.style.color = "white";
//             }else {
//                 p.style.removeProperty("color")
//             }
//         });

//         bs.forEach((b) => {
//             b.style.color = "black";
//         });
//     }
// });










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



