document.addEventListener("DOMContentLoaded", () => {
  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form")
  const newsletterMessage = document.getElementById("newsletter-message")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const emailInput = newsletterForm.querySelector("input[type='email']")
      const email = emailInput.value.trim()

      if (validateEmail(email)) {
        // Simulate form submission
        newsletterForm.querySelector("button").disabled = true
        newsletterForm.querySelector("button").textContent = "Subscribing..."

        setTimeout(() => {
          newsletterMessage.textContent = "Thank you for subscribing! Check your email for confirmation."
          newsletterMessage.className = "form-message success"
          emailInput.value = ""
          newsletterForm.querySelector("button").disabled = false
          newsletterForm.querySelector("button").textContent = "Subscribe"
        }, 1500)
      } else {
        newsletterMessage.textContent = "Please enter a valid email address."
        newsletterMessage.className = "form-message error"
      }
    })
  }

  // Contact form
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const subject = document.getElementById("subject").value.trim()
      const message = document.getElementById("message").value.trim()

      let isValid = true

      // Reset error messages
      document.querySelectorAll(".error-message").forEach((el) => {
        el.textContent = ""
        el.classList.remove("active")
      })

      // Validate name
      if (name === "") {
        showError("name-error", "Please enter your name")
        isValid = false
      }

      // Validate email
      if (!validateEmail(email)) {
        showError("email-error", "Please enter a valid email address")
        isValid = false
      }

      // Validate subject
      if (subject === "") {
        showError("subject-error", "Please enter a subject")
        isValid = false
      }

      // Validate message
      if (message === "") {
        showError("message-error", "Please enter your message")
        isValid = false
      }

      if (isValid) {
        // Simulate form submission
        contactForm.querySelector("button").disabled = true
        contactForm.querySelector("button").textContent = "Sending..."

        setTimeout(() => {
          formMessage.textContent = "Thank you for your message! We'll get back to you soon."
          formMessage.className = "form-message success"
          contactForm.reset()
          contactForm.querySelector("button").disabled = false
          contactForm.querySelector("button").textContent = "Send Message"
        }, 1500)
      }
    })
  }

  function showError(id, message) {
    const errorElement = document.getElementById(id)
    if (errorElement) {
      errorElement.textContent = message
      errorElement.classList.add("active")
    }
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
})
