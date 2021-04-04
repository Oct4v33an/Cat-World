const cats = [
    {
      id: 1,
      title: "Trump kitteh",
      category: "orange-cat", 
      img: "pics/kitty1.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,
    },
    {
      id: 2,
      title: "Playful Black Kitty",
      category: "black-cat",
      img: "pics/black-kitty-1.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,
    },
    {
      id: 3,
      title: "Calico Kitty",
      category: "calico-cat",
      img: "pics/calico-kitty.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
    {
      id: 4,
      title: "Lil' orange kitty",
      category: "orange-cat",
      img: "pics/ginger-cat-2.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
    {
      id: 5,
      title: "Lil' grey kitty",
      category: "grey-cat",
      img: "pics/grey-kitty-1.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
    {
      id: 6,
      title: "Big grey katto",
      category: "grey-cat",
      img: "pics/grey-kitty-2.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
    {
      id: 7,
      title: "Oreo Cat",
      category: "striped-cat",
      img: "pics/striped-kitty-1.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
    {
      id: 8,
      title: "Athletic Kitty",
      category: "striped-cat",
      img: "pics/striped-kitty-2.png",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur vitae in ratione delectus incidunt vel. Perferendis cumque fugit ratione libero, architecto quas repellat quisquam sit cupiditate amet consectetur corrupti?`,    },
  ];


const sectionCenter= document.querySelector(".section-center");
const filterBtns=document.querySelectorAll(".filter-btn");

// load items   

window.addEventListener("DOMContentLoaded", function(){
    displayCatItems(cats);
// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category=e.currentTarget.dataset.id;
        const catCategory=cats.filter(function(catItem){
            if(catItem.category === category){
            return catItem;}
        });
        if (category === "all"){
            displayCatItems(cats);
        }else{
            displayCatItems(catCategory);
        }
    });
});
  
});
function displayCatItems(CatItems){
    let displayCat = CatItems.map(function(cat){
        

        return `<article class="menu-item">
        <img src=${cat.img} class="photo" alt=${cat.title}/>
        <div class="item-info">
            <header>
            <h4>${cat.title}</h4>
        </header>
        <p class= "item-text">${cat.desc}</p>
        </div>
    </article>`
    });
    displayCat = displayCat.join("");
    sectionCenter.innerHTML = displayCat;
    }