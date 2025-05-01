$("#dropdown-icon").on("click", function(){
    $("#dropdown-icon").toggleClass("change");
});

$("#disc-a").on("click", function(){
    $("#bottom-nav-disc").toggleClass("hidden");
    $("#bottom-nav-work").addClass("hidden");
    $("#bottom-nav-live").addClass("hidden");
    $("#bottom-nav-gov").addClass("hidden");
});

$("#work-a").on("click", function(){
    $("#bottom-nav-work").toggleClass("hidden");
    $("#bottom-nav-disc").addClass("hidden");
    $("#bottom-nav-live").addClass("hidden");
    $("#bottom-nav-gov").addClass("hidden");
});

$("#live-a").on("click", function(){
    $("#bottom-nav-live").toggleClass("hidden");
    $("#bottom-nav-work").addClass("hidden");
    $("#bottom-nav-disc").addClass("hidden");
    $("#bottom-nav-gov").addClass("hidden");
});

$("#gov-a").on("click", function(){
    $("#bottom-nav-gov").toggleClass("hidden");
    $("#bottom-nav-work").addClass("hidden");
    $("#bottom-nav-live").addClass("hidden");
    $("#bottom-nav-disc").addClass("hidden");
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
    console.log("in switcher");
    $("body").toggleClass("dark");
    $("#top-nav").toggleClass("dark");
    $("#top-nav button").toggleClass("dark");
    $("#top-nav a").toggleClass("dark");
    $("#discover-opt img, #work-opt img, #live-opt img").toggleClass("dark");
    $("#moon").toggleClass("dark");

    if($("body").hasClass("dark")){
        localStorage.setItem("displayMode", "dark");
    }else{
        localStorage.setItem("displayMode", "light");
    }
});

$(function(){
    let pictures = [];

    if(localStorage.getItem("displayMode") == "dark"){
        $("body").addClass("dark");
        $("#top-nav").addClass("dark");
        $("#top-nav button").addClass("dark");
        $("#top-nav a").addClass("dark");
        $("#discover-opt img, #work-opt img, #live-opt img").addClass("dark");
        $("#moon").addClass("dark");
    }

    $.ajax({
        url:"pictures.json",
        method: "GET",
        datatype: "json"
    }).done(function(data){
        pictures = data
        console.log(pictures)
        let cityImgArray = [pictures[5].image, pictures[6].image, pictures[7].image, pictures[8].image, pictures[9].image];
        let desertImgArray = [pictures[0].image, pictures[1].image, pictures[2].image, pictures[3].image, pictures[4].image];
        let govImgArray = [pictures[15].image, pictures[16].image, pictures[17].image, pictures[18].image, pictures[19].image];
        let liveImgArray = [pictures[10].image, pictures[11].image, pictures[12].image, pictures[13].image, pictures[14].image];


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

    if(localStorage.getItem("displayMode") == "dark"){
        $("body").addClass("dark");
        $("top-nav").addClass("dark");
    }else{
        $("body").removeClass("dark");
    }

    $("#gov-div").accordion({
        collapsible: true,
        active: false
    });

$('#desert-pic, #city-pic, #live-pic, #gov-pic').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false
});
    }).fail(function(){
        console.log("an error has occured");
    });
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

