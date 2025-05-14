document.addEventListener("DOMContentLoaded", () => {
  const testimonialSlider = document.querySelector(".testimonial-slider")
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const dotsContainer = document.querySelector(".testimonial-dots")

  if (!testimonialSlider || !testimonialSlides.length) return

  let currentIndex = 0
  const slideCount = testimonialSlides.length

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("button")
    dot.className = "testimonial-dot"
    dot.setAttribute("aria-label", `Go to testimonial ${i + 1}`)
    if (i === 0) dot.classList.add("active")

    dot.addEventListener("click", () => {
      goToSlide(i)
    })

    dotsContainer.appendChild(dot)
  }

  const dots = dotsContainer.querySelectorAll(".testimonial-dot")

  // Set up initial state
  updateSlider()

  // Auto slide
  let interval = setInterval(nextSlide, 5000)

  testimonialSlider.addEventListener("mouseenter", () => {
    clearInterval(interval)
  })

  testimonialSlider.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, 5000)
  })

  // Functions
  function goToSlide(index) {
    if (index < 0) {
      index = slideCount - 1
    } else if (index >= slideCount) {
      index = 0
    }

    currentIndex = index
    updateSlider()
  }

  function nextSlide() {
    goToSlide(currentIndex + 1)
  }

  function updateSlider() {
    testimonialSlides.forEach((slide, i) => {
      slide.style.display = i === currentIndex ? "block" : "none"
    })

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex)
    })
  }
})
