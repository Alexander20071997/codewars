function billboard(name, price = 30){
    let r = 0
    for(let i = 0; i < name.length; i++){
      r = r + price
    }
    
    return r;
  
  } 