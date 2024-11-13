var array = [
    {
        cardname: "Hair spa and style",
        price: "Rs899",
        duration: "60min",
        discription: "saurabh shinde",
        Servicesimg: ""
    },
    {
        cardname: "Hair spa and style",
        price: "Rs899",
        duration: "60 min",
        discription: "",
        Servicesimg: ""
    },
    {
        cardname: "Hair spa and style",
        price: "Rs899",
        duration: "60 min",
        discription: "",
        Servicesimg: ""
    },
    
];

let result = document.getElementById("card-container");
console.log(result);

array.forEach( (arr) => {

    
    var Services = document.createElement("div");
    Services.className ="Services";
    result.appendChild(Services);

    var information = document.createElement("div");
    information.className = "information";
    Services.appendChild(information);

    var up = document.createElement("div");
    up.className = "up";
    information.appendChild(up);

    var cardname = document.createElement("h4");
    cardname.textContent = arr.cardname;
    up.appendChild(cardname);

   
    

    var maininfo = document.createElement("div");
    maininfo.className = "maininfo";
    up.appendChild(maininfo);

    

    var price = document.createElement("div");
    price.className = "Price";
    price.innerHTML = arr.price + "<s>Rs.549</s>";
    maininfo.appendChild(price);

    

    var duration = document.createElement("div");
    duration.className = "duration";
    duration.innerHTML = arr.duration;
    maininfo.appendChild(duration);

    var down = document.createElement("div");
    down.className = "down";
    information.appendChild(down);

    

    var discription = document.createElement("p");
    discription.className = "discription";
    discription.textContent = arr.discription;
    down.appendChild(discription);

    var Servicesinfo = document.createElement("div");
    Servicesinfo.className = "Servicesinfo";
    maininfo.appendChild(Servicesinfo);

    var Servicesimg = document.createElement("div");
    Servicesimg.className = "Servicesimg";
    Services.appendChild(Servicesimg);

    var image = document.createElement("img");
    image.src = arr.Servicesimg;
    Servicesimg.appendChild(image);

    
});