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

  
var architects = firebase.database().ref('architect');
jibli();

function jibli(){
    architects.once('value').then(function(snapshot){
		snapshot.forEach(afra7bih);
	})

}
var i = 0;

function afra7bih(singlesnapshot){
  i++;
  architect = singlesnapshot.val();
  $("#list-architects").append(`
<div class="col-md-4">
  <div class="card">
    <img src="${architect["image"]}" alt="Avatar" style="height: 250px" id="image" >
    <div class="information" >
      <h4><b>${architect["nom"]}</b></h4>
      <p>${architect["age"]}</p>
      <p>${architect["carrière"]}</p>
    </div>
  </div>
  </div>
  `)
  if(i % 3 === 0) {
    $('#list-architects').append(`<div class="row"></div>`)
  }
}
