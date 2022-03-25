async function call(){
    const response = await fetch('https://cataas.com/api/tags')
    const data = await response.json();
    const Arr1 = data.slice(5,10);
    const Arr2 = data.slice(15,20);
    const Arr3 = [...Arr1, ...Arr2]
   const elemento =  document.querySelector('select');
   
    const selection = Arr3.forEach((element)=>{
       const cat = document.createElement('option');
       cat.textContent = element;
       elemento.appendChild(cat)
    })
    const img = document.createElement('img');

    async function chiamatagatto(){
        document.querySelector('select').addEventListener('click', async()=> {
            const gattoCasualeResponse = await fetch(`https://cataas.com/cat/select.value?json=true`)
            const gattoFinale = await gattoCasualeResponse.json()
            
            const img = document.createElement('img')
            document.body.appendChild(img);
            img.src = `https://cataas.com${gattoFinale.url}`

            let pam = document.createElement('h2');
            document.body.appendChild(pam)
            pam.textContent = gattoFinale.tags.join('-');

        })
    }

    chiamatagatto()
  

    
}



call()



