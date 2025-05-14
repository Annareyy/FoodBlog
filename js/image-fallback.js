document.addEventListener("DOMContentLoaded", () => {
  // Define fallback images for different categories
  const fallbackImages = {
    hero: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    recipe:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    breakfast:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    lunch:
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    dinner:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
    dessert:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    pasta:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
    salad:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    smoothie:
      "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    chicken:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
    cookies:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    pizza:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    about:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80",
  }

  // Map image paths to fallback categories
  const imagePathMap = {
    "hero-food-spread.jpg": "hero",
    "creamy-pasta.jpg": "pasta",
    "chocolate-cake.jpg": "cake",
    "avocado-toast.jpg": "breakfast",
    "lemon-chicken.jpg": "chicken",
    "garden-salad.jpg": "salad",
    "smoothie-bowl.jpg": "smoothie",
    "homemade-pizza.jpg": "pizza",
    "vegetable-soup.jpg": "soup",
    "chocolate-cookies.jpg": "cookies",
    "kitchen-team.jpg": "about",
    "breakfast.jpg": "breakfast",
    "lunch.jpg": "lunch",
    "dinner.jpg": "dinner",
    "dessert.jpg": "dessert",
  }

  // Function to handle image errors
  function handleImageError(img) {
    const imgSrc = img.src
    const imgPath = imgSrc.substring(imgSrc.lastIndexOf("/") + 1)

    // Find the appropriate fallback category
    let fallbackCategory = "recipe" // Default fallback

    for (const [path, category] of Object.entries(imagePathMap)) {
      if (imgPath.includes(path)) {
        fallbackCategory = category
        break
      }
    }

    // Set the fallback image
    img.src = fallbackImages[fallbackCategory]

    // Add a class to indicate it's a fallback image
    img.classList.add("fallback-image")

    // Remove the onerror handler to prevent infinite loops
    img.onerror = null
  }

  // Apply error handler to all images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.onerror = function () {
      handleImageError(this)
    }

    // Force reload images that might be cached
    const currentSrc = img.src
    img.src = ""
    setTimeout(() => {
      img.src = currentSrc
    }, 10)
  })

  // Inject direct image URLs for critical images
  const heroImage = document.querySelector(".hero-image img")
  if (heroImage) {
    heroImage.src = fallbackImages.hero
  }

  // Inject images for recipe cards on homepage
  const recipeImages = document.querySelectorAll(".recipe-card .recipe-image img")
  const fallbackRecipeImages = [
    fallbackImages.pasta,
    fallbackImages.cake,
    fallbackImages.salad,
    fallbackImages.chicken,
    fallbackImages.smoothie,
    fallbackImages.cookies,
  ]

  recipeImages.forEach((img, index) => {
    img.src = fallbackRecipeImages[index % fallbackRecipeImages.length]
  })

  // Inject images for category cards
  const categoryImages = document.querySelectorAll(".category-card .category-image img")
  if (categoryImages.length >= 4) {
    categoryImages[0].src = fallbackImages.breakfast
    categoryImages[1].src = fallbackImages.lunch
    categoryImages[2].src = fallbackImages.dinner
    categoryImages[3].src = fallbackImages.dessert
  }
})
