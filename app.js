const colors = ['red','green','purple','maroon','orange','lightblue','lightgreen', 'lightgrey', 'darkgrey','teal',
'Beige','Bistre','Black','Blue','Blue Green','Blue Violet','Bondi Blue','Brass','Bronze	','Brown','Buff','Burgundy','Burnt Orange','Burnt Sienna','Burnt Umber',
'Lavender','Lawn green','Lemon','Lemon chiffon','Lilac','Lime','Lime green','Linen','Shocking','Scarlet'
];
const bodyColor = document.querySelector('body');

setInterval(function(){
    const picked = Math.floor(Math.random() * colors.length);

    bodyColor.style.background = colors[picked];

}, 500)