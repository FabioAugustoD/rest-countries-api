let attr = ['dark','light']    
     

const elements = ['div', 'body', 'input', 'select']
let newList = []
let oldList = []
let attrValue = []

// let ele = document.getElementsByTagName('body')
// ele[0].attributes.attr.nodeValue

let res = document.getElementsByTagName('i')[0].attributes.attr.nodeValue
console.log(res)

 
// Faz uma varredura no html, retorna suas respectivas classes e as substitui de acordo com o tema



    for (let i = 0; i < elements.length; i++) {
      let value = document.getElementsByTagName('i')[0].attributes.attr.nodeValue
      try {          
         attrValue.push(value[i]['attributes']['attr']['nodeValue'])            
      } catch (error) {
        console.log(error)           
      }                            
       
      for (let j = 0; j < value.length; j++) {
        // oldList.push(value[j])       
        // oldList.push(value[j]['className'])        
        // newList.push((value[j]['className'].replace(attr[parseInt(id)], attr[parseInt(id ^= 1)])))
        
      }       
    }      

    // for (let i = 0; i < oldList.length; i++) {
    //   try {
    //     if(oldList[i] !== "") document.getElementsByClassName(oldList[i])[0].className = newList[i]            
    //   } catch (error) {
    //     console.log(error)            
    //   }                 
    // }   
    
    // console.log(oldList)
    
// //            
    
    // if (el === 'fas fa-moon') {
    //     document.getElementsByClassName(el)[0].className ='fas fa-sun'            
    //     document.getElementById('mode').innerHTML ='Light Mode'
    //     document.getElementById(id).setAttribute( 'id' , (id ^= 1).toString())
        
    // } else {
    //     document.getElementsByClassName(el)[0].className ='fas fa-moon'           
    //     document.getElementById('mode').innerHTML ='Dark Mode'
    //     document.getElementById(id).setAttribute( 'id', (id ^= 1).toString())
    // }       