function scuberGreetingForFeet(feet){
let greeting;
if (feet <= 400){
  greeting = 'This one is on me!'
  return greeting
}else if (feet >2500){
  greeting = 'No can do.'
  return greeting;
}else if (feet >= 2001){
  greeting = 'I will gladly take your thirty bucks.'
  return greeting;
}
}

function ternaryCheckCity(city){
  let answer;
   if (city === 'NYC'){
    answer = 'Ok, sounds good.'
    return answer
 }else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  let gratitude;
  if (tip === 'generous'){
    gratitude = 'Thank you so much.'
    return gratitude;
  } else if (tip === 'not as generous'){
    gratitude = 'Thank you.'
    return gratitude
  }else {
    return 'Bye.'
  }

  }
