const activities_list = [
  {
    id:0,
    titre: "Sport",
    descripton: "Nous faisons des modules centré sur le sport, de la préparation physique à du du coaching individuel et plus ! ",
    image: "./Image/image00005.jpeg",
  },
  {
    id:1,
    titre: "Santé",
    descripton: "Nous nous occupons de toute personne voulant reprendre en main leur santé. On s'occupe de tous types de personnes (diabétique, obésité, anxieux…) et nous sommes formés pour travailler avec ceux victimes de COVID",
    image: "./Image/image11.jpeg",
  },
  {
    id:2,
    titre: "Nutrition",
    descripton: "Volet nutrition bien être: on propose de la nourriture avec un budget bas. Venez découvrir des pâtisseries que nous sommes les seuls à proposer. 😋😋😋.",
    image: "./Image/food-heart.jpg",
  },
  {
    id:3,
    titre: "BPJEPS",
    descripton: "Préparation de jeunes de 18-20 ans qui sortent d’un BPJEPS.",
    image: "./Image/BPJEPS.jpg",
  },
]

var activities_container = document.getElementById("activities_container");

activities_list.map(activity => {
  if (activity.id%2 == 0) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("data-aos", "fade-left");
    newDiv.setAttribute("data-aos-easing", "ease");
    newDiv.setAttribute("data-aos-duration", "1000");

    var DivChild = document.createElement('div');
    DivChild.classList.add("activité_cont");
    newDiv.appendChild(DivChild);

    var div_presentation = document.createElement('div');
    div_presentation.classList.add("activité_presentation");
    DivChild.appendChild(div_presentation);

    var h2 = document.createElement('h2');
    h2.classList.add("activité_titre_y");
    h2.innerHTML=activity.titre;
    div_presentation.appendChild(h2);

    var p = document.createElement('p');
    p.classList.add("activité_p");
    p.innerHTML=activity.descripton;
    div_presentation.appendChild(p);

    var div_img = document.createElement('div');
    div_img.classList.add("img_activité_div");
    div_img.style.padding="0px 15px 0px 5px";
    DivChild.appendChild(div_img);

    var img = document.createElement('img');
    img.classList.add("img_activité");
    img.setAttribute("src",activity.image);
    img.setAttribute("alt",activity.titre);
    div_img.appendChild(img);

    activities_container.appendChild(newDiv);
  } else {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("data-aos", "fade-right");
    newDiv.setAttribute("data-aos-easing", "ease");
    newDiv.setAttribute("data-aos-duration", "1000");

    var DivChild = document.createElement('div');
    DivChild.classList.add("activité_cont");
    DivChild.classList.add("reverse");
    newDiv.appendChild(DivChild);

    var div_presentation = document.createElement('div');
    div_presentation.classList.add("activité_presentation");
    DivChild.appendChild(div_presentation);

    var h2 = document.createElement('h2');
    h2.classList.add("activité_titre_g");
    h2.innerHTML=activity.titre;
    div_presentation.appendChild(h2);

    var p = document.createElement('p');
    p.classList.add("activité_p");
    p.innerHTML=activity.descripton;
    div_presentation.appendChild(p);

    var div_img = document.createElement('div');
    div_img.classList.add("img_activité_div");
    div_img.style.padding="0px 5px 0px 15px";
    DivChild.appendChild(div_img);

    var img = document.createElement('img');
    img.classList.add("img_activité");
    img.setAttribute("src",activity.image);
    img.setAttribute("alt",activity.titre);
    div_img.appendChild(img);

    activities_container.appendChild(newDiv);
  }
});

