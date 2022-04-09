import React from 'react'

function Unmounting() {
  return (
    <div>
      <h2> Unmounting</h2>
      <p>
      This is the last phase in the component’s lifecycle. As the name clearly suggests, the component gets unmounted from the DOM in this phase. The method that is available in this phase is:

         <br></br>
      1. componentWillUnmount()
          <br></br>
          <br></br>
         This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes. This method denotes the end of the component’s lifecycle.
      </p>
    </div>
  )
}

export default Unmounting