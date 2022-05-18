const result=document.getElementById('result');
const filter=document.getElementById('filter');
const listItems=[]


filter.addEventListener('input',(e)=>filterData( e.target.value))
getData(300)
async function getData(numberOfResult){
    const res=await fetch(`https://randomuser.me/api?results=${numberOfResult}`);
    const {results}= await res.json();
  //console.log(results);
   //clearing result
   result.innerHTML=''

    results.forEach(user => {
        const li=document.createElement('li')
        
        listItems.push(li);

        li.innerHTML=`
        <img src=" ${user.picture.large}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.country}</p>
        </div>
        `

        result.appendChild(li)

       
    });
}



function filterData(searchTerm){
listItems.forEach(item=>{
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        item.classList.remove("hide")
    }else{
        item.classList.add("hide")
    }
})
}

