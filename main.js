// ESERCIZIO 1



// Lavoriamo sul DOM: 
// Creare 3 paragrafi in HTML e 3 bottoni.
// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire (quale classe di bootstrap potrebbe farlo?)

// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale

// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.

// ESERCIZIO 2 
// Replicare le card in dinamica con JavaScript, come visto a lezione.

let button1 = document.querySelector('#button1')

let p = document.querySelectorAll('p')

button1.addEventListener('click',()=>{
    p.forEach((el)=>{
        el.classList.toggle('d-none')
    })
})
let button2 = document.querySelector('#button2')

button2.addEventListener('click', ()=>{
    p.forEach((el)=>{
        let r = Math.round(Math.random()*255)
        let g = Math.round(Math.random()*255)
        let b = Math.round(Math.random()*255)
        el.style.backgroundColor = `rgb(${r},${g},${b})`
    })
})
let button3 = document.querySelector('#button3')

button3.addEventListener('click', ()=>{
    p.forEach((el)=>{
        el.classList.toggle('fw-bold')
    }
)
})

let row = document.querySelector('.row-cards')
let persone = [
    {nome: 'Roberto', citta: 'Roma', paese: 'Italia'},
    {nome: 'Gianni', citta: 'Parigi', paese: 'Francia'},
    {nome: 'Maria', citta: 'Budapest', paese: 'Ungheria'},
    {nome: 'Carla', citta: 'Londra', paese: 'Inghilterra'},
    {nome: 'Stefania', citta: 'Londra', paese: 'Inghilterra'},


]

persone.forEach((persona,i)=>{
        let col = document.createElement('div')
        col.classList.add('col-12', 'col-md-3')
        col.innerHTML = ` <div class="card">
        <img src="https://picsum.photos/${200 + i}" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-title">Nome:${persona.nome}</p>
          <p class="card-text">Città: ${persona.citta}</p>
          <p class="card-text">Paese: ${persona.paese}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      row.appendChild(col)
})