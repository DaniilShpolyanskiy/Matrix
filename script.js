const t = [
  "\n",
  "My name is Daniel\n",
  "You live in illusion\n",
  "\n",
  "\n",
  "WAKE UP!!!",
];

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    typeText();
  }
});

function typeText() {
   let line = 0 
   let count = 0 
   let out = ''
   let htmlOut = document.querySelector('.out')

   function typeLine() {
      let interval = setTimeout(function () {
         out += t[line][count]
         htmlOut.innerHTML = out + '|'
         count++

         if (count >= t[line].length) {
            count = 0
            line++
            if (line == t.length) {
               clearTimeout(interval)
               htmlOut.innerHTML = out;
               return true
            }
         }
         typeLine()
      }, getRandomInt(300))
   }
   typeLine()
}

function getRandomInt(max) {
   return Math.floor(Math.random()*Math.floor(max))
}
typeText()