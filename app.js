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
                // selecting inputs in second and fourth page to remove value attribute when click by user 
const inputAll = document.querySelectorAll("input");
                // gettingfruitname in variable 
                const firstfruit = document.querySelector(".whichfruitone").value;
                // getting second fruit input in a variable 
                const secondfruit = document.querySelector(".whichfruittwo").value;   
                            // getting quantity of fruitone in numbers 
const firstfruitquantity = parseInt( document.querySelector(".howmanyfruitone").value);
// getting quantity of fruittwo in numbers 
const secondfruitquantity = parseInt( document.querySelector(".howmanyfruittwo").value);
                    // selecting the third page para to confirm and woww the choice of user 
const thirdpagepara = document.querySelector(".thirdpagepara");
// utility 
secondpage.classList.add("hidden");
firstpage.classList.remove("hidden");
thirdpage.classList.add("hidden");
fourthpage.classList.add("hidden");
fifthpage.classList.add("hidden");
// functions  below 

// the below function removeinput all doesnt Work 
const removeinputAll = () => {
    inputAll.removeAttribute("value");
}

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
    thirdpagepara.innerHTML = `please also enter quantity of both ${firstfruit} & ${secondfruit}.`;
    

}

const secondnextbuttonfunction = () => {
    fourthpage.classList.remove("hidden");
    firstpage.classList.add("hidden");
    thirdpage.classList.add("hidden");
    secondpage.classList.add("hidden");
    fifthpage.classList.add("hidden");

};


function secondsubmitbuttonfunction() {

    firstpage.classList.add("hidden");
    secondpage.classList.add("hidden");
    thirdpage.classList.add("hidden");
    fourthpage.classList.add("hidden");
    fifthpage.classList.remove("hidden");
    // const cutpieces = (fruitname) => {
    // return Number(fruitname * 4);
    // };


    const fruitonenoofpieces = 4 * firstfruitquantity;
    const fruittwonoofpieces = 4 * secondfruitquantity;
    const resultpara = document.querySelector(".resultpara");
    resultpara.textContent = `your juice was made with ${fruitonenoofpieces} pieces of ${firstfruit} & ${fruittwonoofpieces} pieces of ${secondfruit}`;

}


