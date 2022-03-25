async function call(){
    const response = await fetch('https://cataas.com/api/tags')
    const data = await response.json();
    const Arr1 = data.slice(5,10);
    const Arr2 = data.slice(15,20);
    const Arr3 = [...Arr1, ...Arr2]
   const elemento =  document.querySelector('select');
   
    Arr3.forEach((element)=>{
       const cat = document.createElement('option');
       cat.textContent = element;
       elemento.appendChild(cat)
    })
    const img = document.createElement('img');
    function showElements(){
        img = 
    }
    const click = document.querySelector('option').addEventListener('click', )
    
}





