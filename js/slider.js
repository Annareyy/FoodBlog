document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider")
  const slides = document.querySelectorAll(".slide")
  const prevBtn = document.querySelector(".slider-arrow.prev")
  const nextBtn = document.querySelector(".slider-arrow.next")
  const dotsContainer = document.querySelector(".slider-dots")

  if (!slider || !slides.length) return

  let currentIndex = 0
  const slideCount = slides.length

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("button")
    dot.className = "slider-dot"
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`)
    if (i === 0) dot.classList.add("active")

    dot.addEventListener("click", () => {
      goToSlide(i)
    })

    dotsContainer.appendChild(dot)
  }

  const dots = dotsContainer.querySelectorAll(".slider-dot")

  // Set up initial state
  updateSlider()

  // Event listeners
  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1)
  })

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1)
  })

  // Auto slide
  let interval = setInterval(nextSlide, 5000)

  slider.addEventListener("mouseenter", () => {
    clearInterval(interval)
  })

  slider.addEventListener("mouseleave", () => {
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
    slider.style.transform = `translateX(-${currentIndex * 100}%)`

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex)
    })
  }
})
