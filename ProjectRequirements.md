# PROJECT REQUIREMENTS
⭐️ access data from a public, no authorization API or from a db.json file using json-server 
⭐️ return a collection of at least 5 objects with each object having at least 3 attributes
⭐️ handle all interactions asynchronously using JSON as communication format
⭐️ keep app to single page, no redirects or reloads
⭐️ use 3 different types of event listeners with their own unique callback functions using JS
⭐️ implement at least 1 array iterations using an array method
⭐️ utilize functions to abstract repetitive code

# AS A USER, I CAN...
⭐️ Choose 2 different ways to discover new activities to do when I am bored 
⭐️ Click a "Surprise Me" button that returns 5 random activity suggestions including an activity description, activity type, and number of participants neeed from the API: https://www.boredapi.com/api/activity
⭐️ Choose from a dropdown list of 5 activity types and submit it to view activities of that event type: relaxation, education, social, diy, charity
⭐️ Mouseover an activity to bold its text

# PROJECT PITCH
⭐️ Application story: Bust your boredom by generating a list of activities to choose from! Choose from a list of 5 activiy types or take a chance to view random activities and never be bored again.

⭐️ Core feature of MVP: GET a list of activities that displays activity description, type, and number of participants

⭐️ API data and how it will be used: click event returns 5 random activity objects, submit event returns activity objects with a specific tyep value

⭐️ Challenges I anticipate are keeping my code DRY, using CSS, and applying an array iteration method

⭐️ I will meet the requirements of this project by:
  ✅ accessing a collection of 5 objects at a time with 3 attributes from a public, no auth API using json-server
  ✅ handling requests asynchronously using JSON as the communicaton format
  ✅ utilizing 3 eventlisteners:
      👉 click: generate a random list of 5 activities
      👉 submit: choose from a dropdown menu, submit, iterate over an array with .filter method, and return only activities of a certain type
      👉 mouseover: bold text
  ✅ mouseover event: bold text
  ✅ keep app to a single page with no redirects or reloads
  ✅ keep my code DRY by abscracting repetitive code