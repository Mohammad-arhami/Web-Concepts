
const themBtn = document.querySelector(".themBtn");
const themImg = themBtn.firstElementChild;
const span = themBtn.lastElementChild;
const spans = document.querySelectorAll("span");
const h1s = document.querySelectorAll("h1");
const ps = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const as = document.querySelectorAll("a");
const bs = document.querySelectorAll("b");

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

        spans.forEach((span) => {
            if (!span.classList.contains("specific")) {
                span.style.color = "white";
            }
        });


        bs.forEach((b) => {
            if (!b.classList.contains("specific")) {
                b.style.color = "white";
            }
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

        spans.forEach((span) => {
            if (!span.classList.contains("specific")) {
                span.style.color = "black";
            }
        });

        bs.forEach((b) => {
            b.style.color = "black";
        });


    }
});




const appair = document.getElementById("appair")

window.addEventListener("scroll" , () => {
    if (window.scrollY > 380) {
        appair.style.opacity = "1"
    }
})

window.addEventListener("scroll" , () => {
    if (window.scrollY < 350) {
        appair.style.opacity = "0"
    }
})



// ! =========================================================

const costom_ul = document.getElementsByClassName("costom-ul")[0];
const costom_lis = Array.from(costom_ul.children);
const content_container = document.getElementsByClassName("content-container-chapter3")[0];
const contents = Array.from(content_container.children);



function contentChanger(contents , index) {
    contents.forEach((content) => {
        if (content.classList.contains(`content-li${index + 1}`)) {
            content.style.opacity = "1";
        }else{
            content.style.opacity = "0";
        }
    })
}



costom_lis.forEach((li , index) => {
    li.addEventListener("click", () => {
        li.style.backgroundColor = "black";
        li.style.color = "rgb(245, 245, 245)";
        li.style.borderBottomRightRadius= "30%";

        costom_lis.forEach((otherLI) => {
            if ( otherLI !== li) {
                otherLI.style.color = "black";
                otherLI.style.backgroundColor = "rgb(245, 245, 245)";
                otherLI.style.borderBottomRightRadius= "10px";
            }
        });

        
        if (index == 0) {
            // contents.forEach((content) => {
            //     if (content.classList.contains("content-li1")) {
            //         content.style.display = "flex";
            //         content.style.opacity = "1";
            //     }else{
            //         content.style.display = "none";
            //         content.style.opacity = "0";
            //     }
            // })

            contentChanger(contents , index);
        }

        if (index == 1) {
            // contents.forEach((content) => {
            //     if (content.classList.contains("content-li2")) {
            //         content.style.display = "flex";
            //         content.style.opacity = "1";
            //     }else{
            //         content.style.display = "none";
            //         content.style.opacity = "0";
            //     }
            // })

            contentChanger(contents , index);
        }

        if (index == 2) {
            // contents.forEach((content) => {
            //     if (content.classList.contains("content-li3")) {
            //         content.style.display = "flex";
            //         content.style.opacity = "1";
            //     }else{
            //         content.style.display = "none";
            //         content.style.opacity = "0";
            //     }
            // })

            contentChanger(contents , index);
        }

        if (index == 3) {
            // contents.forEach((content) => {
            //     if (content.classList.contains("content-li4")) {
            //         content.style.display = "flex";
            //         content.style.opacity = "1";
            //     }else{
            //         content.style.display = "none";
            //         content.style.opacity = "0";
            //     }
            // })

            contentChanger(contents , index);
        }
    })
})
