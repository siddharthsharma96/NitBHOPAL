import React from 'react'

export default function Nav() {
  return (
     
    <nav class="glass-navbar">
    <h1>FoodFlavour</h1>
    <ul>
        <li>
          <label for="inout">Search</label>
          <input type='text' id="input" placeholder='Search'/></li>
        <li>Home</li>
        <li>Cart</li>
        <li>Sign in</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav> 
  
  )
}
