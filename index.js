/*1. V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.*/
const padlOrel = Math.random() < 0.5

/*2. Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.*/
const result = document.querySelector(".vysledek")

/*3. Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.*/

/*4. Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.*/
const coin = document.querySelector(".mince")

if (padlOrel) {
    result.textContent = "Padl orel";
    coin.classList.add("mince--orel")
  } else {
    result.textContent = "Padla panna";
    coin.classList.add("mince--panna");
  }

/*5. Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.*/