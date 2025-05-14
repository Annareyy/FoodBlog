document.addEventListener("DOMContentLoaded", () => {
  // Direct image URLs for all images used in the site
  const imageUrls = {
    // Hero image
    hero: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",

    // Recipe images
    "creamy-pasta":
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    "chocolate-cake":
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80",
    "avocado-toast":
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "lemon-chicken":
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1013&q=80",
    "garden-salad":
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "smoothie-bowl":
      "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    "homemade-pizza":
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "vegetable-soup":
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    "chocolate-cookies":
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",

    // Category images
    breakfast:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    lunch: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    dinner: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
    dessert:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",

    // About page images
    "kitchen-team":
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1568&q=80",
  }

  // Load all background images
  const bgImageElements = document.querySelectorAll('[class*="img-"]')
  bgImageElements.forEach((element) => {
    // Extract the image name from the class
    const classList = Array.from(element.classList)
    const imageClass = classList.find((cls) => cls.startsWith("img-"))

    if (imageClass) {
      const imageName = imageClass.replace("img-", "")
      if (imageUrls[imageName]) {
        // Set the background image directly
        element.style.backgroundImage = `url('${imageUrls[imageName]}')`
      }
    }
  })

  // Load the hero image
  const heroImage = document.querySelector(".hero-image")
  if (heroImage) {
    heroImage.style.backgroundImage = `url('${imageUrls.hero}')`
  }

  // Replace all img tags with direct URLs
  const imgElements = document.querySelectorAll("img")
  imgElements.forEach((img) => {
    const src = img.getAttribute("src")
    if (src) {
      // Extract image name from src path
      const srcParts = src.split("/")
      const filename = srcParts[srcParts.length - 1].split(".")[0]

      if (imageUrls[filename]) {
        img.src = imageUrls[filename]
      }
    }

    // Add error handling for images
    img.onerror = () => {
      // If image fails to load, try to find a fallback
      const alt = img.getAttribute("alt")
      if (alt) {
        const altLower = alt.toLowerCase()

        // Try to find a matching image based on alt text
        for (const [key, url] of Object.entries(imageUrls)) {
          if (altLower.includes(key)) {
            img.src = url
            return
          }
        }

        // If no match found, use a generic food image
        img.src = imageUrls.hero
      }
    }
  })
})
