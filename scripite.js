document.addEventListener('DOMContentLoaded', () => {
    let img = document.getElementById('foto');
    let nome = document.getElementById('nome');
    let id = document.getElementById('id');
    let pokemon = document.getElementById('pokemon');
    let buscar = document.getElementById('buscar');

    buscar.addEventListener('click', () => {
        let nomePokemon = pokemon.value.toLowerCase();  // Converte o nome do Pokémon para minúsculas
        fetch('https://pokeapi.co/api/v2/pokemon/' + nomePokemon)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon não encontrado!');
                }
                return response.json();
            })
            .then(data => {
                img.src = data.sprites.other['official-artwork'].front_default;
                nome.innerHTML = 'Nome: ' + data.name;
                id.innerHTML = 'ID: ' + data.id;
            })
            .catch(error => {
                console.log(error);
                nome.innerHTML = 'Erro: Pokémon não encontrado';
                id.innerHTML = '';
                img.src = '';  // Remove a imagem se houver um erro
            });
    });
});
