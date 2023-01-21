let baseURL = 'https://pokeapi.co/api/v2/pokemon';
let btn = document.getElementById('btn');
let container = document.getElementById('container');

let pokeCard = (name,pic,bio) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'pokeCard');
    
    let img = document.createElement('img');
    img.setAttribute('class','pokePic')
    img.src = `${pic}`;
    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'imgDiv');
    imgDiv.append(img)

    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'nameDiv');
    nameDiv.append(name)

    let bioDiv = document.createElement('div');
    bioDiv.setAttribute('class', 'bioDiv')
    bioDiv.append(bio)
    
    card.append(nameDiv, imgDiv, bioDiv)
    container.append(card)
}


let getPokemonForCard = async () =>{
    let randInt = Math.floor(Math.random()*100);
    let res = await axios.get(`${baseURL}/${randInt}`);
    // let abilities = [];
    // for(let i=0;i<res.data.abilities.length;i++){
    //     abilities.push(res.data.abilities[i].name);
    // }
    let abilities = document.createElement('ul')
    for(let i=0;i<res.data.abilities.length;i++){
        let li = document.createElement('li');
        li.innerHTML = res.data.abilities[i].ability.name;
        abilities.append(li);
        }
    
    pokeCard(res.data.species.name, res.data.sprites.front_default, abilities)
}

btn.addEventListener('click', getPokemonForCard);