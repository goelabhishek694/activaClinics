const DEPLOYMENT_METADATA = {
    "deploymentName": "Location map"
};
const CONFIGURATION = {
    "locations": [{
        "title": "Activa Clinics Scarborough",
        "address1": "4218 Lawrence Avenue East Unit 1414",
        "address2": "Scarborough, ON, Canada",
        "coords": {
            "lat": 43.7694288,
            "lng": -79.1841764
        },
        "placeId": "ChIJdxnkdIna1IkR-0ih8To8nnc",
        "actions": [{
            "label": "Book appointment",
            "defaultUrl": "https://activaclinics.com/booking-page/"
        }]
    }, {
        "title": "Activa Clinics - Hamilton",
        "address1": "50 Dundurn Street South Unit B8",
        "address2": "Hamilton, ON, Canada",
        "coords": {
            "lat": 43.261255,
            "lng": -79.8893696
        },
        "placeId": "ChIJE2VXkHmbLIgRTEP8v-jfNBU",
        "actions": [{
            "label": "Book appointment",
            "defaultUrl": "https://activaclinics.com/booking-page/"
        }]
    }, {
        "title": "Activa Clinics - Physiotherapist and Chiropractor in Brampton",
        "address1": "490 Bramalea Road Suite 301",
        "address2": "Brampton, ON, Canada",
        "coords": {
            "lat": 43.7238783,
            "lng": -79.7173326
        },
        "placeId": "ChIJ56avUOQ9K4gRMS1HOHTTkuQ",
        "actions": [{
            "label": "Book appointment",
            "defaultUrl": "https://activaclinics.com/booking-page/"
        }]
    }, {
        "title": "Activa Clinics",
        "address1": "370 Highland Road West",
        "address2": "Kitchener, ON, Canada",
        "coords": {
            "lat": 43.4385211,
            "lng": -80.5118504
        },
        "placeId": "ChIJQ1Zl6k30K4gRZ6DJIcx64Rw",
        "actions": [{
            "label": "Book appointment",
            "defaultUrl": "https://activaclinics.com/booking-page/"
        }]
    }, {
        "title": "Activa Clinics - Mississauga",
        "address1": "6400 Millcreek Dr #9",
        "address2": "Mississauga, ON, Canada",
        "coords": {
            "lat": 43.5886613,
            "lng": -79.7402504
        },
        "placeId": "ChIJd3iMFoBqK4gRQ3HWfPgNJc0",
        "actions": [{
            "label": "Book appointment",
            "defaultUrl": "https://activaclinics.com/booking-page/"
        }]
    }],
    "mapOptions": {
        "center": {
            "lat": 38.0,
            "lng": -100.0
        },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 4,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": ""
    },
    "mapsApiKey": "AIzaSyAGAOzdLSV0PMn55-C1_5M4EYK0dGTMzO4",
    "capabilities": {
        "input": true,
        "autocomplete": true,
        "directions": true,
        "distanceMatrix": true,
        "details": true,
        "actions": true
    }
};
