
const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];


//   inizializzo una oggetto colori per le varie tipologie
const colors ={
    food:"pink",
    animal:"green",
    beverage:"yellow"
}





// Milestone 2
// Coloriamo le icone per tipo
// per fare ciò utilizziamo il metodo map per andare a generare un nuovo array,
// che conterrà le nostre carte, e i colori associati alle diverse categorie

const colorizedIcons = icons.map(
    (element) => {
        return{
            "name":element.name,
            "family":element.family,
            "prefix":element.prefix,
            "category":element.category,

            // crea la keyword colors nell'oggetto, prendendo come argomento della keyboard il valore della
            // associato alla categoria dei singoli oggetti, che corrisponde a sua volta alla keyword specifica in 
            // colori. Cosa che associa il singolo colore specifico a seconda della categoria, nel nuovo array generato
            color: colors[element.category]

        }
    }
);
console.log(colorizedIcons);

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// for(let i=0; i<icons.length;i++){
    
//     document.getElementById("card-container").innerHTML += `
//     <div class="card-content">
//         <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}">
//     </i><div class="name">fa-name</div></div>
//     `
// }
colorizedIcons.forEach(
    (element)=>{
        // destructuring
        const{name,family,prefix,color}=element;

        // inner html concatenation
        document.getElementById("card-container").innerHTML += `
        <div class="card-content">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="name">${name}</div></div>
        ` 
    }
);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const iconsCategories=[];

const select =document.getElementById("selection");




// inizializziamo un nuovo oggetto che conterrà le possibili categorie di carte, nella sezione variabili
// questo sarà generato, filtrando per le categorie presenti all'interno dell'array che contiene le nostre carte,
// prendendosi cura di prendere le categorie SOLO una volta.


// questo codice riempie iconsCategories 
colorizedIcons.forEach(
    (element) => {
        if(!iconsCategories.includes(element.category)){
            iconsCategories.push(element.category);
        }
    }
);


// questo codice si occupa di stampare le nostre options
iconsCategories.forEach(

    (element) =>{
        select.innerHTML += `<option value="${element}">${element}</option>`;
    }
);




// Inoltre:considerando che la select dovrà cambiare le nostre icone utiliziamo un event listener
// questo codice genera una select che conterra le categorie delle icone


select.addEventListener('change',
    function(){

        const filteredIcons = colorizedIcons.filter(
            (element) => {
                
                if(select.value=="" || element.category == select.value){
                    return true;
                }
                return false;
            }
        );
        
        document.getElementById("card-container").innerHTML = "";
        filteredIcons.forEach(
            (element)=>{
                // destructuring
                const{name,family,prefix,color}=element;
        
                // inner html concatenation
                document.getElementById("card-container").innerHTML += `
                <div class="card-content">
                    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                    <div class="name">${name}</div></div>
                ` 
            }
        );

    }
);


// BONUS  

// estraggo modal
let modal = document.getElementById("myModal");

// estraggo il bottone che apre la modal
let btn = document.getElementById("myBtn");

// estraggo l'elemento <span>  che chiude la modal
let span = document.getElementsByClassName("close")[0];

// inizializzo l'apertura della modal, al click dell'user
btn.onclick = function() {
  modal.style.display = "block";
}

// inizializzo la chiusura della modal, al click dell'user, nell'elemento <span> (x)

span.onclick = function() {
  modal.style.display = "none";
}

// inizializzo la chiusura della modal, al click all'esterno della modal, da parte dell'utente
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// inizializzo le variabili che andranno ad essere inserite e prese dall'utente

let inputName = document.getElementById("aggiungiNome");

let inputSelectFamily = document.getElementById("aggiungiFamiglia");

let inputSelectPrefix = document.getElementById("addPrefisso");

let inputCategory = document.getElementById("aggiungiCategoria");


// inizializzo l'evento click, che prenderà le informazioni dell'utente

btnAddIcon= document.getElementById("aggiungi");

btnAddIcon.addEventListener('click',
    function(){
		
		
		


	}
);