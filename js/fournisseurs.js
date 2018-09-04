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

  
var fournisseur = firebase.database().ref('fournisseur');
jibli();

function jibli(){
    fournisseur.once('value').then(function(snapshot){
		snapshot.forEach(afra7bih);
	})

}

function afra7bih(singlesnapshot){
	var fournisseur = singlesnapshot.val();
	$("#list-fournisseurs").append(`
    <div class="card1">
      <img src="${fournisseur.image}" alt="Avatar" style="width:30%">
      <div class="container">
        <h4><b>${fournisseur.nom}</b></h4> 
        <p>${fournisseur.location}</p> 
      </div>
    </div>
    `)

}