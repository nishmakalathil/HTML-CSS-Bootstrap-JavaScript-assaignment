fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(json => {
    let productEl = "";
    for(let product of json) {
        productEl += `
         <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 product">
              <div class="card h-100 text-center shadow-sm">
                  <img src="${product.image}" class="card-img-top w-50 mx-auto p-5" alt="${product.title}">
                  <div class="card-body d-flex flex-column">
                      <h5 class="card-title mb-2">${product.title}</h5>
                      <p class="card-text mt-auto">$${product.price}</p>
                      <div class="mt-2">
                          <a href="#" class="btn btn-primary">View product</a>
                      </div>
                  </div>
              </div>
          </div>`;
    };
    let productList = document.getElementById("product-list");
    productList.innerHTML = productEl;
});


function filterItems() {
const filter = document.getElementById("search-input").value.toUpperCase(); 
const products = document.querySelectorAll(".product"); 

for(let product of products) {
    const title = product.querySelector(".card-title").innerText; 
    if (title.toUpperCase().indexOf(filter) > -1) {
        product.style.display = ""; 
    } else {
        product.style.display = "none"; 
    }
};
}

