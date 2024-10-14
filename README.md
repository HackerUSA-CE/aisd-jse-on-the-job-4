
# JavaScript Essentials On the Job 4

## Project Description 📄

Welcome back to your **JavaScript Essentials** "On the Job" project! This week, you’ve been assigned a new task: **adding descriptions** to your store’s products. To manage this additional product information efficiently, you’ll **refactor the product data into objects**. Each object will store the product’s name, price, and description in a single structure, making the code more organized and maintainable.

Additionally, you will continue using **modern JavaScript methods**, such as **push**, **pop**, **sort**, **map**, and **forEach**, to dynamically manage and display your products. This refactoring ensures the code remains scalable as your store's inventory grows.

---

### In this project, you will:
- **Refactor product data into objects** to manage name, price, and description.
- **Use arrow functions** to manage inventory operations efficiently.
- **Add new products** to the store with the `push()` method.
- **Remove products** from the store with the `pop()` method.
- **Sort products** by name and price with the `sort()` method.
- **Display inventory dynamically** using the `map()` and `forEach()` methods.

---

## Updated Object Management Using `map()` and `forEach()`

The product data will now be refactored into **objects**. Each object will store:

- **`name`**: The name of the product.  
- **`price`**: The price of the product.  
- **`description`**: A brief description of the product.

Here is an example of the new product structure:

```javascript
{
  name: "Dog Food",
  price: 29.99,
  description: "Nutritious food for dogs."
}
```

This structure allows you to store all related data in one place and streamline product management using **JavaScript’s array methods**.

---

### Methods Overview:
- **`push()`**: Adds a new product object to the end of the inventory array.
- **`pop()`**: Removes the last product from the inventory.
- **`sort()`**: Sorts products either by name or price.
- **`map()`**: Transforms the product objects to prepare them for display.
- **`forEach()`**: Iterates through products to log their details.

---

## Project Scenario 📄

The store has decided to provide more information for each product by **adding descriptions**. A senior developer reviewed your code and recommended **refactoring the product and price arrays into objects**. This change will improve the code’s **readability, scalability, and maintainability** by grouping each product’s details together.

With the new object structure, you will also **modify existing functions** to handle product objects, ensuring that all features—such as adding, removing, sorting, and displaying products—continue to work seamlessly.

---

## Refactor Requirements:

1. **Refactor the product data into objects** with the following properties:
   - **`name`**: The product’s name.
   - **`price`**: The product’s price.
   - **`description`**: A short description of the product.

2. **Update all functions** to handle the new **array of product objects**.

3. **Add new products** using the `push()` method.

4. **Remove the last product** using the `pop()` method.

5. **Sort the products** alphabetically by name and numerically by price using the `sort()` method.

6. **Display product information dynamically** using `map()` and `forEach()`.

##

 ## Resources 📦

Free stock images and videos can be downloaded at https://www.pexels.com.

Utilize documentation such as [W3 Schools](https://www.w3schools.com/) and [MDN](https://developer.mozilla.org/en-US/) for all things related to HTML and CSS.

Use AI tools such as ChatGPT and Claude to help you learn. As you integrate AI tools into your learning process, it's essential to use them responsibly. AI can be a powerful resource to assist you, but it’s important to ensure that you truly understand and engage with the content it generates. This will not only enhance your learning experience but also help you develop critical thinking and problem-solving skills.

 ##

## Checkpoint 4 ✋

## Project Structure from Last Week 🏗️
Your folder name may vary based on your selection of the eCommerce store type.

```plaintext
PawsClawsPetStore/
│
├── index.js
├── README.md
```
##

## Deliverables ✅

# 1. **Locate and Navigate to Your Project Folder**

  You should locate the folder where you saved last week’s project and continue working from there. No need to start a new project from scratch.
  
  - [ ] Find and navigate to the folder from last week's project, for example: `PawsClawsPetStore` or the folder you named based on your client.
  
  - [ ] `cd` into that folder from the terminal to access your project code.

  - [ ] Inside this folder, continue working in your existing `index.js` file, which you set up last week.

  ---

## 2. **Starting from Last Week’s Data**

The goal here is to **remove all of last week’s code** below the variable declarations to prepare for a **clean starting point**. This will allow us to focus on refactoring the data structure and functions more effectively.

**Note:** Keep only the variable declarations that will not be refactored into objects. 

Your code may look different based on your own selection of an eCommerce site and products.

Here is an example starting point:

```javascript
// Store details as flat variables
const storeName = "Paws & Claws";
const storeType = "Pet Store";
const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";
```

By stripping away the previous logic, we can rebuild the functionality using **functions** and **array methods** to achieve the same results with a more **modular and maintainable codebase**.

##

## 3. **Creating Product Objects**

In this step, you’ll **refactor the product data into individual objects** stored within an array. Each product object will contain three key properties: **name, price, and description**. This approach ensures the product details are well-organized and easier to manage for future operations.



- [ ] Create a **products array** where each product is represented as an **object** with three properties:  
  - **`name`**: The product’s name.  
  - **`price`**: The product’s price.  
  - **`description`**: A brief description of the product.

  Remember, this is an example product structure that should be based on your individual selection of an eCommerce site and products:

```javascript
// Product list as individual objects in a flat array
const products = [
  { name: "Dog Food", price: 29.99, description: "Premium food for dogs of all ages." },
  { name: "Cat Litter", price: 15.49, description: "Odor control for your feline friend." },
  { name: "Bird Seed", price: 12.99, description: "Nutritional mix for all types of birds." },
  { name: "Fish Tank", price: 89.99, description: "Spacious tank with built-in filter." },
  { name: "Hamster Cage", price: 34.5, description: "Comfortable home for small pets." },
];
```

### Explanation:

- **`products` Array**: Stores all product objects together, simplifying product management.

- **Product Objects**: Each product is represented as an object with:
  - **`name`**: The product’s name.
  - **`price`**: The product’s price in dollars.
  - **`description`**: A brief description of the product.

Refactoring the product data into objects provides a clean and scalable way to handle product information. This structure will make it easier to perform operations such as **adding, removing, and sorting** products using JavaScript’s array methods.

##

# Step 4: Logging Store Information

In this step, you will use basic functions to log the store’s information. The `logMessage` function will ensure consistency across console outputs, and the `displayStoreInfo` function will format and display the store’s name and type. These functions help maintain a clean code structure and centralize logging operations.

### Goal:
The goal is to write a reusable function called `logMessage()` to log messages, and another function called `displayStoreInfo()` to display the store’s name and type.

- [ ] Write a function called `logMessage()` that takes a message as a parameter and logs it to the console.

```javascript
// Reusable logging function
const logMessage = (message) => {
  console.log(message);
};

  - [ ] Write a function called `displayStoreInfo()` that accepts the store’s `name` and `type` as parameters and logs a welcome message using `logMessage()`.
  
// Function to display store info
const displayStoreInfo = (name, type) => {
  logMessage(`Welcome to ${name}! We are the best ${type} in town.`);
};
```

### Explanation:
  - **`logMessage`**: A reusable function that takes a message as a parameter and logs it to the console. This ensures consistent logging across the application.
  - **`displayStoreInfo`**: A function that formats and displays a welcome message including the store’s name and type. It uses `logMessage()` to handle the console output.

By centralizing logging in `logMessage()`, any future changes to logging behavior can be made in one place. This approach ensures the code remains easy to maintain and extend.

##

# Step 5: Displaying All Products and Their Details

In this step, you will create a function that displays the store’s products along with their details—name, price, and description. When calling this function, you will **pass in the array of product objects** created earlier. This ensures the function dynamically handles the product data, leveraging JavaScript’s `forEach()` method to log each product’s information using the `logMessage()` function.

### Goal:
The goal is to write a function called `displayProducts()` that accepts the `productList` array as a parameter and logs each product’s name, price, and description using `logMessage()`.

- [ ] Write a function called `displayProducts()` that takes the `productList` as a parameter and uses `forEach()` to log the product details.

```javascript
// Function to display all products and their details
const displayProducts = (productList) => {
  logMessage("Here are the products we currently offer:");
  productList.forEach((product) =>
    logMessage(`${product.name}: $${product.price} - ${product.description}`)
  );
};
```

### Explanation:
- **Parameter**: The function accepts `productList`, which is the array of product objects you created in Step 3.
- **forEach Method**: The function uses `forEach()` to iterate over the `productList` and log each product’s details.
- **Dynamic Output**: Each product’s name, price, and description are displayed dynamically using the `logMessage()` function instead of directly calling `console.log()`.

By passing the **product objects** into `displayProducts()`, the function ensures the product data remains flexible and easy to update. This approach keeps the code modular and consistent with best practices.

##

# Step 6: Adding a New Product

In this step, you will create a function to **add a new product object** to the `productList` array. This function will use the `push()` method to add the new product and then call the `displayProducts()` function to show the updated list of products.

### Goal:
The goal is to write a function called `addProduct()` that accepts two parameters: the `productList` array and the new `product` object to be added.

- [ ] Write a function called `addProduct()` that adds a new product object to the `productList` using the `push()` method and displays the updated product list.

```javascript
// Function to add a product
const addProduct = (productList, product) => {
  productList.push(product);
  logMessage(`We've added a new product! ${product.name} for $${product.price}`);
  displayProducts(productList);
};
```

### Explanation:
- **Parameters**: 
  - `productList`: The array of product objects.
  - `product`: The new product object to be added.
- **`push()` Method**: Adds the new product object to the end of the `productList` array.
- **Logging**: Uses `logMessage()` to confirm the addition of the new product.
- **Displaying Products**: Calls `displayProducts()` to show the updated product list.

By using this function, you can easily **add new products dynamically** and immediately see the results, ensuring the product list stays up-to-date.

##

# Step 7: Removing the Last Product

In this step, you will create a function that **removes the last product** from the `productList` array. This function uses the `pop()` method to remove the last item and then calls the `displayProducts()` function to show the updated product list. Once again, we will use the **`logMessage()` function** to log messages consistently throughout the application.

### Goal:
The goal is to write a function called `removeLastProduct()` that removes the last product from the `productList` using the `pop()` method and displays the updated product list.

- [ ] Write a function called `removeLastProduct()` that removes the last product object and logs the change using `logMessage()`.

```javascript
// Function to remove the last product
const removeLastProduct = (productList) => {
  const removedProduct = productList.pop();
  logMessage(`Unfortunately, ${removedProduct.name} is out of stock.`);
  displayProducts(productList);
};
```

### Explanation:
- **Parameter**: The function takes `productList` as input, which is the array of product objects.
- **`pop()` Method**: Removes the last product object from the `productList` array.
- **Logging**: Uses `logMessage()` to log the removal of the product in a readable format.
- **Displaying Products**: Calls `displayProducts()` to reflect the updated product list after a product is removed.

### Why Use `logMessage()`?  
By using the reusable `logMessage()` function instead of calling `console.log()` directly, we **save time** and **make our code more readable**. This function centralizes our logging logic, ensuring that any future changes only need to be made in one place. It promotes **consistent formatting** and reduces code repetition, making the application easier to maintain.

## 


# Step 8: Displaying Featured Products Sorted Alphabetically

In this step, you will create a function that displays a specified number of **featured products** sorted alphabetically by their names. This function leverages JavaScript’s `sort()` and `slice()` methods to manage the product data and uses the `logMessage()` function for consistent logging.

### Goal:
Write a function called `displayFeaturedProducts()` that sorts the product list alphabetically and logs a specified number of featured products.

- [ ] Write a function called `displayFeaturedProducts()` that takes the `productList` and a `count` parameter to display a limited number of featured products sorted alphabetically.

```javascript
// Function to display featured products sorted alphabetically
const displayFeaturedProducts = (productList, count) => {
  const sortedProducts = [...productList].sort((a, b) => a.name.localeCompare(b.name));
  logMessage("This week, our featured products are:");
  sortedProducts.slice(0, count).forEach((product) => logMessage(product.name));
};
```

### Explanation:
- **Parameters**: 
  - `productList`: The array of product objects.
  - `count`: The number of featured products to display.
- **`sort()` Method**: Creates a new sorted array of products by their names in alphabetical order.
- **`slice()` Method**: Selects only the top `count` products from the sorted list.
- **Logging**: Uses `logMessage()` to log the featured products consistently.

### What is the Spread Operator `...`?
The `...` (spread operator) is used here to create a **shallow copy** of the `productList` array. This prevents modifications to the original array when sorting the products. Think of the spread operator as **"unpacking"** the elements of an array into a new one.

For example:
```javascript
const original = [1, 2, 3];
const copy = [...original]; // Creates a copy of the original array
```
This ensures that changes to the `copy` don’t affect the `original` array, keeping your data safe from unintended side effects.

---

# Step 9: Sorting Products by Price (Low to High)

In this step, you will create a function to **sort the products by their price** in ascending order. The function uses the `sort()` method to sort the product list and `logMessage()` to display the sorted products.

### Goal:
Write a function called `sortProductsByPrice()` that sorts the products by their prices in ascending order and logs the sorted list.

- [ ] Write a function called `sortProductsByPrice()` that sorts the `productList` by price and logs the result.

```javascript
// Function to sort products by price (low to high)
const sortProductsByPrice = (productList) => {
  const sortedProducts = [...productList].sort((a, b) => a.price - b.price);
  logMessage("Products sorted by price (low to high):");
  sortedProducts.forEach((product) => logMessage(`${product.name}: $${product.price}`));
};
```

### Explanation:
- **Parameter**: The function takes `productList` as input, which is the array of product objects.
- **`sort()` Method**: Sorts the products by their price in ascending order.
- **Logging**: Uses `logMessage()` to display the sorted product list.

### Again, Why Use the Spread Operator `...`?
Here, we use the spread operator once more to **create a new array** from the `productList`. This ensures that the original array remains unchanged while sorting. This is especially useful when we need to preserve the original product data for future operations.

For example:
```javascript
const original = [{ price: 10 }, { price: 5 }];
const sorted = [...original].sort((a, b) => a.price - b.price); // Original stays intact
```

Using the spread operator ensures our data remains consistent, preventing unintended changes to the original list.

### Why Use `logMessage()` over and over again ?
The `logMessage()` function helps maintain **consistency** across the application and avoids repetitive code. If any adjustments are needed in how we display messages, we only need to update the `logMessage()` function in one place.

##

# Step 10: Calling the Functions

In this final step, you will **bring all the functions together** by calling them in sequence. Each function will perform a specific task, such as displaying store information, adding or removing products, and sorting or displaying featured items. By organizing the function calls, you ensure the application flows logically and produces the desired output.

### Goal:
Call all the necessary functions in the correct order to showcase your store’s products and manage inventory.

## 10a: Initial Display of Store Information
- [ ] Call the `displayStoreInfo()` function to show the store’s name and type.

```javascript
displayStoreInfo(storeName, storeType);
```

**Explanation**:  
This function logs a welcoming message with the store’s name and type, using the reusable `logMessage()` function for consistent output.

---

## 10b: Displaying the Products
- [ ] Call the `displayProducts()` function to show the store's current products and their details.

```javascript
displayProducts(products);
```

**Explanation**:  
This function loops through the `products` array and logs each product's name, price, and description using `forEach()`. It ensures that customers can see what the store currently offers.

---

## 10c: Adding a New Product
- [ ] Add a new product by calling the `addProduct()` function.

```javascript
addProduct(products, {
  name: "Pet Shampoo",
  price: 12.0,
  description: "Gentle shampoo for pets with sensitive skin.",
});
```

**Explanation**:  
This function uses the `push()` method to add the new product object to the `products` array. It then calls `displayProducts()` to log the updated product list, confirming that the product has been added.

---

## 10d: Removing the Last Product
- [ ] Call the `removeLastProduct()` function to remove the last product from the list.

```javascript
removeLastProduct(products);
```

**Explanation**:  
This function uses the `pop()` method to remove the last product from the `products` array. It logs a message indicating the product is out of stock and displays the updated product list.

---

## 10e: Displaying Featured Products (Top 3)
- [ ] Call the `displayFeaturedProducts()` function to showcase the top 3 products.

```javascript
displayFeaturedProducts(products, 3);
```

**Explanation**:  
This function sorts the `products` array alphabetically and displays the top 3 products. It uses `slice()` to limit the number of products displayed and logs them using `logMessage()`.

---

## 10f: Sorting and Displaying Products by Price
- [ ] Call the `sortProductsByPrice()` function to sort and display the products by price.

```javascript
sortProductsByPrice(products);
```

**Explanation**:  
This function sorts the products by price in ascending order using the `sort()` method. It logs the sorted products, allowing customers to view items from the least to the most expensive.

---

## 10g: Closing Logs
- [ ] Use `logMessage()` to display a friendly closing message and the store hours.

```javascript
logMessage(`Thanks for visiting ${storeName}`);
logMessage(`Here are our store hours for reference: ${storeHours}`);
```

**Explanation**:  
These calls to `logMessage()` display a closing message thanking customers for visiting and provide the store's operating hours.

---

### Summary:
By following these steps, you ensure the functions work together to provide a smooth and dynamic experience. The application welcomes customers, displays products, handles inventory changes, and sorts or highlights featured items as needed.

##

## 11. **Running Your Code with Node.js and Viewing the Output**

Now that your code is complete, it's time to **run your JavaScript program** using Node.js and review the output.

### Step Instructions:
- [ ] **Open the terminal** and navigate to your project folder:

```bash
cd path/to/your/project
```

- [ ] **Run your `index.js` file** with Node.js:

```bash
node index.js
```

### Expected Output:
Based on your eCommerce selection and personalized product details, your terminal output should look similar to the following:

```bash
Welcome to Paws & Claws! We are the best Pet Store in town.
Here are the products we currently offer:
Dog Food: $29.99 - Premium food for dogs of all ages.
Cat Litter: $15.49 - Odor control for your feline friend.
Bird Seed: $12.99 - Nutritional mix for all types of birds.
Fish Tank: $89.99 - Spacious tank with built-in filter.
Hamster Cage: $34.50 - Comfortable home for small pets.
We've added a new product! Pet Shampoo for $12
Dog Food: $29.99 - Premium food for dogs of all ages.
Cat Litter: $15.49 - Odor control for your feline friend.
Bird Seed: $12.99 - Nutritional mix for all types of birds.
Fish Tank: $89.99 - Spacious tank with built-in filter.
Hamster Cage: $34.50 - Comfortable home for small pets.
Pet Shampoo: $12.00 - Gentle shampoo for pets with sensitive skin.
Unfortunately, Pet Shampoo is out of stock.
Dog Food: $29.99 - Premium food for dogs of all ages.
Cat Litter: $15.49 - Odor control for your feline friend.
Bird Seed: $12.99 - Nutritional mix for all types of birds.
Fish Tank: $89.99 - Spacious tank with built-in filter.
Hamster Cage: $34.50 - Comfortable home for small pets.
This week, our featured products are:
Bird Seed
Cat Litter
Dog Food
Products sorted by price (low to high):
Bird Seed: $12.99
Cat Litter: $15.49
Hamster Cage: $34.50
Dog Food: $29.99
Fish Tank: $89.99
Thanks for visiting Paws & Claws!
Here are our store hours for reference: Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed
```

### Explanation:
- **Dynamic Data Handling**: Your code dynamically handles product addition, removal, sorting, and logging.
- **Array Methods in Action**: You’ve seen how `push()`, `pop()`, `sort()`, `map()`, and `forEach()` manipulate and display product data.
- **Customer-Facing Message**: The output simulates how an eCommerce store might display updated inventory and messages for customers.

If everything runs as expected, congratulations! You’ve successfully completed your store inventory system.

---

## 12. **Pushing Your Code to GitHub**

After verifying your code works, it’s time to **save it to your GitHub repository** to ensure your work is backed up and version-controlled.

### Step Instructions:
- [ ] **Stage your changes**:

```bash
git add .
```

- [ ] **Commit your changes** with a meaningful message:

```bash
git commit -m "Refactored product data into objects and added inventory functions"
```

- [ ] **Push your changes** to the `main` branch:

```bash
git push origin main
```

### Verifying the Push:
- [ ] **Open your GitHub repository** in a browser.
- [ ] Confirm that the latest commit appears and contains your updated code.

By following these steps, you’ve successfully **pushed your refactored code to GitHub**. Your work is now backed up and accessible for further development or collaboration.

# Conclusion 📄

In this assignment, you successfully built a dynamic system for managing a store’s inventory using JavaScript arrays, objects, and array methods. 
By refactoring the product data into objects, you streamlined the structure, grouping related information like name, price, and description into a single place. This improved the code's readability, scalability, and maintainability.

You’ve learned how to:
  - Add new products
  - Remove out-of-stock items
  - Highlight featured products
  - Sort and display products by price
  - Prepare a customer message complete with store hours

These skills are essential for managing data in real-world applications, particularly in eCommerce environments where inventory and messaging must be updated frequently.

As you continue to progress, you’ll build on this foundation to create more complex systems, further enhancing your ability to manage and present data dynamically.

---

# Grading Criteria 💯

| Criteria                                   | Exemplary Performance (Full Marks) | Proficient Performance (Partial Marks) | Developing Performance (Half Marks) | Needs Improvement (No Marks) |
|--------------------------------------------|------------------------------------|----------------------------------------|-------------------------------------|------------------------------|
| **Technical Acceptance Criteria (60 pts)** | 54-60                              | 42-53                                  | 30-41                               | 0-29                         |
| **Workflow Appropriacy (15 pts)**          | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **Documentation (15 pts)**                 | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **User Experience (10 pts)**               | 9-10                               | 7-8                                    | 5-6                                 | 0-4                          |

## ### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-on-the-job-4/tree/solution) (link not shown).


---
© All rights reserved to ThriveDX# aisd-jse-on-the-job-4



