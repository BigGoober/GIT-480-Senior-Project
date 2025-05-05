$("#dropdown-icon").on("click", function(){
    $("#dropdown-icon").toggleClass("change");
    $("#top-nav").toggleClass("hidden");
    $("#bottom-nav-disc").addClass("hidden");
    $("#bottom-nav-work").addClass("hidden");
    $("#bottom-nav-live").addClass("hidden");
    $("#bottom-nav-gov").addClass("hidden");
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
        let cityImgArrayMobile = [pictures[25].image, pictures[26].image, pictures[27].image, pictures[28].image, pictures[29].image];
        let desertImgArray = [pictures[0].image, pictures[1].image, pictures[2].image, pictures[3].image, pictures[4].image];
        let desertImgArrayMobile = [pictures[20].image, pictures[21].image, pictures[22].image, pictures[23].image, pictures[24].image];
        let govImgArray = [pictures[15].image, pictures[16].image, pictures[17].image, pictures[18].image, pictures[19].image];
        let govImgArrayMobile = [pictures[35].image, pictures[36].image, pictures[37].image, pictures[38].image, pictures[39].image];
        let liveImgArray = [pictures[10].image, pictures[11].image, pictures[12].image, pictures[13].image, pictures[14].image];
        let liveImgArrayMobile = [pictures[30].image, pictures[31].image, pictures[32].image, pictures[33].image, pictures[34].image];


        $("#desert-pic").html(`
        <div><img src="${desertImgArray[0]}"></div>
        <div><img src="${desertImgArray[1]}"></div>
        <div><img src="${desertImgArray[2]}"></div>
        <div><img src="AZ-Pictures/AZ-Desert-4.jpg"></div>
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

    var screenWidth = window.matchMedia("(max-width: 320px)")

    screenWidth.addEventListener("change", function(screenWidth){
        if(screenWidth.matches){
            if(screenWidth.matches){
                $("#top-nav").addClass("hidden");
                $("#bottom-nav-disc").addClass("hidden");
                // $("#desert-pic").remove();
                // $("#city-pic").remove();
                // $("#gov-pic").remove();
                // $("#live-pic").remove();

                $("#desert-pic").html(`
                <div><img src="${desertImgArrayMobile[0]}"></div>
                `)

                // <div><img src="${desertImgArrayMobile[1]}"></div>
                // <div><img src="${desertImgArrayMobile[2]}"></div>
                // <div><img src="${desertImgArrayMobile[3]}"></div>
                // <div><img src="${desertImgArrayMobile[4]}"></div>

                $("#city-pic").html(`
                <div><img src="AZ-Pictures/AZ-City-2-mobile.jpg"></div>
                `)

                // <div><img src="${cityImgArrayMobile[1]}"></div>
                // <div><img src="${cityImgArrayMobile[2]}"></div>
                // <div><img src="${cityImgArrayMobile[3]}"></div>
                // <div><img src="${cityImgArrayMobile[4]}"></div>

                $("#gov-pic").html(`
                <div><img src="${govImgArrayMobile[0]}"></div>
                `)

                // <div><img src="${govImgArrayMobile[1]}"></div>
                // <div><img src="${govImgArrayMobile[2]}"></div>
                // <div><img src="${govImgArrayMobile[3]}"></div>
                // <div><img src="${govImgArrayMobile[4]}"></div>

                $("#live-pic").html(`
                <div><img src="${liveImgArrayMobile[2]}"></div>
                `)

                // <div><img src="${liveImgArrayMobile[1]}"></div>
                // <div><img src="${liveImgArrayMobile[2]}"></div>
                // <div><img src="${liveImgArrayMobile[3]}"></div>
                // <div><img src="${liveImgArrayMobile[4]}"></div>
            }else{
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
            }
        }
    });

    if(localStorage.getItem("displayMode") == "dark"){
        $("body").addClass("dark");
        $("top-nav").addClass("dark");
    }else{
        $("body").removeClass("dark");
    }

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

    $("#gov-div").accordion({
        collapsible: true,
        active: false
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

