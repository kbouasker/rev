var config = {
    apiKey: "AIzaSyBSpkD3obqfsvuQ8B0QcfdP-xx0E3INr3Y",
    authDomain: "rev-estate.firebaseapp.com",
    databaseURL: "https://rev-estate.firebaseio.com",
    projectId: "rev-estate",
    storageBucket: "rev-estate.appspot.com",
    messagingSenderId: "234438509168"
  };
  firebase.initializeApp(config);

document.getElementById('fourInformation').addEventListener('submit' , getInformation);

function getValue(id){
    return document.getElementById(id).value;
}

function getInformation(e) {
    e.preventDefault()

    var name = getValue('name');
    var location = getValue('location');
    var image = getValue('image');
    senddata(name,location,image);

    document.getElementById('fourInformation').reset();

}

var table = firebase.database().ref('fournisseur');

function senddata(name,location,image)
{


    var information = table.push();

    information.set({
        nom : name,
        location:location,
        image:image
    });
}