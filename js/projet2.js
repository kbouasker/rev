var text = ["des lots", "des architectes", "des fournisseurs"];
var counter = 0;
var textToChange = $("#to-change");
var inst = setInterval(change, 1500);

function change() {
  textToChange.text(text[counter]);
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
