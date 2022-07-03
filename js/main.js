function Create(tag){
  Creater.Parent = $(Creater.Parent).append(tag);
  return Creater;
}

var Creater = {
  Call:Create,
  Parent: null
};

Creater.Parent = $("body");


function Left() {
  let node = document.querySelector(".red");
  if(node.previousElementSibling != null) {
    node.classList.toggle("red");
    node.previousSibling.classList.toggle("red");
  }
}

function Right() {
  let node = document.querySelector(".red");
  if(node.nextElementSibling != null) {
    node.classList.toggle("red");
    node.nextSibling.classList.toggle("red");
  }
}

function Up() {
  let count = 0;
  let node = document.querySelector(".red");

  if(node.parentElement.previousElementSibling != null) {
    node.classList.toggle("red");

    let upNode = node.parentElement.previousElementSibling.firstElementChild;

    while(node.previousElementSibling != null) {
      node = node.previousElementSibling;
      ++count;
    }
    for(let i = 0; i<count; ++i){
      upNode = upNode.nextSibling;
    }
    upNode.classList.toggle("red");
  }
}

function Down() {
  let count = 0;
  let node = document.querySelector(".red");

  if(node.parentElement.nextElementSibling != null) {
    node.classList.toggle("red");

    let downNode = node.parentElement.nextElementSibling.firstElementChild;

    while(node.previousElementSibling != null) {
      node = node.previousElementSibling;
      ++count;
    }
    for(let i = 0; i<count; ++i){
      downNode = downNode.nextSibling;
    }
    downNode.classList.toggle("red");
  }
}


$(document).ready(() => {

  let Board = $("body").append(`<div class="Board"></div>`);
  let num = 1;

  for (let i = 0; i < 5; ++i) {
    let row = $(".Board").append(`<div class="row"></div>`);
    for (let j = 0; j < 5; ++j) {
      if (i == 2 && j == 2) {
        $(".row:last-child").append(`<div class="cell red">${num++}</div>`);
      } else {
        $(".row:last-child").append(`<div class="cell">${num++}</div>`);
      }
    }
  }

  let Bplace = $("body").append(`<div class="place"></div>`);
  $(".place").append(`<button class="button left">←</button>`);
  $(".place").append(`<button class="button up">↑</button>`);
  $(".place").append(`<button class="button down">↓</button>`);
  $(".place").append(`<button class="button right">→</button>`);

  $(".left").bind("click",()=> {
    Left();
  });
  $(".right").bind("click",()=> {
    Right();
  })
  $(".up").bind("click",()=> {
    Up();
  })
  $(".down").bind("click",()=>{
    Down();
  })
});



/*$(document).ready(()=>{
  $("body").append(`<input type="text">`);
  $("body").append(`<div class="ABC">bb</div>`);

let i = 1;
  $(".ABC").one("click",()=>{
    alert(`${i++}`);
    $(".ABC").one("click",()=>{
      alert(`${i++}`);
      $(".ABC").one("click",()=>{
        alert(`${i++}`);
        $(".ABC").one("click",()=>{
          alert(`${i++}`);
          $(".ABC").one("click",()=>{
            alert(`${i++}`);
            $(".ABC").one("click",()=>{
              alert(`${i++}`);
              $(".ABC").one("click",()=>{
                alert(`${i++}`);
                $(".ABC").one("click",()=>{
                  alert(`${i++}`);
                  $(".ABC").one("click",()=>{
                    alert(`${i++}`);
                    $(".ABC").one("click",()=>{
                      alert(`${i++}`);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
*/
