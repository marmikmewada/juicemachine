// const firstfruit = apple;
// const secondfruit = orange;
// const cutpieces = (fruitname) => {
//     return fruitname * 4;
// }

// const machine = (noofapples, nooforanges) => {
//     const fruitonenoofpieces = cutpieces(noofapples);
//     const fruittwonoofpieces = cutpieces(nooforanges);

//     const juice = `juice of ${fruitonenoofpieces} pieces of ${firstfruit} and ${fruittwonoofpieces} of ${secondfruit} for you`

//     return juice;
// }

// console.log(machine(5,2));
// putting elements into variables below
    // first page 
const firstpage = document.querySelector(".firstpage");
    // second page 
const secondpage = document.querySelector(".secondpage");
    // third page 
const thirdpage = document.querySelector(".thirdpage");
    // fourth page 
const fourthpage = document.querySelector(".fourthpage");
    // fifth page 
const fifthpage = document.querySelector(".fifthpage");
        // first next button 
const firstnextbutton = document.querySelector(".firstnextbutton")
        // second next button 
const secondnextbutton = document.querySelector(".secondnextbutton");
            // first submit button 
const firstsubmitbutton = document.querySelector(".firstsubmitbutton");
            // second submit button 
const secondsubmitbutton = document.querySelector(".secondsubmitbutton");

// utility 
secondpage.classList.add("hidden");
firstpage.classList.remove("hidden");
thirdpage.classList.add("hidden");
fourthpage.classList.add("hidden");
fifthpage.classList.add("hidden");

// functions  below 

const firstnextbuttonfunction = () => {
    secondpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
    thirdpage.classList.add("hidden");
    fourthpage.classList.add("hidden");
    fifthpage.classList.add("hidden");
}

const firstsubmitbuttonfunction = () => {
    thirdpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
    secondpage.classList.add("hidden");
    fourthpage.classList.add("hidden");
    fifthpage.classList.add("hidden");

}

const secondnextbuttonfunction = () => {
    fourthpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
    thirdpage.classList.add("hidden");
    secondpage.classList.add("hidden");
    fifthpage.classList.add("hidden");

}

const secondsubmitbuttonfunction = () => {
    firstpage.classList.add("hidden");
    secondpage.classList.add("hidden");
    thirdpage.classList.add("hidden");
    fourthpage.classList.add("hidden");
    fifthpage.classList.remove("hidden");   

}




