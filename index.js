


const getProduct = async () => {
       try {
 const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
method: 'POST',
body: products,
 headers: {
"Content-Type": "application/json",    
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGU3MTJkNTI2MjAwMTViNmRkMjEiLCJpYXQiOjE2MjkyOTQxOTMsImV4cCI6MTYzMDUwMzc5M30.XnOQr6Fx7ZY9OeWqYLc-CFjUxNxppJwzs8h_dVJmGzc"
},
}
)
 if (!response.ok) 
 throw new Error("Download failed")   
 if (response.ok) {
     const data = await response.json()
     console.log(data);
 }
}
 catch(err) {
        console.error(err);
    }  
 } 
    
 window.onload = () => {
     getProduct().then(data => console.log(data))
 }

