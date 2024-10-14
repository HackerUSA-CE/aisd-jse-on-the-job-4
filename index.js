// Store details as flat objects
const storeName = "Paws & Claws";
const storeType = "Pet Store";
const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

// Product list as individual objects in a flat array
const products = [
  { name: "Dog Food", price: 29.99, description: "Premium food for dogs of all ages." },
  { name: "Cat Litter", price: 15.49, description: "Odor control for your feline friend." },
  { name: "Bird Seed", price: 12.99, description: "Nutritional mix for all types of birds." },
  { name: "Fish Tank", price: 89.99, description: "Spacious tank with built-in filter." },
  { name: "Hamster Cage", price: 34.5, description: "Comfortable home for small pets." },
];

// Reusable logging function
const logMessage = (message) => {
  console.log(message);
};

// Function to display store info
const displayStoreInfo = (name, type) => {
  logMessage(`Welcome to ${name}! We are the best ${type} in town.`);
};

// Function to display all products and their details
const displayProducts = (productList) => {
  logMessage("Here are the products we currently offer:");
  productList.forEach((product) => logMessage(`${product.name}: $${product.price} - ${product.description}`));
};

// Function to add a product
const addProduct = (productList, product) => {
  productList.push(product);
  logMessage(`We've added a new product! ${product.name} for $${product.price}`);
  displayProducts(productList);
};

// Function to remove the last product
const removeLastProduct = (productList) => {
  const removedProduct = productList.pop();
  logMessage(`Unfortunately, ${removedProduct.name} is out of stock.`);
  displayProducts(productList);
};

// Function to display featured products sorted alphabetically
const displayFeaturedProducts = (productList, count) => {
  const sortedProducts = [...productList].sort((a, b) => a.name.localeCompare(b.name));
  logMessage("This week, our featured products are:");
  sortedProducts.slice(0, count).forEach((product) => logMessage(product.name));
};

// Function to sort products by price (low to high)
const sortProductsByPrice = (productList) => {
  const sortedProducts = [...productList].sort((a, b) => a.price - b.price);
  logMessage("Products sorted by price (low to high):");
  sortedProducts.forEach((product) => logMessage(`${product.name}: $${product.price}`));
};

// Initial display
displayStoreInfo(storeName, storeType);
displayProducts(products);

// Add a new product
addProduct(products, {
  name: "Pet Shampoo",
  price: 12.0,
  description: "Gentle shampoo for pets with sensitive skin.",
});

// Remove the last product
removeLastProduct(products);

// Display featured products (top 3)
displayFeaturedProducts(products, 3);

// Sort and display products by price
sortProductsByPrice(products);

// Closing logs
logMessage(`Thanks for visiting ${storeName}`);
logMessage(`Here are our store hours for reference: ${storeHours}`);
