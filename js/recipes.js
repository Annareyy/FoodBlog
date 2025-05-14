document.addEventListener("DOMContentLoaded", () => {
  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: "Creamy Garlic Parmesan Pasta",
      description: "A delicious pasta dish with a rich and creamy garlic parmesan sauce...",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      date: "May 10, 2025",
      category: "Dinner",
      prepTime: 15,
      cookTime: 20,
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a warm, gooey center that flows like lava...",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
      date: "May 8, 2025",
      category: "Dessert",
      prepTime: 20,
      cookTime: 15,
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Avocado Toast with Poached Eggs",
      description: "A nutritious and delicious breakfast option that's quick and easy to make...",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 6, 2025",
      category: "Breakfast",
      prepTime: 10,
      cookTime: 5,
      difficulty: "Easy",
    },
    {
      id: 4,
      title: "Lemon Herb Roasted Chicken",
      description: "Juicy roasted chicken with bright lemon and aromatic herbs...",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
      date: "May 4, 2025",
      category: "Dinner",
      prepTime: 20,
      cookTime: 90,
      difficulty: "Medium",
    },
    {
      id: 5,
      title: "Fresh Garden Salad",
      description: "A refreshing salad with garden-fresh vegetables and a tangy vinaigrette...",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 2, 2025",
      category: "Lunch",
      prepTime: 15,
      cookTime: 0,
      difficulty: "Easy",
    },
    {
      id: 6,
      title: "Berry Smoothie Bowl",
      description: "A nutritious and colorful breakfast bowl packed with fresh berries and toppings...",
      image:
        "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "April 30, 2025",
      category: "Breakfast",
      prepTime: 10,
      cookTime: 0,
      difficulty: "Easy",
    },
    {
      id: 7,
      title: "Homemade Pizza",
      description: "Create your own delicious pizza with a crispy crust and your favorite toppings...",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "April 28, 2025",
      category: "Dinner",
      prepTime: 30,
      cookTime: 15,
      difficulty: "Medium",
    },
    {
      id: 8,
      title: "Vegetable Soup",
      description: "A hearty and nutritious soup packed with fresh vegetables and herbs...",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      date: "April 26, 2025",
      category: "Lunch",
      prepTime: 20,
      cookTime: 40,
      difficulty: "Easy",
    },
    {
      id: 9,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with gooey chocolate chips and a soft center...",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "April 24, 2025",
      category: "Dessert",
      prepTime: 15,
      cookTime: 12,
      difficulty: "Easy",
    },
  ]

  const recipeGrid = document.getElementById("recipe-grid")
  const recipeSearch = document.getElementById("recipe-search")
  const prevPageBtn = document.getElementById("prev-page")
  const nextPageBtn = document.getElementById("next-page")
  const categoryRadios = document.querySelectorAll('input[name="category"]')
  const difficultyRadios = document.querySelectorAll('input[name="difficulty"]')
  const timeRadios = document.querySelectorAll('input[name="time"]')
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

  let currentPage = 1
  const recipesPerPage = 6
  let filteredRecipes = [...recipes]

  // Initialize
  displayRecipes()

  // Event listeners
  recipeSearch.addEventListener("input", filterRecipes)
  prevPageBtn.addEventListener("click", () => {
    currentPage--
    displayRecipes()
  })
  nextPageBtn.addEventListener("click", () => {
    currentPage++
    displayRecipes()
  })

  categoryRadios.forEach((radio) => {
    radio.addEventListener("change", filterRecipes)
  })

  difficultyRadios.forEach((radio) => {
    radio.addEventListener("change", filterRecipes)
  })

  timeRadios.forEach((radio) => {
    radio.addEventListener("change", filterRecipes)
  })

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      const dropdown = toggle.parentElement
      dropdown.classList.toggle("active")

      // Close other dropdowns
      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.parentElement.classList.remove("active")
        }
      })

      e.stopPropagation()
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdownToggles.forEach((toggle) => {
      toggle.parentElement.classList.remove("active")
    })
  })

  // Filter recipes based on search and filters
  function filterRecipes() {
    const searchTerm = recipeSearch.value.toLowerCase()
    const selectedCategory = document.querySelector('input[name="category"]:checked').value
    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value
    const selectedTime = document.querySelector('input[name="time"]:checked').value

    filteredRecipes = recipes.filter((recipe) => {
      // Search term filter
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm)

      // Category filter
      const matchesCategory = selectedCategory === "all" || recipe.category.toLowerCase() === selectedCategory

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === "all" || recipe.difficulty.toLowerCase() === selectedDifficulty

      // Time filter
      let matchesTime = true
      if (selectedTime !== "all") {
        const totalTime = recipe.prepTime + recipe.cookTime
        if (selectedTime === "under30" && totalTime >= 30) {
          matchesTime = false
        } else if (selectedTime === "30to60" && (totalTime < 30 || totalTime > 60)) {
          matchesTime = false
        } else if (selectedTime === "over60" && totalTime <= 60) {
          matchesTime = false
        }
      }

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTime
    })

    currentPage = 1
    displayRecipes()
  }

  // Display recipes with pagination
  function displayRecipes() {
    const startIndex = (currentPage - 1) * recipesPerPage
    const endIndex = startIndex + recipesPerPage
    const currentRecipes = filteredRecipes.slice(startIndex, endIndex)

    // Clear recipe grid
    recipeGrid.innerHTML = ""

    if (currentRecipes.length === 0) {
      recipeGrid.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search"></i>
          <h3>No recipes found</h3>
          <p>Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      `
    } else {
      // Create recipe cards
      currentRecipes.forEach((recipe) => {
        const recipeCard = document.createElement("article")
        recipeCard.className = "recipe-card animated-element"
        recipeCard.innerHTML = `
          <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.title}">
          </div>
          <div class="recipe-content">
            <div class="recipe-meta">
              <span class="recipe-date">${recipe.date}</span>
              <span class="recipe-category">${recipe.category}</span>
            </div>
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <div class="recipe-details">
              <span><strong>Prep:</strong> ${recipe.prepTime} mins</span>
              <span><strong>Cook:</strong> ${recipe.cookTime} mins</span>
            </div>
            <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-outline">View Recipe</a>
          </div>
        `
        recipeGrid.appendChild(recipeCard)
      })
    }

    // Update pagination buttons
    prevPageBtn.disabled = currentPage === 1
    nextPageBtn.disabled = endIndex >= filteredRecipes.length

    // Animate elements
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(".animated-element")
      animatedElements.forEach((element) => {
        element.classList.add("visible")
      })
    }, 100)
  }
})
