fetch('https://api.satisupp.com/pokedex').
then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject('something went wrong!')
    }
  }).
then(data => console.log(data));