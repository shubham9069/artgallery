import React from 'react'

const Loader = () => {


    var body = document.documentElement
  return (
<div id="black-bg" style={{height:body.scrollHeight,width:body.scrollWidth}}><div id="loadingSpin" style={{top:window.pageYOffset+window.innerHeight/2,left:window.pageXOffset+window.innerWidth/2}}></div></div>
        
         )
}

export default Loader