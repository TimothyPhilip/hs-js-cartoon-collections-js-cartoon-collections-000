function dwarfRollCall(dwarves) {
  var array = []
  for (var i = dwarves.length/2; i < dwarves.length; i++){
     array.push(`${i+1}`+ ". " + dwarves[i] + " ")}
return array.join("")
}

///// function 1 complete /////

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
      planeteerCalls[i] = (planeteerCalls[i].toUpperCase() + "!");
  }
    return planeteerCalls
}

///// function 2 complete /////

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){ words = (true)}
    else{ words = (false)}
  } 
  return words
}

///// function 3 complete /////

function findTheCheese (foods) {
  var array = foods.find(function(element) {
  return element === 'cheddar' && 'gouda' && 'camembert';})

  if (array !== 'cheddar' && 'gouda' && 'camembert'){return 'no cheese!'}
  else {return array}

  
}

function wordswithb(strings){
  for (var i = 0, i < strings.length, i++ ){
    if (strings.chartAt(i) === )
  }
  
}

