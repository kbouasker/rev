// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSpkD3obqfsvuQ8B0QcfdP-xx0E3INr3Y",
  authDomain: "rev-estate.firebaseapp.com",
  databaseURL: "https://rev-estate.firebaseio.com",
  projectId: "rev-estate",
  storageBucket: "rev-estate.appspot.com",
  messagingSenderId: "234438509168"
};
firebase.initializeApp(config);

document.getElementById('archInformation').addEventListener('submit' , getInformation);

function getValue(id){
  return document.getElementById(id).value;
}

function getInformation(e) {
  e.preventDefault()

  var name = getValue('name');
  var age = getValue('age');
  var career = getValue ('career');
  var image = getValue('image');
  senddata(name,age,career,image);

  document.getElementById('archInformation').reset();

}

var table = firebase.database().ref('architect');

function senddata(name,age,career,image)
{

  var information = table.push();

  information.set({
      nom : name,
      age : age,
      carrière: career ,
      image:image
  });
}
