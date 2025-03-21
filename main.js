const productList = document.getElementById("product-list");

// Fetch products from FakeStore API
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    productList.innerHTML = products
      .slice(0, 15) // Show only 6 products
      .map(
        (product) => `
          <div class="bg-white text-black p-5 rounded-lg shadow-lg">
            <img src="${product.image}" alt="${product.title}" class="w-full h-40 object-contain">
            <h3 class="text-xl font-semibold mt-3">${product.title}</h3>
            <p class="text-gray-700">${product.description.substring(0, 80)}...</p>
            <p class="font-bold text-blue-600 mt-2">$${product.price}</p>
          </div>
        `
      )
      .join("");
  })
  .catch((error) => console.error("Error fetching products:", error));
