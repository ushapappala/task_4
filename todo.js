body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #f5f5f5;
}

header {
  background-color: #007BFF;
  color: white;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
}

section {
  padding: 2rem;
  background: white;
  margin: 1rem;
  border-radius: 10px;
}

input, textarea, select, button {
  display: block;
  margin: 0.5rem 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
}

button {
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}

ul {
  padding-left: 20px;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.product-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
