let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote: `"The only thing we have to fear is fear itself"`,
    person: 'Ghandi'
},{
    quote: `"The truth will set you free"`,
    person: 'Bible'
},{
    quote: `"There's no place like home"`,
    person: 'By Dorothy'
},{
    quote: `"Three can keep a secret, if two of them are dead:"`,
    person: 'Ali abdal'
},{
    quote: `"You must be the change you wish to see in the world:"`,
    person: 'Chris'
},{
    quote: `"Spread love everywhere you go: A famous quote"`,
    person: 'Numan'
},{
    quote: `"Darkness cannot drive out darkness: only light can do that:"`,
    person: 'Harry'
},{
    quote: `""Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow" — Mary Anne Radmacher "`,
    person: 'Mary'
},{
    quote: `"The only thing we have to fear is fear itself"`,
    person: 'Ahmad'
},{
    quote: `""He who conquers himself is the mightiest warrior"`,
    person: ' Confucius'
},{
    quote: `""Do your thing and don't care if they like it" "`,
    person: 'Xeeshan'
},{
    quote: `""One man with courage makes a majority"`,
    person: ' Andrew Jackson '
},{
    quote: `""Try not to become a man of success, but rather become a man of value"`,
    person: ' Albert Einstein'
},{
    quote: `""He who conquers himself is the mightiest warrior" — Confucius "`,
    person: 'Saddique'
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
 
})