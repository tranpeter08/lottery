function randNum(min,max){
    return (Math.floor(Math.random()*(max-min+1))+min);
  }
  
  function generateMainNum(min, max, count){
    const winNumbers = [];
    while(winNumbers.length <count){
        let num = randNum(min,max);
        if(!winNumbers.includes(num)){
        winNumbers.push(num);
    }
  }
   return winNumbers.sort((a,b)=>a-b);
}

function renderNumbers(aHeader, aClass, anArray, aBonus){
    $(aClass).html(`
    <h2>${aHeader}</h2>
    <p>${anArray.join(", ")};<span class="bonus"> ${aBonus}</span></p>`);
}

function buttonClick(){
    $('.generate').on('click', ()=>{
        renderNumbers('POWERBALL','.powerball', generateMainNum(1,69,5), randNum(1,26));
        renderNumbers('MEGA Millions','.mega', generateMainNum(1,70,5), randNum(1,25));
        renderNumbers('SuperLotto Plus','.super', generateMainNum(1,47,5), randNum(1,27));
        renderNumbers('Fantasy 5','.fantasy', generateMainNum(1,39,5), "");
    })
}

function runThis(){
buttonClick();
}
 
$(runThis);