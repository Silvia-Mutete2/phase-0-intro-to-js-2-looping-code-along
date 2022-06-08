//returns an array of thank you messages for each name provided to the function
function writeCards( nameArray, giftType ){
    let thankYouCards = [] ;
    for ( let i = 0; i < nameArray.length; i++ ){
      thankYouCards.push( `Thank you, ${nameArray[i]}, for the wonderful ${giftType} gift!` )
    }
    return thankYouCards;
  }

//invokes console.log once for each number, counting down from the number provided to zero
function countDown(numberCount){
    while ( numberCount > 0 ) {
      console.log(numberCount);
      numberCount--;
    }
    console.log(numberCount);
}