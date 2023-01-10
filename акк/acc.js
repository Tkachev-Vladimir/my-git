// function showHide(city) {
//   let obj = document.getElementById(city);
//   if (obj.style.display != "block") {
//     obj.style.display = "block";
//   } else {
//     obj.style.display = "none";
//   }
// }

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger_three").classList.toggle("active");
  document.querySelector(".burger_two").classList.toggle("active");
  document.querySelector(".nav_list").classList.toggle("active");
  document.querySelector("#nav").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("active");
});


const plantings = document.querySelectorAll(".service_item_planting");
const lawnCares = document.querySelectorAll(".service_item_lawnCare");
const gardens = document.querySelectorAll(".service_item_garden");


const btn_cont= document.querySelector('.btn_contact')

btn_cont.addEventListener('click',()=> {
  btn_cont.classList.toggle('active')
})







// const btns = document.querySelectorAll(".btn");

// btns.forEach(el => {
//  el.addEventListener('click', ()=> {
//  el.classList.add('active');
//   for(let i = 0; i<btns.length; i++){
//     btns[i].classList.remove('active')
//   }
//  })
// })
// btns.forEach(el => el.classList.toggle('active'))
// for(let i = 0; i<btns.length; i++){
//   btns[i].classList.remove('active')
// }


// btns.forEach((el) => {
//   el.addEventListener("click", (event) => {
//     el.classList.toggle("active");
//   });
// });

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", (event) => {
//        for (let o = 0; o<btns.length ; o++ ) {
//   btns[o].classList.remove('active')
//           }
//  });
//   }

// btns.forEach(el => {
//   el.addEventListener('click', (event)=> {
//   el.classList.toggle('active');

    
//   })
  
// })





		const btns = document.querySelectorAll('.btn');
		let btnWithActiveClass = [];

		btns.forEach((el, btnIndex) => {
			el.addEventListener('click', (event) => {
				if (btnWithActiveClass.length === btns.length - 1) {
					if (btnWithActiveClass.find(item => item[btnIndex])) {
						const curActiveBtnIndex = btnWithActiveClass.findIndex(item => item[btnIndex]);

						for (let key in btnWithActiveClass[curActiveBtnIndex]) {
							btnWithActiveClass[curActiveBtnIndex][key].classList.remove('active');
						}

						btnWithActiveClass.splice(curActiveBtnIndex, 1);
					} else {
						for (let key in btnWithActiveClass[btnWithActiveClass.length - 1]) {
							btnWithActiveClass[btnWithActiveClass.length - 1][key].classList.remove('active');
						}

						btnWithActiveClass.pop();

						btnWithActiveClass.push({ [btnIndex]: el });
						el.classList.add('active');
					}
				} else {
					el.classList.add('active');
					btnWithActiveClass.push({ [btnIndex]: el });

				}

			});
		});
	






  garden = (event) => {
  
  
    plantings.forEach((el) => {
      el.classList.add("active");
    });
  
    lawnCares.forEach((lawn) => {
      lawn.classList.add("active");
    });
    gardens.forEach((garden) => {
      garden.classList.remove("active");
    });
  
   
  };



lawnCare = (event) => {
  gardens.forEach((el) => {
    el.classList.add("active");
  });
  plantings.forEach((el) => {
    el.classList.add("active");
  });
  lawnCares.forEach((lawn) => {
    lawn.classList.remove("active");
  });
  
};

planting = (event) => {
  gardens.forEach((el) => {
    el.classList.add("active");
  });
  lawnCares.forEach((lawn) => {
    lawn.classList.add("active");
  });
  plantings.forEach((el) => {
    el.classList.remove("active");
  });
};

const box = document.querySelectorAll('.item_box');
const price_btn = document.querySelectorAll('.price_btn');
const acc= document.querySelectorAll('.acc')
const item_box= document.querySelectorAll('.item_box')
const price_items = document.querySelector(".prices_items");
const order = document.querySelectorAll('.order')
const sections = document.querySelector('#section_contact')


// активная кнопка на секцию старкт
order.forEach((el) => {
  el.addEventListener("click", function () {
    sections.scrollIntoView({
      behavior: "smooth",
    });
  });
});
// активная кнопка на секцию конец

// секция прайса начало
item_box.forEach(el => el.lastElementChild.addEventListener('click', function() {
el.lastElementChild.classList.toggle('active')

for(let i = 0; i < acc.length; i++) {
  acc.forEach(el => el.classList.remove('active'))
 
}
for(let i = 0; i< item_box.length; i++) {
  item_box.forEach(lele => lele.classList.remove('active'))
}
for(let i = 0; i<price_btn; i++) {
  price_btn.forEach(el => el.classList.remove('active'))
}

if(el.lastElementChild.classList.contains('active')){
   el.classList.add('active');
   el.nextElementSibling.classList.add('active');
   price_items.classList.add('active')
  }else{
    el.classList.remove("active");
    el.nextElementSibling.classList.remove("active");
    price_items.classList.remove('active')
  }

  console.log(el.nextElementSibling.classList.contains("active"));
}) 
)
// секция прайса конец




// dropdown start

const btn = document.querySelector(".contact_btn");
const dropdown = document.querySelector(".dropdown");
const dropCity = document.querySelectorAll(".drop_city");
const city = document.querySelector(".city");
const drop_content = document.querySelector(".drop_content");
const cont_item_box = document.querySelector(".contact_item_box");
const city_start= document.querySelector('.drop_city_start')




btn.addEventListener("click", (dropOpen) => {
  dropdown.classList.toggle("active");
  btn.classList.toggle("active");
  if (dropdown.classList.contains("active")) {
    // cont_item_box.classList.add("active");
  } 
});

dropCity.forEach((el) =>
  el.addEventListener("click", (event) => {
    el.classList.remove("active");
    for (let i = 0; i < dropCity.length; i++) {
      dropCity.forEach((el) => el.classList.remove("active"));
    }
    console.log(el);
    el.classList.toggle("active");

    if (el.classList.contains("active")) {
      cont_item_box.classList.add("active");
      dropdown.classList.remove('active')
      city.innerHTML = event.target.innerHTML;
    }
  })
);

//dropdown end



























const cityy = [
  {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    officeAdress: '511 Warburton Ave'
  },

  {
city: 'Canandaigua, NY',
phone: '+1 585 393 0001',
officeAdress: '151 Charlotte Street'
  },

  {
city: 'Sherril, NY',
phone: '+1 315 908 0004',
officeAdress: '14 WEST Noyes BLVD'
  },

  {
    city: 'New York City',
    phone: '+1 212 456 0002',
    officeAdress: '9 East 91st Street'
  }
]

console.log(city[2])



// const template = document.getElementById("car-template");
// const carTemplate = template.content.querySelector(".car");

// getData().forEach((car) => {
//   const carElem = document.importNode(carTemplate, true);
//   for (const key in car) {
    
//     if (key === "img") {
//       carElem.querySelector(".img").src = car.img;
//     } else {
//       carElem.querySelector("." + key).textContent = car[key];
//     }
//   }
//   document.body.appendChild(carElem);
// });

// function getData() {
//   return [
//     {
//       model: "Dodge",
//       year: 1967,
//       color: "red",
//       body: "Hard top",
//       img: "/images/car-1",
//     },
//     {
//       model: "Cadillac",
//       year: 1968,
//       color: "blue",
//       body: "Hard top",
//       img: "/images/car-2",
//     },
//     {
//       model: "Cadillac",
//       year: 1968,
//       color: "blue",
//       body: "Hard top",
//       img: "/images/car-2",
//     },
//   ];
// }
// console.log(getData())