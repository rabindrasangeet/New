import React from 'react'

const Html = () => {
    //return (
     //<div>
        //<h1>
          //This is a heading.
          //</h1>
    //</div>)
return React.createElement('div', {id:'new', className:"NewClass"}, React.createElement('h1', null,"This is a heading."))
    
}
 export default Html

