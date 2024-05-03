class RPG {
    constructor(){
        this.dateCreated = new Date(); 
        this.id = this.getId();
    }
    
    getId = () => {
        return Math.floor(Math.random() * (1000 - 1) + 1);
    }
    
    setAttributes = (attributes) => {
        Object.assign(this, attributes) 
        
    }
    
    getAttributes = () => {
        return {
            id : this.id,
            name: this.name,
            player : this.player,
            class : this.class,
            race: this.race,
            dateCreated: this.dateCreated
        }
    }
}

function handleGetData(event) {
    event.preventDefault();    
    const data = {
        
     name: event.target.elements.name.value,
     player: event.target.elements.player.value,
     class: event.target.elements[2].value,
     race: event.target.elements[3].value
     
    }
    
    console.log(data)
    const myCharacter = new RPG();
    myCharacter.setAttributes(data); 
    console.log(myCharacter.getAttributes());
   
    displayCharacters(myCharacter);
}

function displayCharacters(character) {
    
    const display = document.querySelector('.character-display')
    console.log(display)
    const characterData = character.getAttributes();
    
    
        const card = `<div class="card col-md-4 col-12 rounded p-2">
        <div class="card-body">
          <h5 class="card-title">${characterData.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Player: ${characterData.player}</li>
          <li class="list-group-item">Class: ${characterData.class}</li>
          <li class="list-group-item">Race: ${characterData.race}</li>
        </ul>
        <div class="card-body">
        
          <a href="#" class="btn">Update</a>
        </div>
      </div>`
      
      display.insertAdjacentHTML("beforeend", card)
    
}

document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to our RPG Character Creator")
})

function handleMouseOver() {
    alert("Are you sure that's the perfect choice?")
}

function handleMouseOut() {
    alert("No! Don't choose that one!")
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        submitButton.style.backgroundColor = randomColor;
    });
});