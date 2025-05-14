document.addEventListener("DOMContentLoaded", () => {
  // Animate elements when they come into view
  const animatedElements = document.querySelectorAll(".animated-element")

  if (animatedElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Once the animation has played, we can stop observing the element
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Slightly before the element comes into view
      },
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Add additional animations for specific elements
  const heroTitle = document.querySelector(".hero-content h1")
  if (heroTitle) {
    heroTitle.style.opacity = "0"
    heroTitle.style.transform = "translateY(30px)"

    setTimeout(() => {
      heroTitle.style.transition = "opacity 1s ease, transform 1s ease"
      heroTitle.style.opacity = "1"
      heroTitle.style.transform = "translateY(0)"
    }, 300)
  }

  const heroSubtitle = document.querySelector(".hero-content p")
  if (heroSubtitle) {
    heroSubtitle.style.opacity = "0"
    heroSubtitle.style.transform = "translateY(30px)"

    setTimeout(() => {
      heroSubtitle.style.transition = "opacity 1s ease, transform 1s ease"
      heroSubtitle.style.opacity = "1"
      heroSubtitle.style.transform = "translateY(0)"
    }, 600)
  }

  const heroButton = document.querySelector(".hero-content .btn")
  if (heroButton) {
    heroButton.style.opacity = "0"
    heroButton.style.transform = "translateY(30px)"

    setTimeout(() => {
      heroButton.style.transition = "opacity 1s ease, transform 1s ease"
      heroButton.style.opacity = "1"
      heroButton.style.transform = "translateY(0)"
    }, 900)
  }

  // Add hover animations for recipe cards
  const recipeCards = document.querySelectorAll(".recipe-card")
  recipeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-15px) scale(1.03)"
      card.style.boxShadow = "0 20px 40px rgba(138, 43, 226, 0.25)"
      card.style.borderColor = "var(--primary-color)"
      card.style.zIndex = "2"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
      card.style.boxShadow = ""
      card.style.borderColor = ""
      card.style.zIndex = ""
    })
  })

  // Add animations for buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      if (button.classList.contains("btn-primary")) {
        button.style.transform = "translateY(-3px)"
        button.style.boxShadow = "0 6px 20px rgba(138, 43, 226, 0.4)"
      } else if (button.classList.contains("btn-outline")) {
        button.style.backgroundColor = "var(--primary-color)"
        button.style.color = "white"
        button.style.transform = "translateY(-3px)"
        button.style.boxShadow = "0 4px 15px rgba(138, 43, 226, 0.3)"
      }
    })

    button.addEventListener("mouseleave", () => {
      if (button.classList.contains("btn-primary")) {
        button.style.transform = ""
        button.style.boxShadow = ""
      } else if (button.classList.contains("btn-outline")) {
        button.style.backgroundColor = ""
        button.style.color = ""
        button.style.transform = ""
        button.style.boxShadow = ""
      }
    })
  })
})
