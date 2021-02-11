let $ul = document.querySelector(".pokedex");
	fetch('https://api.satisupp.com/pokedex')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject('something went wrong!')
      }
    }).then(data => {
        data.data.forEach((pokemon) => {
            let node = document.createElement("LI");              

            let stringType = "";

            pokemon.type.forEach(type => {
                if(type != pokemon.type[pokemon.type.length-1]){
                stringType += type + ", ";
              } else {
                stringType += type;
              }
            });

            let textnode = document.createTextNode(pokemon.name.english + " - "+ stringType);

            node.appendChild(textnode);
            $ul.appendChild(node);
        });
    }).catch(error => console.log(error))