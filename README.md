# 🍰 Delicious Home Made Cake (HMC)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github)

Welcome to the frontend of the **Delicious Cake Shop**! This project is a responsive, elegantly designed e-commerce UI built entirely with Vanilla JavaScript, HTML, and CSS. It focuses on clean architecture, modern ES6+ practices, and solid Object-Oriented Programming principles.

### 🌐 Live Demo
You can view the fully functioning live version of the shop here:  
**[👉 Click here to visit Delicious Cake Shop on GitHub Pages](https://stevenashrafkamal.github.io/Cake-Shop/)**

---

> **⚠️ A Note on Our "Unique" Cake Selection (The API Joke):**
> If you browse the store right now, you might notice that our cake shop currently sells Apples, Beef Steaks, and... Cat Food? 🥩🐈
> Don't panic, the baker hasn't lost his mind! This project currently uses a mock data API (`dummyjson.com/groceries`) strictly as a playground to test the frontend data-fetching and rendering logic. The *real* API is currently baking in the oven. A robust Node.js/MEAN Stack backend is on the way to replace the cat food with actual Red Velvet and Cheesecake! 

## 🚀 Features & Skills Demonstrated

* **Dynamic Data Fetching:** Asynchronously loads products using the `Fetch API` and renders them on the fly.
* **Object-Oriented Programming (OOP):** The entire application logic is encapsulated within a scalable `CakeStore` class.
* **Data Encapsulation:** Strict implementation of JavaScript Private Class Features (`#apiUrl`, `#fetchCakes()`) to protect internal states.
* **Clean UI/UX:** A responsive, simple, and user-friendly interface mapped across multiple HTML pages (`index`, `details`, `cart`).
* **Error Handling:** Graceful `try/catch` implementation ensuring the UI doesn't break if the API fails.

## 🛠️ How to Install & Run Locally

If you want to clone this repository and run it on your local machine, follow these simple steps:

### Prerequisites
* A modern web browser (Chrome, Edge, Firefox, etc.)
* [Git](https://git-scm.com/) installed on your machine.
* *(Optional but recommended)* VS Code with the "Live Server" extension to avoid CORS issues when fetching data.

### Installation Steps

1. **Clone the repository:**
   Open your terminal and run the following command:
   ```bash
   git clone [https://github.com/stevenashrafkamal/delicious-cake-shop.git](https://github.com/stevenashrafkamal/delicious-cake-shop.git)
   ```
   Navigate to the project directory:

```Bash
cd delicious-cake-shop
```
Run the project:

Method 1 (Simplest): Just double-click the index.html file in your file explorer to open it in your browser.

Method 2 (Recommended): Open the folder in VS Code, right-click on index.html, and select "Open with Live Server".

## 📁 Project Structure
```Plaintext
├── index.html       # Main entry point, hero section, and dynamic cake list
├── details.html     # Detailed view of a selected product
├── cart.html        # Manages selected items
├── style.css        # Custom styling and responsive design
├── script.js        # OOP logic, API fetching, and DOM manipulation
└── README.md        # Project documentation
```
## 👨‍💻 About the Developer
Crafted with passion by Steven, a Full-Stack Developer specializing in the MEAN stack and .NET. I love writing clean code, building structured logic, and (apparently) tricking people into buying groceries at a cake shop.
