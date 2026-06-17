const pictureOfTheDay = 'https://api.nasa.gov/planetary/apod?date=2026-03-03&api_key=grnNCKtllvQRp91uYagxPZQWbXSkVdOzITeEILCZ'
const weatherMars = 'https://api.nasa.gov/insight_weather/?api_key=grnNCKtllvQRp91uYagxPZQWbXSkVdOzITeEILCZ&feedtype=json&ver=1.0'
var explanation = "NASA's InSight lander was built on the proven design of NASA's Mars Phoenix lander. InSight's robotic arm was over 5 feet 9 inches (1.8 meters) long. It lifted a seismometer and heat flow probe from the deck and placed them on the surface. The camera on the arm provided color 3D views of the landing site, instrument placement, and activities. Sensors measured weather and magnetic field variations.";

var high675;
var low675;

var high676;
var low676;

var high677;
var low677;

var high678;
var low678;

var high679;
var low679;

var high680;
var low680;

var high681;
var low681;

fetch(pictureOfTheDay)
    .then(response => {
    if (!response.ok) {
       throw new Error('Error occurred')
    }
    return response.json();
    })
    .then(data => {
        console.log(data)
        document.getElementById('video').src = data.url;

    })
.catch(error => {
    console.log('Error', error);
})

fetch(weatherMars)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error occurred')
        }
        return response.json();
    })
    .then(data => {
        console.log(data)

        high675 = data[675].AT.mx;
        low675 = data[675].AT.mn;

        high676 = data[676].AT.mx;
        low676 = data[676].AT.mn;

        high677 = data[677].AT.mx;
        low677 = data[677].AT.mn;

        high678 = data[678].AT.mx;
        low678 = data[678].AT.mn;

        high679 = data[679].AT.mx;
        low679 = data[679].AT.mn;

        high680 = data[680].AT.mx;
        low680 = data[680].AT.mn;

        high681 = data[681].AT.mx;
        low681 = data[681].AT.mn;

        document.getElementById('head675').innerHTML += data.sol_keys[0];
        document.getElementById('high675').innerHTML += Math.round(high675) + "° F";
        document.getElementById('low675').innerHTML += Math.round(low675) + "° F";

        document.getElementById('head676').innerHTML += data.sol_keys[1];
        document.getElementById('high676').innerHTML += Math.round(high676) + "° F";
        document.getElementById('low676').innerHTML += Math.round(low676) + "° F";

        document.getElementById('head677').innerHTML += data.sol_keys[2];
        document.getElementById('high677').innerHTML += Math.round(high677) + "° F";
        document.getElementById('low677').innerHTML += Math.round(low677) + "° F";

        document.getElementById('head678').innerHTML += data.sol_keys[3];
        document.getElementById('high678').innerHTML += Math.round(high678) + "° F";
        document.getElementById('low678').innerHTML += Math.round(low678) + "° F";

        document.getElementById('head679').innerHTML += data.sol_keys[4];
        document.getElementById('high679').innerHTML += Math.round(high679) + "° F";
        document.getElementById('low679').innerHTML += Math.round(low679) + "° F";

        document.getElementById('head680').innerHTML += data.sol_keys[5];
        document.getElementById('high680').innerHTML += Math.round(high680) + "° F";
        document.getElementById('low680').innerHTML += Math.round(low680) + "° F";

        document.getElementById('head681').innerHTML += data.sol_keys[6];
        document.getElementById('high681').innerHTML += Math.round(high681) + "° F";
        document.getElementById('low681').innerHTML += Math.round(low681) + "° F";
    })

function videoStart() {
    document.getElementById('marsInfo').style.opacity = 0.7;
    document.getElementById('marsInfo').style.height = '300px';
    document.getElementById('explanationMars').style.opacity = 1;
}

function videoTransistion() {
    var video = document.getElementById('video');

    // Video current time : 6.5
    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= 6.5) {
            document.getElementById('marsInfo').style.opacity = 1;
            document.getElementById('marsInfo').style.height = '100%';
            document.getElementById('explanationMars').style.opacity = 0;
            document.getElementById('explanationMars').style.transition = 'ease-out 0.4s';
            document.getElementById('explanationMars').style.marginLeft = '40px';
        }
    })

    // Video current time : 8.4
    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= 8.4) {
            document.getElementById('explanationMars').textContent = explanation;
            document.getElementById('explanationMars').style.opacity = 1;
            document.getElementById('explanationMars').style.transition = 'all 0.4s';
            document.getElementById('marsInfo').style.justifyContent = 'start';
            document.getElementById('h2Header').style.marginLeft = '40px';
            document.getElementById('h2Header').style.transition = 'ease-in 0.4s';

            document.getElementById('landerTechSpecs').style.opacity = 1;
            document.getElementById('landerTechSpecs').style.transition = 'ease-in 0.4s';
            document.getElementById('InSightSpecs').style.opacity = 1;
            document.getElementById('InSightSpecs').style.transition = 'ease-in 0.4s';
            document.getElementById('InSightMore').style.opacity = 1;
            document.getElementById('InSightMore').style.transition = 'ease-in 0.4s';
        }
    })
}

function videoEnded() {
    document.getElementById('marsInfo').style.position = 'relative';
    document.getElementById('video').hidden = true;
    document.getElementById('containerInfo').style.height = '100vh';
    document.getElementById('marsInfo').style.height = 'fit-content';
    document.getElementById('marsInfo').style.transition = 'none';
    document.getElementById('marsInfo').style.height = '100vh';
    document.getElementById('weatherElysium').style.visibility = 'visible';

}