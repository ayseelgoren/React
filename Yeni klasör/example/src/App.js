import React from 'react'
import 'btn/dist/index.css'
import { Button } from "btn";

const App = () => {
  return(
    <div style={{"marginLeft":"10%","marginRight":"10%",}}>
      <br/>
      <Button type="crazy" text="Button Crazy 😄"  onClick={()=>alert("Crazy clicked 😄")}/>

      <br/>
      <Button type="orange" text="Button Orange 😄"  onClick={()=>alert("Orange clicked 😄")}/>
      <br/>

      <br/>
      <Button type="green" text="Button Green 😄" onClick={()=>alert("Green clicked 😄")} />
      <br/>

      <br/>
      <Button type="yellow" text="Button Yellow 😄"  onClick={()=>alert("Yellow clicked 😄")}/>
      <br/>

    </div>
  )
}

export default App
