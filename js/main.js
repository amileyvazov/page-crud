document.readyState({

    const fetched = fetch('https://646b5a2d7d3c1cae4ce3adf5.mockapi.io/api/JSON/PRODUCT',{
        method:"POST",
        headers:{
            "Content-Types":"application/json"
        },
        body:{
          name:"Wooden container Bowl",
          img:"https://outstock-vue.vercel.app/_nuxt/product_2.2fad43bb.png",
          text:"",
        },
    })
    .then(res => res.json())
    .then(json=>json.forEach(el => {
        card.innerHTML +=`<div class="card-head">
        <img src="${data.img}" alt="">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-sliders"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="card-body">
        <h2>${data.text}</h2>
        <p><span></span></p>
        <a href=""><span></span></a>
    </div> `
    })
    )
    .catch(err =>console.log(err))
}

)
