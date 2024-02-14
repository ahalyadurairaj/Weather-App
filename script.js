"use strict"


var  input = document.getElementById('input_box');
var icon = document.getElementById('icon');
var container =  document.querySelector(".container");
var celcius = document.getElementById('cel');
var city_name = document.getElementById('city_name');
var wind_speed = document.getElementById('wind');
var icon = document.getElementById("icon");
var humidity = document.getElementById("humidity");
var humi = document.getElementById('humi');
var win = document.getElementById('win');
var bdy = document.getElementById('bdy');
var span = document.getElementById("spn");
var span1 = document.getElementById("spn1");
var span2 = document.getElementById("spn2");
var bgcolor = document.getElementById('humty');
var wi_sp = document.getElementById('wind_speed')

var  apikey = "1ac41d822f470089588e62f6ac6cbdce";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var temp_val;
var city;
var windspeed; // span1.style.backgroundColor ='black';
var icon1;
var humidity_number;
icon.addEventListener('click',()=>{
    if(input.value)
    {
        checkWeather(input.value);
        console.log("welcome");
        input.value ="";
       

       console.log(span);
    }
    
    
})


function checkWeather(city)
    {
        fetch(apiurl+`&appid=${apikey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
                 
                 temp_val=data.main.temp;
                 city=data.name;
                 windspeed = data.wind.speed;
                 humidity_number= data.main.humidity;
                 celcius.innerText=temp_val;
                 city_name.innerText=city;
                 wind_speed.innerText = windspeed;
                 humidity.innerText = humidity_number;
                // icon1.innerHTML="icon";
                
                console.log(temp_val);
                // console.log("cityname="+city);
                 celcius_fun();
            
       
        })
    }



   
    function celcius_fun(){
        if(temp_val>26){
            console.log("hi");
            container.classList.add('background_img1');
            container.classList.remove('background_img2');
            container.classList.remove('background_img3');
            icon.style.color="black";
            celcius.style.color="black";
            city_name.style.color="black";
            humidity.style.color="black"
            wind_speed.style.color="black";
            humi.style.color="black";
            win.style.color="black";
            span.style.color = "black";
            span1.style.color = "black";
            span2.style.color = "black";
            bgcolor.classList.remove('cls');
            wi_sp.classList.remove('cls');
            
        }
        else if(temp_val>20 && temp_val<25){
            console.log("complite");
            container.classList.remove('background_img1');
            container.classList.add('background_img2')
            container.classList.remove('background_img3');
            bgcolor.classList.remove('cls');
            wi_sp.classList.remove('cls');
        }
        else if(temp_val<20){
            console.log("helo");
            container.classList.remove('background_img1');
            container.classList.remove('background_img2')
            container.classList.add('background_img3');
            icon.style.color="white";
            celcius.style.color="white";
            city_name.style.color="white";
            humidity.style.color="white"
            wind_speed.style.color="white";
            humi.style.color="white";
            win.style.color="white";
            span.style.color = "white";
            span1.style.color = "white";
            span2.style.color = "white";
            bgcolor.classList.add('cls');
            wi_sp.classList.add('cls')


        }
    }