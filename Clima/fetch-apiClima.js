//Librerias
//const express = require('express');

//URL
const apiKey = '2e5d53d0df649d3194b51890acb2b418';
const cityID = '3435264';
const peticion = fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(( { weather, main, wind } ) => {
        let clima = {
            
            weather: {
                description: weather[0]['description']
            },

            main: {
                temp_min: main['temp_main'],
                temp_max: main['temp_max'],
                pressure: main['pressure'],
                humidity: main['humidity']
            },

            wind: {
                speed: wind['speed']
            }
        };
        
        console.log('El clima en Concepción del Uruguay es el siguiente:');
        console.log([clima]);
    })
    .catch(console.warn);