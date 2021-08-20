// const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"
// const headers = new Headers ({
//     "Method": "GET",
//     "Content-Type": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGU3MTJkNTI2MjAwMTViNmRkMjEiLCJpYXQiOjE2MjkyOTQxOTMsImV4cCI6MTYzMDUwMzc5M30.XnOQr6Fx7ZY9OeWqYLc-CFjUxNxppJwzs8h_dVJmGzc"
// })


// const getProduct =   (callback) => {
//        fetch(BASE_URL, {headers})
//        .then((response) => response.json())
//        .then((data) => 
//        callback(null, data))
//        console.log("something")
//        .catch((error) =>
//         callback(error, null))
//        }
//        window.onload = () => {
//              getProduct((error, data) => {
//                  if (error) {
//                      console.log({error})
//                  } else {
//                      console.log({data})
//                      const content = document.getElementById("products")
//                      content.innerHTML = ``
//                      data.forEach((product) => {
//                          content.innerHTML += `
//                          <div class="card" style="width: 18rem;">
//   <img src="${product.imageUrl}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${product.name}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//                          `
//                      });
//                  }
//              })
//           }
        
//  if (!response.ok) 
//  throw new Error("Download failed")   
//  if (response.ok) {
//      const data = await response.json()
//      .then(data => generateProducts(data))
//      console.log(data);
//  }
// }
//  catch(err) {
//         console.error(err);
//     }  
//  } 
// let productCards = document.getElementsByName("row")
//  const generateProducts = (productData) => {
//      productData.forEach(element => {
//          productCards.innerHtml += `<div class="card">
//          <img src="${element.imageUrl}" class="card-img-top" alt="...">
//          <div class="card-body">
//            <h5 class="card-title">${element.name}</h5>
//            <p>${element.brand}</p>
//            <p>${element.price}</p>
//            <p class="${element.description}</p>
//            </div>
//        </div>
         
//          `
//      });
//  }
    
//  window.onload = () => {
//      getProduct().then(data => console.log(data))
//  }

let response =  fetch('https://striveschool-api.herokuapp.com/api/product/', {
   
    "method": "GET",
 
    headers: new Headers({
        'Content-Type': 'application/json'  ,
             "Content-Type": "application/json",
       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGU3MTJkNTI2MjAwMTViNmRkMjEiLCJpYXQiOjE2MjkyOTQxOTMsImV4cCI6MTYzMDUwMzc5M30.XnOQr6Fx7ZY9OeWqYLc-CFjUxNxppJwzs8h_dVJmGzc",
  
    })
})

console.log(response)

