
'use strict'
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
var ticketPrice=+movieSelect.value


//func for count
const updateselectedcount= function() {
const selectedSeats =document.querySelectorAll('.row .seat.selected');
const selectedSeatCountt=selectedSeats.length;
count.innerText=selectedSeatCountt;
total.innerText=selectedSeatCountt * ticketPrice;
};

//movie chang event

movieSelect.addEventListener('change',(e)=>{

    ticketPrice=+e.target.value;
    console.log(ticketPrice);
    updateselectedcount();
})
//event list for selection of seat
container.addEventListener('click',(e)=>{
if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){
e.target.classList.toggle('selected')
updateselectedcount();
}


});
//onrefresh
updateselectedcount();