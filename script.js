//your code here
let pageNumberHere = 1;
let btn_prev = document.getElementById("load_prev")
let btn_Next = document.getElementById("load_next")
let list     = document.getElementById("list");
let heading = document.getElementById('heading');

async function getData(){
	const response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
    const data = await response.json();
    console.log(data);
    let users = " "
    data.map((item)=>{
         users+= `<li>${item.title}</li>`
    })
    list.innerHTML = users;

    if (pageNumberHere == 1) {
        btn_prev.disabled = true;
      } else {
        btn_prev.disabled = false;
      }
}




btn_prev.addEventListener("click",function(){
		 pageNumberHere = pageNumberHere - 1;
         getData();
         heading.innerHTML = `Page number ${pageNumberHere}`

})


btn_Next.addEventListener("click",function(){
		 pageNumberHere = pageNumberHere  + 1;
         getData();
         heading.innerHTML = `Page number ${pageNumberHere}`
})

getData();


