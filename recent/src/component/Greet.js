import React from 'react'

/*function Greet(){
    return <h1>Good Morning</h1>
}*/

export const Greet = props => {
const {name} = props
return (
<div>
<h1>Good Morning {name}
</h1>

 </div>
 )
}


//export default Greet