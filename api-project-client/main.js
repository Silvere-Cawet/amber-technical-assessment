// Initializing API url
const api_url = "http://localhost:8080/user";

// Sending HTTP request
async function getData() {
    // fetch(api_url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    const response = await fetch(api_url);
    console.log(response);
    // JSON Parser
    const userData = await response.json();

    return userData;
}
// getData();


// Parsing data through the HTML DOM

document.addEventListener("DOMContentLoaded", async () => {
    
    let user_data = [];

    try {
        user_data = await getData();
    } catch (err) {
        console.log('Error!', err);
    }
    console.log(user_data);
    
    // Profile Picture
    var image = document.getElementById('profile-pic');
    image.src = user_data.results[0].picture.large;

    // Full Name
    const full_name = user_data.results[0].name.first + " " + user_data.results[0].name.last;
    document.getElementById('name').innerHTML = full_name;

    // First Name
    document.getElementById('first-name').innerHTML = user_data.results[0].name.first;
    document.getElementById('last-name').innerHTML = user_data.results[0].name.last;

    // Gender
    document.getElementById('gender').innerHTML = user_data.results[0].gender;

    // Title
    document.getElementById('title').innerHTML = user_data.results[0].name.title;

    // DoB
    document.getElementById('dob-date').innerHTML = user_data.results[0].dob.date;
    document.getElementById('dob-age').innerHTML = user_data.results[0].dob.age;

    // Nationality
    document.getElementById('nat').innerHTML = user_data.results[0].nat;

    // Identity
    document.getElementById('id-name').innerHTML = user_data.results[0].id.name;
    document.getElementById('id-number').innerHTML = user_data.results[0].id.value;

    // Email
    document.getElementById('email').innerHTML = user_data.results[0].email;
    // Phone
    document.getElementById('phone').innerHTML = user_data.results[0].phone;
    // Phone
    document.getElementById('cell').innerHTML = user_data.results[0].cell;

    // Location
    // Street
    document.getElementById('street-number').innerHTML = user_data.results[0].location.street.number;
    document.getElementById('street-name').innerHTML = user_data.results[0].location.street.name;
    // Region
    document.getElementById('city').innerHTML = user_data.results[0].location.city;
    document.getElementById('state').innerHTML = user_data.results[0].location.state;
    document.getElementById('country').innerHTML = user_data.results[0].location.country;
    document.getElementById('postcode').innerHTML = user_data.results[0].location.postcode;
    // Coordinates
    const lat = user_data.results[0].location.coordinates.latitude;
    const lng = user_data.results[0].location.coordinates.longitude;
    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('longitude').innerHTML = lng;
    // Timezone
    document.getElementById('offset').innerHTML = user_data.results[0].location.timezone.offset;
    document.getElementById('description').innerHTML = user_data.results[0].location.timezone.description;

    // login
    document.getElementById('uuid').innerHTML = user_data.results[0].login.uuid;
    document.getElementById('username').innerHTML = user_data.results[0].login.username;
    document.getElementById('password').innerHTML = user_data.results[0].login.password;
    document.getElementById('salt').innerHTML = user_data.results[0].login.salt;
    document.getElementById('md-5').innerHTML = user_data.results[0].login.md5;
    document.getElementById('sha-1').innerHTML = user_data.results[0].login.sha1;
    document.getElementById('sha-256').innerHTML = user_data.results[0].login.sha256;

    // Registered
    document.getElementById('reg-date').innerHTML = user_data.results[0].registered.date;
    document.getElementById('reg-age').innerHTML = "(" + user_data.results[0].registered.age + " Years ago" + ")";

    // Map Handler
    function loadMap() {
        var mapProp= {
            center:new google.maps.LatLng(lat, lng),
            zoom:3,
        };
        var map = new google.maps.Map(document.getElementById("Map"),mapProp);
        var marker = new google.maps.Marker({position: mapProp.center});
        marker.setMap(map);
        return map;
    }
    loadMap();

    // Info (at the end)
    document.getElementById('seed').innerHTML = "Seed: " + user_data.info.seed;
    document.getElementById('results').innerHTML = "Results: " + user_data.info.results;
    document.getElementById('page').innerHTML = "Page: " + user_data.info.page;
    document.getElementById('version').innerHTML = "Version: " + user_data.info.version;
});
