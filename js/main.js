document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Toggle search container
  const searchToggle = document.querySelector(".search-toggle")
  const searchContainer = document.querySelector(".search-container")

  if (searchToggle && searchContainer) {
    searchToggle.addEventListener("click", () => {
      searchContainer.classList.toggle("active")
      if (searchContainer.classList.contains("active")) {
        searchContainer.querySelector("input").focus()
      }
    })
  }

  // Mobile menu
  const menuToggle = document.querySelector(".menu-toggle")
  const body = document.body

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      // Check if mobile menu already exists
      let mobileMenu = document.querySelector(".mobile-menu")
      let overlay = document.querySelector(".overlay")

      if (!mobileMenu) {
        // Create mobile menu
        mobileMenu = document.createElement("div")
        mobileMenu.className = "mobile-menu"

        const closeBtn = document.createElement("button")
        closeBtn.className = "mobile-menu-close"
        closeBtn.innerHTML = '<i class="fas fa-times"></i>'
        closeBtn.setAttribute("aria-label", "Close menu")

        const nav = document.querySelector(".main-nav").cloneNode(true)

        mobileMenu.appendChild(closeBtn)
        mobileMenu.appendChild(nav)

        // Create overlay
        overlay = document.createElement("div")
        overlay.className = "overlay"

        // Add to DOM
        body.appendChild(overlay)
        body.appendChild(mobileMenu)

        // Add event listeners
        closeBtn.addEventListener("click", closeMobileMenu)
        overlay.addEventListener("click", closeMobileMenu)
      }

      // Show mobile menu
      setTimeout(() => {
        overlay.classList.add("active")
        mobileMenu.classList.add("active")
      }, 10)

      // Prevent scrolling
      body.style.overflow = "hidden"
    })
  }

  function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu")
    const overlay = document.querySelector(".overlay")

    if (mobileMenu && overlay) {
      mobileMenu.classList.remove("active")
      overlay.classList.remove("active")

      // Re-enable scrolling
      document.body.style.overflow = ""
    }
  }

  // Dropdown menus for recipe filters
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

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

  // Animate elements when they come into view
  const animatedElements = document.querySelectorAll(".animated-element")

  if (animatedElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  }
})
