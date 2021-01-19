const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".container ul");
const item = document.querySelectorAll(".slide-item");

let counter = 0;

document.querySelectorAll(".container li").forEach((indicator, ind)=>{
    indicator.addEventListener("click", ()=>{
        counter = ind;
        document.querySelector(".container .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translate(" + (counter) * -20 +"%";
    });
});

rightArrow.addEventListener("click", ()=>{
    counter = (counter < 4) ? counter + 1 : 4;
    document.querySelector(".container .selected").classList.remove("selected");
    indicatorParents.children[counter].classList.add("selected");
    slider.style.transform = "translate(" + (counter) * -20 +"%";
});
leftArrow.addEventListener("click", ()=>{
    counter = (counter > 0) ? counter - 1 : 0;
    document.querySelector(".container .selected").classList.remove("selected");
    indicatorParents.children[counter].classList.add("selected");
    slider.style.transform = "translate(" + (counter) * -20 +"%";
});

slider.addEventListener("transitionend", ()=>{
    if (item[counter].id === "last"){
        rightArrow.style.transition = "0";
        rightArrow.classList.remove("arrow");
        rightArrow.classList.add("static");
    }
    else {
        rightArrow.style.transition = "0.3s ease";
        rightArrow.classList.remove("static");
        rightArrow.classList.add("arrow");
    }
});
slider.addEventListener("transitionend", ()=>{
    if (item[counter].id === "first"){
        leftArrow.style.transition = "0";
        leftArrow.classList.remove("arrow");
        leftArrow.classList.add("static");
    }
    else {
        leftArrow.style.transition = "0.3s ease";
        leftArrow.classList.remove("static");
        leftArrow.classList.add("arrow");
    }
});
