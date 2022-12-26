function solution(a, b){
    let s = '', l = '';
    
    if(a.length > b.length) {
      l = a;
      s = b;
  } else {
    l = b;
    s = a;
  }
    
    return `${s}${l}${s}`
  }