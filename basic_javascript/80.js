// Counting Cards

// approach 1

var count = 0;
var decision = "";
function cc(card) {

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count ++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count --;
        break;
  }

  if(count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }

  return count + " " + decision;
}

// approach 2

function cc(card) {
    
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || regex.test(card)) {
        count--;
    }
  
    if (count > 0) return count + " Bet";
    return count + " Hold";
  }

cc(2); cc(3); cc(7); cc('K'); cc('A');