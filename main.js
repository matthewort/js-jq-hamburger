// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!
// PriiiIIIIIIIIima di far tutto ciò, guardatevi bene e fatevi una bella panoramica sulla documentazione della libreria.


// $("div .hamburger-menu").click(function() {
//   $(".hamburger-menu").show();
// }
// );

$(".hamburger-menu").hide();
var aperto = false;

$("i").click(function() {
  if(aperto === false) {
  $(".hamburger-menu").show();
  aperto = true;
} else {
  $(".hamburger-menu").hide();
  aperto = false;
}
});
