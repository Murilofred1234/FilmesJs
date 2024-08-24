function renderMovie(movie) {
   
 
   const blocoPai = document.createElement('div')
   blocoPai.classList.add('filmes')
   document.body.appendChild(blocoPai)

    const imagemFilme = document.createElement('img')
    imagemFilme.src = movie.image
    imagemFilme.classList.add('imagem-filme')
    blocoPai.appendChild(imagemFilme)
    console.log(blocoPai)

    const blocoTituloFilme = document.createElement('div')
    blocoTituloFilme.classList.add('filmes__propriedades')
    blocoPai.appendChild(blocoTituloFilme)

    const tituloFilme = document.createElement('p')
    tituloFilme.classList.add('titulo-filme')
    tituloFilme.textContent = movie.title
    blocoTituloFilme.appendChild(tituloFilme)

    const blocoNotaFilme = document.createElement('div')
    blocoNotaFilme.classList.add('filmes__propriedades-fav')
    blocoTituloFilme.appendChild(blocoNotaFilme)

    const notaFilme = document.createElement('p')
    notaFilme.classList.add('nota')
    notaFilme.textContent = movie.rating
    blocoNotaFilme.appendChild(notaFilme)

    const favoritar = document.createElement('p')
    favoritar.classList.add('favoritar')
    favoritar.textContent = movie.isFavorited
    blocoNotaFilme.appendChild(favoritar)


    const textoFilme = document.createElement('div')
    textoFilme.classList.add('filme-texto')
    textoFilme.textContent = movie.description
    blocoPai.appendChild(textoFilme)

    console.log(blocoPai)
    

  
}

const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: 'Descrição do filme…',
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: 'Descrição do filme…',
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: 'Descrição do filme…',
    isFavorited: false
  },
]

movies.forEach(movie => renderMovie(movie))
