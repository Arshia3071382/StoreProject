import React from 'react'

function Home() {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div>Home</div>
  )
}

export default Home