$("#dropdown-icon").on("click", function(){
    $("#dropdown-icon").classList.toggle("change");
});

// function displayPics(data){

// }

var screenWidth = window.matchMedia("(max-width: 320px)")

function mediaQuery(screenWidth){
    if(screenWidth.matches){
        $("#top-nav").addClass("hidden");
    }
}

$("#moon").on("click", function(){
    var all = document.getElementsByTagName("*");
    all.classList.toggle("dark");

    if($("#moon").classList.contains("dark")){
        localStorage.setItem("displayMode", "dark");
    }else{
        localStorage.setItem("displayMode", "light");
    }
});

$(function(){
    let pictures = [];

    if(localStorage.getItem("displayMode") == "dark"){
        document.getElementsByTagName("*").classList.add("dark");
    }

    $.ajax({
        url:"pictures.json",
        method: "GET",
        datatype: "json"
    }).done(function(data){
        pictures = data
        console.log(pictures)
        let cityImgArray = [pictures[5], pictures[6], pictures[7], pictures[8], pictures[9]];
    let desertImgArray = [pictures[0], pictures[1], pictures[2], pictures[3], pictures[4]];
    let govImgArray = [pictures[15], pictures[16], pictures[17], pictures[18], pictures[19]];
    let liveImgArray = [pictures[10], pictures[11], pictures[12], pictures[13], pictures[14]];


    $("#desert-pic").html(`
    <div><img src="${desertImgArray[0]}"></div>
    <div><img src="${desertImgArray[1]}"></div>
    <div><img src="${desertImgArray[2]}"></div>
    <div><img src="${desertImgArray[3]}"></div>
    <div><img src="${desertImgArray[4]}"></div>
    `)

    $("#city-pic").html(`
    <div><img src="${cityImgArray[0]}"></div>
    <div><img src="${cityImgArray[1]}"></div>
    <div><img src="${cityImgArray[2]}"></div>
    <div><img src="${cityImgArray[3]}"></div>
    <div><img src="${cityImgArray[4]}"></div>
    `)

    $("#gov-pic").html(`
    <div><img src="${govImgArray[0]}"></div>
    <div><img src="${govImgArray[1]}"></div>
    <div><img src="${govImgArray[2]}"></div>
    <div><img src="${govImgArray[3]}"></div>
    <div><img src="${govImgArray[4]}"></div>
    `)

    $("#live-pic").html(`
    <div><img src="${liveImgArray[0]}"></div>
    <div><img src="${liveImgArray[1]}"></div>
    <div><img src="${liveImgArray[2]}"></div>
    <div><img src="${liveImgArray[3]}"></div>
    <div><img src="${liveImgArray[4]}"></div>
    `)
    }).fail(function(){
        console.log("an error has occured");
    });

    
});

$("#gov-div").accordion();

$('#desert-pic').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

// document.getElementById("contact-submit").addEventListener("click", function(event){
//     event.preventDefault();
//     let isValid = true;
//     let name = document.getElementById("name");
//     let phone = document.getElementById("phone");
//     let email = document.getElementById("email");
//     let formErrors = document.getElementById("formErrors");
//     let ul = document.createElement("ul");
    
//     formErrors.innerHTML = "";
//     formErrors.classList.add("hidden");
//     name.classList.remove("error");
//     email.classList.remove("error");
//     phone.classList.remove("error");

//     if(name.value.length <= 1){
//         name.classList.add("error");
//         formErrors.classList.remove("hidden");
//         isValid = false;

//         let li = document.createElement("li");
//         let text = document.createTextNode("Missing full name.");
//         ul.appendChild(li);
//         li.appendChild(text);
//         formErrors.appendChild(ul);
//     }

//     if(document.getElementById("email-radio").checked){
//         let emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

//         if(!emailregex.test(email.value)){
//             email.classList.add("error");
//             formErrors.classList.remove("hidden");
//             isValid = false;

//             let li = document.createElement("li");
//             let text = document.createTextNode("Invalid or missing email address.");
//             ul.appendChild(li);
//             li.appendChild(text);
//             formErrors.appendChild(ul);
//         }
//     }

//     if(document.getElementById("phone-radio").checked){
//         let phoneregex = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

//         if(!phoneregex.test(phone.value)){
//             phone.classList.add("error");
//             formErrors.classList.remove("hidden");
//             isValid = false;

//             let li = document.createElement("li");
//             let text = document.createTextNode("Invalid or missing phone number.");
//             ul.appendChild(li);
//             li.appendChild(text);
//             formErrors.appendChild(ul);
//         }
//     }
// });

