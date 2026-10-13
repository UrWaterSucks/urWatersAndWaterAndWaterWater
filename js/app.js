const pokemon = [
  {
    name: "Charmander",
    type: "fire",
    maxHp: 100,
    moves: ["Scratch", "Ember", "Flamethrower"]
  },
  {
    name: "Squirtle",
    type: "water",
    maxHp: 110,
    moves: ["Tackle", "Water Gun", "Bite"]
  },
  {
    name: "Pikachu",
    type: "electric",
    maxHp: 95,
    moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
  }
];

const wrapper = document.getElementById('wrapper');
function renderItems(){
    wrapper.innerHTML = '';
 pokemon.forEach((item, idx) => {
 const ele = document.createElement("div");
 const header = document.createElement("h1");
 const category = document.createElement("h3");
ele.innerHTML = item.name;
category.innerHTML = item.category;
 ele.appendChild(header);   
 ele.appendChild(category)
 ele.appendChild(deleteEle);
 wrapper.appendChild(ele);
})
}

renderItems();

document.getElementById("submit").addEventListener("click", () => {
    const obj = {
        name:document.getElementById("name").value
    }
    list.push(obj)
    renderItems();
})