setTimeout(() => {
    
    const first = document.querySelector('#first');
    // Or
    /*
    const first = document.getElementById('first');
    const first = document.querySelector('div');
    */

    const p1 = document.createElement('p');
    
    p1.innerText = `Hi`;
    
    first.append(p1);
  }, 1000);
  
  setTimeout(() => {
    
    const nesting = document.querySelector('#nesting');
    // Or
    // const nesting = document.getElementById('nesting');
   
    const p2 = document.createElement('p');
    
    p2.innerText = "Outer";
    
    nesting.append(p2);
    
    setTimeout(() => {
      
      const p3 = document.createElement('p');
     
      p3.innerText = "Inner";
      
      nesting.append(p3);
    }, 1000);
  }, 2000);
  
  const count = document.querySelector('#count');
 
  const num = document.createElement('h1');
  
  count.append(num);
  num.innerText = 3;
  
  setTimeout(() => {
    num.innerText--;
    // Or
    /*
    num.innerText -= 1;
    num.innerText = num.innerText - 1;
    */
    setTimeout(() => {
      num.innerText--;
      setTimeout(() => {
        // num.innerText--;
        // 3d
        const body = document.querySelector('body');
        body.classList.add('background');
        // Or
        // document.querySelector('body').classList.add('background');
      }, 1000);
    }, 1000);
  }, 1000);
  
  
  
  
  