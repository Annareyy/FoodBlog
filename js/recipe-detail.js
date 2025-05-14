document.addEventListener("DOMContentLoaded", () => {
  // Get recipe ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const recipeId = urlParams.get("id")

  if (!recipeId) {
    displayError("Recipe not found. Please try another recipe.")
    return
  }

  // Fetch recipe data (in a real app, this would be from an API)
  fetchRecipe(Number.parseInt(recipeId))

  function fetchRecipe(id) {
    // In a real app, this would be an API call
    // For now, we'll use the sample data
    const recipes = [
      {
        id: 1,
        title: "Creamy Garlic Parmesan Pasta",
        description:
          "A delicious pasta dish with a rich and creamy garlic parmesan sauce that's perfect for a quick weeknight dinner or special occasion. This recipe combines simple ingredients to create a restaurant-quality meal at home.",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        date: "January 15, 2025",
        category: "Dinner",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        difficulty: "Easy",
        totalTime: 35,
        ingredients: [
          "1 pound (450g) fettuccine pasta",
          "4 tablespoons butter",
          "4 cloves garlic, minced",
          "2 cups heavy cream",
          "1 cup freshly grated Parmesan cheese",
          "1/2 teaspoon salt",
          "1/4 teaspoon black pepper",
          "1/4 teaspoon nutmeg (optional)",
          "Fresh parsley, chopped, for garnish",
        ],
        instructions: [
          {
            step: 1,
            text: "Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente. Reserve 1 cup of pasta water before draining.",
            image:
              "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
          },
          {
            step: 2,
            text: "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant but not browned.",
            image:
              "https://images.unsplash.com/photo-1615475436121-8ebb5a7b5fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 3,
            text: "Reduce heat to medium-low and add heavy cream. Bring to a gentle simmer and cook for 3-4 minutes until it begins to thicken slightly.",
            image:
              "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            step: 4,
            text: "Gradually whisk in the Parmesan cheese until melted and smooth. Season with salt, pepper, and nutmeg if using.",
            image:
              "https://images.unsplash.com/photo-1629536563195-bd5a90f4c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Add the drained pasta to the sauce and toss to coat. If the sauce is too thick, add some of the reserved pasta water, a little at a time, until desired consistency is reached.",
            image:
              "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 6,
            text: "Serve immediately, garnished with fresh parsley and additional Parmesan cheese if desired.",
            image:
              "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          },
        ],
        notes: [
          "For a lighter version, you can substitute half-and-half for the heavy cream.",
          "Add grilled chicken or sautéed shrimp for extra protein.",
          "This sauce tends to thicken as it cools. If reheating leftovers, add a splash of milk or cream.",
        ],
        tags: ["pasta", "italian", "comfort food", "quick dinner"],
      },
      {
        id: 2,
        title: "Chocolate Lava Cake",
        description:
          "Decadent chocolate cake with a warm, gooey center that flows like lava when you cut into it. This impressive dessert is surprisingly easy to make and perfect for chocolate lovers.",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
        date: "February 10, 2025",
        category: "Dessert",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: "Medium",
        totalTime: 35,
        ingredients: [
          "1/2 cup (113g) unsalted butter, plus more for greasing",
          "4 oz (113g) high-quality dark chocolate (70% cocoa)",
          "1 cup (200g) powdered sugar",
          "2 whole eggs",
          "2 egg yolks",
          "1 teaspoon vanilla extract",
          "6 tablespoons all-purpose flour",
          "Pinch of salt",
          "Vanilla ice cream, for serving (optional)",
          "Fresh berries, for garnish (optional)",
        ],
        instructions: [
          {
            step: 1,
            text: "Preheat oven to 425°F (220°C). Butter and lightly flour four 6-ounce ramekins. Place on a baking sheet.",
            image:
              "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 2,
            text: "In a microwave-safe bowl, combine butter and chocolate. Microwave in 30-second intervals, stirring between each, until melted and smooth.",
            image:
              "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          },
          {
            step: 3,
            text: "Stir in powdered sugar until well blended. Whisk in eggs and egg yolks, then add vanilla extract.",
            image:
              "https://images.unsplash.com/photo-1612886623532-1802833fcc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 4,
            text: "Stir in flour and salt. Divide the batter evenly among the prepared ramekins.",
            image:
              "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Bake for 12-14 minutes until the sides are firm but the center is still soft. Let stand for 1 minute.",
            image:
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
          },
          {
            step: 6,
            text: "Run a knife around the edges to loosen and invert onto dessert plates. Serve immediately with vanilla ice cream and fresh berries if desired.",
            image:
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
          },
        ],
        notes: [
          "The baking time is crucial - too long and you won't have the molten center, too short and the cake may collapse.",
          "You can prepare the batter ahead of time and refrigerate the filled ramekins for up to 24 hours before baking.",
          "For a flavor variation, add a teaspoon of espresso powder or orange zest to the batter.",
        ],
        tags: ["dessert", "chocolate", "baking", "dinner party"],
      },
      {
        id: 3,
        title: "Avocado Toast with Poached Eggs",
        description:
          "A nutritious and delicious breakfast option that's quick and easy to make. This trendy dish combines creamy avocado with perfectly poached eggs for a satisfying start to your day.",
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "March 5, 2025",
        category: "Breakfast",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "Easy",
        totalTime: 15,
        ingredients: [
          "2 slices of sourdough bread",
          "1 ripe avocado",
          "2 fresh eggs",
          "1 tablespoon white vinegar",
          "Salt and pepper to taste",
          "Red pepper flakes (optional)",
          "1 tablespoon fresh lemon juice",
          "Fresh herbs (such as cilantro or chives) for garnish",
          "Extra virgin olive oil for drizzling",
        ],
        instructions: [
          {
            step: 1,
            text: "Toast the bread slices until golden brown and crisp.",
            image:
              "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          },
          {
            step: 2,
            text: "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl. Add lemon juice, salt, and pepper. Mash with a fork to desired consistency.",
            image:
              "https://images.unsplash.com/photo-1592151450196-a6b7f4315bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 3,
            text: "Bring a pot of water to a gentle simmer. Add white vinegar. Create a whirlpool in the water with a spoon, then carefully crack an egg into the center.",
            image:
              "https://images.unsplash.com/photo-1607103058027-4c5b2b66e1a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 4,
            text: "Cook the egg for about 3 minutes for a runny yolk. Remove with a slotted spoon and place on a paper towel to drain. Repeat with the second egg.",
            image:
              "https://images.unsplash.com/photo-1607103058027-4c5b2b66e1a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Spread the mashed avocado evenly on the toast slices. Top each with a poached egg.",
            image:
              "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          },
          {
            step: 6,
            text: "Season with salt, pepper, and red pepper flakes if desired. Garnish with fresh herbs and drizzle with olive oil. Serve immediately.",
            image:
              "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
        notes: [
          "For perfect poached eggs, use the freshest eggs possible.",
          "Try adding toppings like crumbled feta, microgreens, or cherry tomatoes for extra flavor.",
          "For a dairy-free option, sprinkle with nutritional yeast instead of cheese.",
        ],
        tags: ["breakfast", "healthy", "vegetarian", "quick"],
      },
      {
        id: 4,
        title: "Lemon Herb Roasted Chicken",
        description:
          "A classic roasted chicken infused with bright lemon and aromatic herbs. This dish is perfect for Sunday dinner and provides delicious leftovers for the week ahead.",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
        date: "March 15, 2025",
        category: "Dinner",
        prepTime: 20,
        cookTime: 90,
        servings: 6,
        difficulty: "Medium",
        totalTime: 110,
        ingredients: [
          "1 whole chicken (about 4-5 pounds)",
          "2 lemons",
          "1 head of garlic, halved crosswise",
          "1/4 cup olive oil",
          "2 tablespoons fresh rosemary, chopped",
          "2 tablespoons fresh thyme leaves",
          "1 tablespoon fresh sage, chopped",
          "2 teaspoons salt",
          "1 teaspoon black pepper",
          "1 onion, quartered",
          "2 carrots, roughly chopped",
          "2 celery stalks, roughly chopped",
        ],
        instructions: [
          {
            step: 1,
            text: "Preheat oven to 425°F (220°C). Remove chicken giblets and pat the chicken dry with paper towels.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
          {
            step: 2,
            text: "Zest and juice one lemon. Cut the other lemon into quarters. In a small bowl, mix together olive oil, lemon zest, half the lemon juice, herbs, salt, and pepper.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
          {
            step: 3,
            text: "Gently loosen the skin from the chicken breast and rub about 1/3 of the herb mixture under the skin. Rub another 1/3 of the mixture inside the cavity, and the remaining 1/3 all over the outside of the chicken.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
          {
            step: 4,
            text: "Stuff the cavity with the quartered lemon, half the garlic head, and a few sprigs of herbs. Tie the legs together with kitchen twine and tuck the wing tips under the body.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
          {
            step: 5,
            text: "Place the onion, carrots, celery, and remaining garlic in a roasting pan. Place the chicken on top, breast side up. Pour the remaining lemon juice over the chicken.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
          {
            step: 6,
            text: "Roast for 1 hour and 20-30 minutes, or until the juices run clear when you cut between the leg and thigh (internal temperature should reach 165°F/74°C). Let rest for 15 minutes before carving.",
            image:
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
          },
        ],
        notes: [
          "For extra crispy skin, let the chicken air-dry in the refrigerator, uncovered, for a few hours before roasting.",
          "Save the bones to make homemade chicken stock.",
          "The vegetables roasted under the chicken make a delicious side dish.",
        ],
        tags: ["chicken", "dinner", "roast", "family meal"],
      },
      {
        id: 5,
        title: "Fresh Garden Salad",
        description:
          "A vibrant and refreshing salad packed with garden-fresh vegetables and a tangy homemade vinaigrette. Perfect as a light lunch or a side dish for dinner.",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "April 5, 2025",
        category: "Lunch",
        prepTime: 15,
        cookTime: 0,
        servings: 4,
        difficulty: "Easy",
        totalTime: 15,
        ingredients: [
          "6 cups mixed salad greens",
          "1 cucumber, sliced",
          "1 cup cherry tomatoes, halved",
          "1 bell pepper, diced",
          "1/2 red onion, thinly sliced",
          "1 avocado, diced",
          "1/4 cup crumbled feta cheese",
          "1/4 cup toasted walnuts or almonds",
          "For the vinaigrette:",
          "3 tablespoons extra virgin olive oil",
          "1 tablespoon balsamic vinegar",
          "1 teaspoon Dijon mustard",
          "1 clove garlic, minced",
          "1 teaspoon honey",
          "Salt and pepper to taste",
        ],
        instructions: [
          {
            step: 1,
            text: "Wash and dry all vegetables thoroughly. Tear the salad greens into bite-sized pieces if necessary.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 2,
            text: "Prepare all vegetables: slice cucumber, halve tomatoes, dice bell pepper, slice red onion, and dice avocado.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 3,
            text: "In a large salad bowl, combine the salad greens, cucumber, tomatoes, bell pepper, and red onion.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 4,
            text: "In a small bowl, whisk together olive oil, balsamic vinegar, Dijon mustard, minced garlic, honey, salt, and pepper until well combined.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Just before serving, add the diced avocado and drizzle the vinaigrette over the salad. Toss gently to coat.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 6,
            text: "Top with crumbled feta cheese and toasted nuts. Serve immediately.",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
        notes: [
          "For a vegan version, omit the feta cheese or substitute with a plant-based alternative.",
          "Add grilled chicken or shrimp to make this a more substantial main course.",
          "The vinaigrette can be made ahead and stored in the refrigerator for up to a week.",
        ],
        tags: ["salad", "vegetarian", "healthy", "quick", "lunch"],
      },
      {
        id: 6,
        title: "Berry Smoothie Bowl",
        description:
          "A nutritious and colorful breakfast bowl packed with fresh berries, banana, and topped with granola, seeds, and more fruit. A perfect way to start your day!",
        image:
          "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        date: "April 15, 2025",
        category: "Breakfast",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "Easy",
        totalTime: 10,
        ingredients: [
          "2 cups frozen mixed berries (strawberries, blueberries, raspberries)",
          "1 frozen banana",
          "1/2 cup Greek yogurt",
          "1/4 cup almond milk (or milk of choice)",
          "1 tablespoon honey or maple syrup (optional)",
          "For toppings:",
          "1/4 cup granola",
          "Fresh berries",
          "Sliced banana",
          "1 tablespoon chia seeds",
          "1 tablespoon pumpkin seeds",
          "1 tablespoon shredded coconut",
          "Drizzle of honey",
        ],
        instructions: [
          {
            step: 1,
            text: "Place frozen berries, frozen banana, Greek yogurt, almond milk, and sweetener (if using) in a high-speed blender.",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
          {
            step: 2,
            text: "Blend until smooth and creamy. The mixture should be thick enough to eat with a spoon. If it's too thick, add a little more milk; if too thin, add more frozen fruit.",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
          {
            step: 3,
            text: "Pour the smoothie mixture into bowls.",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
          {
            step: 4,
            text: "Arrange toppings on the smoothie: fresh berries, sliced banana, granola, seeds, and coconut.",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
          {
            step: 5,
            text: "Drizzle with honey if desired.",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
          {
            step: 6,
            text: "Serve immediately while cold and enjoy with a spoon!",
            image:
              "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          },
        ],
        notes: [
          "For a vegan version, use plant-based yogurt and sweetener.",
          "Freeze ripe bananas ahead of time for the perfect smoothie consistency.",
          "Get creative with toppings - try different fruits, nuts, or even a sprinkle of dark chocolate.",
        ],
        tags: ["breakfast", "smoothie", "healthy", "quick", "vegetarian"],
      },
      {
        id: 7,
        title: "Homemade Pizza",
        description:
          "Create your own delicious pizza with a crispy crust and your favorite toppings. This recipe includes a simple dough and classic margherita toppings, but feel free to get creative!",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "April 25, 2025",
        category: "Dinner",
        prepTime: 30,
        cookTime: 15,
        servings: 4,
        difficulty: "Medium",
        totalTime: 45,
        ingredients: [
          "For the dough:",
          "3 1/2 cups all-purpose flour",
          "1 teaspoon sugar",
          "1 envelope instant dry yeast (2 1/4 teaspoons)",
          "2 teaspoons salt",
          "1 1/2 cups warm water (110°F/45°C)",
          "2 tablespoons olive oil, plus more for the bowl",
          "For the toppings (Margherita):",
          "1 cup tomato sauce",
          "2-3 cloves garlic, minced",
          "8 oz fresh mozzarella cheese, sliced",
          "Fresh basil leaves",
          "2 tablespoons olive oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          {
            step: 1,
            text: "In a large bowl, combine flour, sugar, yeast, and salt. Add warm water and olive oil, and stir until a dough forms.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 2,
            text: "Turn dough onto a floured surface and knead for about 5 minutes until smooth and elastic. Form into a ball.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 3,
            text: "Place dough in an oiled bowl, cover with plastic wrap, and let rise in a warm place for about 1 hour, or until doubled in size.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 4,
            text: "Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to preheat.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Punch down dough and divide into 2 equal portions (for 2 medium pizzas). On a floured surface, roll or stretch each portion into a 12-inch circle. Transfer to a pizza pan or parchment paper.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 6,
            text: "Spread tomato sauce over the dough, leaving a small border for the crust. Sprinkle with minced garlic, arrange mozzarella slices on top, and season with salt and pepper. Drizzle with olive oil.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 7,
            text: "Bake for 12-15 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. Add fresh basil leaves in the last minute of baking or right after removing from the oven.",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
        notes: [
          "The dough can be made ahead and refrigerated for up to 24 hours. Let it come to room temperature before shaping.",
          "For a crispier crust, bake on a preheated pizza stone.",
          "Get creative with toppings - try different cheeses, vegetables, or meats.",
        ],
        tags: ["pizza", "italian", "dinner", "family meal"],
      },
      {
        id: 8,
        title: "Vegetable Soup",
        description:
          "A hearty and nutritious soup packed with fresh vegetables and herbs. Perfect for a comforting lunch or light dinner, especially on chilly days.",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        date: "May 5, 2025",
        category: "Lunch",
        prepTime: 20,
        cookTime: 40,
        servings: 6,
        difficulty: "Easy",
        totalTime: 60,
        ingredients: [
          "2 tablespoons olive oil",
          "1 large onion, diced",
          "3 cloves garlic, minced",
          "2 carrots, diced",
          "2 celery stalks, diced",
          "1 zucchini, diced",
          "1 cup green beans, trimmed and cut into 1-inch pieces",
          "1 can (14.5 oz) diced tomatoes",
          "6 cups vegetable broth",
          "1 bay leaf",
          "1 teaspoon dried thyme",
          "1/2 teaspoon dried rosemary",
          "1 cup small pasta (like ditalini or small shells)",
          "1 can (15 oz) kidney beans, drained and rinsed",
          "2 cups fresh spinach",
          "Salt and pepper to taste",
          "Grated Parmesan cheese for serving (optional)",
          "Fresh parsley, chopped, for garnish",
        ],
        instructions: [
          {
            step: 1,
            text: "Heat olive oil in a large pot over medium heat. Add onion and cook until translucent, about 5 minutes.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 2,
            text: "Add garlic, carrots, and celery. Cook for another 5 minutes, stirring occasionally.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 3,
            text: "Add zucchini and green beans. Cook for 3 minutes more.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 4,
            text: "Add diced tomatoes, vegetable broth, bay leaf, thyme, and rosemary. Bring to a boil, then reduce heat and simmer for 15 minutes.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 5,
            text: "Add pasta and kidney beans. Simmer for another 10 minutes, or until pasta is tender.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 6,
            text: "Stir in spinach and cook until wilted, about 2 minutes. Remove bay leaf. Season with salt and pepper to taste.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            step: 7,
            text: "Serve hot, garnished with fresh parsley and grated Parmesan cheese if desired.",
            image:
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
        ],
        notes: [
          "This soup is very adaptable - use whatever vegetables you have on hand.",
          "For a heartier soup, add diced potatoes or sweet potatoes.",
          "The soup can be made ahead and stored in the refrigerator for up to 3 days, or frozen for up to 3 months.",
        ],
        tags: ["soup", "vegetarian", "healthy", "lunch", "dinner"],
      },
      {
        id: 9,
        title: "Chocolate Chip Cookies",
        description:
          "Classic chocolate chip cookies with a soft center and crispy edges. These timeless treats are perfect for dessert, snacks, or whenever you need a sweet pick-me-up!",
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "May 15, 2025",
        category: "Dessert",
        prepTime: 15,
        cookTime: 12,
        servings: 24,
        difficulty: "Easy",
        totalTime: 27,
        ingredients: [
          "1 cup (2 sticks) unsalted butter, softened",
          "3/4 cup granulated sugar",
          "3/4 cup packed brown sugar",
          "2 large eggs",
          "2 teaspoons vanilla extract",
          "2 1/4 cups all-purpose flour",
          "1 teaspoon baking soda",
          "1/2 teaspoon salt",
          "2 cups semi-sweet chocolate chips",
          "1 cup chopped nuts (optional)",
        ],
        instructions: [
          {
            step: 1,
            text: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 2,
            text: "In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy, about 3 minutes.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 3,
            text: "Beat in eggs one at a time, then stir in vanilla extract.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 4,
            text: "In a separate bowl, whisk together flour, baking soda, and salt. Gradually add to the butter mixture and mix until just combined.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 5,
            text: "Fold in chocolate chips and nuts (if using).",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 6,
            text: "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            step: 7,
            text: "Bake for 9-12 minutes, or until edges are golden but centers are still soft. Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
            image:
              "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
        notes: [
          "For chewier cookies, use more brown sugar than white sugar.",
          "Refrigerating the dough for 24 hours before baking will enhance the flavor and texture.",
          "For an extra special touch, sprinkle a little sea salt on top of the cookies before baking.",
        ],
        tags: ["cookies", "dessert", "baking", "chocolate", "snack"],
      },
    ]

    const recipe = recipes.find((r) => r.id === id)

    if (recipe) {
      displayRecipe(recipe)
    } else {
      displayError("Recipe not found. Please try another recipe.")
    }
  }

  function displayRecipe(recipe) {
    const recipeContent = document.getElementById("recipe-content")

    const html = `
      <div class="recipe-header animated-element">
        <h1>${recipe.title}</h1>
        <div class="recipe-meta">
          <span><i class="far fa-calendar"></i> ${recipe.date}</span>
          <span><i class="fas fa-utensils"></i> ${recipe.category}</span>
          <span><i class="fas fa-clock"></i> ${recipe.totalTime} mins</span>
          <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
          <span><i class="fas fa-users"></i> Serves ${recipe.servings}</span>
        </div>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-actions">
          <button class="btn btn-primary"><i class="fas fa-print"></i> Print Recipe</button>
          <button class="btn btn-outline"><i class="far fa-bookmark"></i> Save Recipe</button>
          <button class="btn btn-outline"><i class="fas fa-share-alt"></i> Share</button>
        </div>
      </div>
      
      <div class="recipe-main-image animated-element">
        <img src="${recipe.image}" alt="${recipe.title}">
      </div>
      
      <div class="recipe-info animated-element">
        <div class="info-card">
          <div class="info-grid">
            <div class="info-item">
              <i class="fas fa-clock"></i>
              <h4>Prep Time</h4>
              <p>${recipe.prepTime} mins</p>
            </div>
            <div class="info-item">
              <i class="fas fa-fire"></i>
              <h4>Cook Time</h4>
              <p>${recipe.cookTime} mins</p>
            </div>
            <div class="info-item">
              <i class="fas fa-hourglass-half"></i>
              <h4>Total Time</h4>
              <p>${recipe.totalTime} mins</p>
            </div>
            <div class="info-item">
              <i class="fas fa-users"></i>
              <h4>Servings</h4>
              <p>${recipe.servings}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="recipe-ingredients animated-element">
        <h2>Ingredients</h2>
        <div class="ingredients-card">
          <ul class="ingredients-list">
            ${recipe.ingredients
              .map(
                (ingredient) => `
              <li>
                <input type="checkbox" id="ingredient-${recipe.ingredients.indexOf(ingredient)}">
                <label for="ingredient-${recipe.ingredients.indexOf(ingredient)}">${ingredient}</label>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </div>
      
      <div class="recipe-instructions animated-element">
        <h2>Instructions</h2>
        ${recipe.instructions
          .map(
            (instruction) => `
          <div class="instruction-step">
            <div class="step-image">
              <img src="${instruction.image}" alt="Step ${instruction.step}">
            </div>
            <div class="step-content">
              <div class="step-number">${instruction.step}</div>
              <p>${instruction.text}</p>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="recipe-notes animated-element">
        <h2>Recipe Notes</h2>
        <div class="notes-card">
          <ul>
            ${recipe.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </div>
      </div>
      
      <div class="related-recipes animated-element">
        <h2>You Might Also Like</h2>
        <div class="recipe-grid">
          <article class="recipe-card">
            <div class="recipe-image">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Fresh Garden Salad">
            </div>
            <div class="recipe-content">
              <div class="recipe-meta">
                <span class="recipe-date">April 5, 2025</span>
                <span class="recipe-category">Lunch</span>
              </div>
              <h3>Fresh Garden Salad</h3>
              <p>A refreshing salad with garden-fresh vegetables and a tangy vinaigrette...</p>
              <div class="recipe-details">
                <span><strong>Prep:</strong> 15 mins</span>
                <span><strong>Cook:</strong> 0 mins</span>
              </div>
              <a href="recipe-detail.html?id=5" class="btn btn-outline">View Recipe</a>
            </div>
          </article>
          <article class="recipe-card">
            <div class="recipe-image">
              <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Chocolate Chip Cookies">
            </div>
            <div class="recipe-content">
              <div class="recipe-meta">
                <span class="recipe-date">May 15, 2025</span>
                <span class="recipe-category">Dessert</span>
              </div>
              <h3>Chocolate Chip Cookies</h3>
              <p>Classic homemade cookies with gooey chocolate chips and a soft center...</p>
              <div class="recipe-details">
                <span><strong>Prep:</strong> 15 mins</span>
                <span><strong>Cook:</strong> 12 mins</span>
              </div>
              <a href="recipe-detail.html?id=9" class="btn btn-outline">View Recipe</a>
            </div>
          </article>
        </div>
      </div>
    `

    recipeContent.innerHTML = html

    // Trigger animations
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(".animated-element")
      animatedElements.forEach((el) => el.classList.add("visible"))
    }, 100)
  }

  function displayError(message) {
    const recipeContent = document.getElementById("recipe-content")
    recipeContent.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <h2>Oops!</h2>
        <p>${message}</p>
        <a href="recipes.html" class="btn btn-primary">Back to Recipes</a>
      </div>
    `
  }
})
