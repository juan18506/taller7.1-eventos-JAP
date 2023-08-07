const div = document.querySelector('.div')
const button = div.querySelector('.btn')

button.addEventListener('click', (event) => {
  event.stopPropagation()
  alert('Hola!')
})

div.addEventListener('click', () => {
  alert('Hola! Soy el div')
})