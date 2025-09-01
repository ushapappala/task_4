<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Products</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <nav>
      <h1>Product Listings</h1>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="todo.html">To-Do App</a></li>
      </ul>
    </nav>
  </header>

  <section>
    <h2>Filter & Sort</h2>
    <select id="categoryFilter">
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>

    <select id="sortPrice">
      <option value="default">Sort by Price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>

    <div id="productList"></div>
  </section>

  <script src="js/products.js"></script>
</body>
