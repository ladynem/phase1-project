// GLOBAL VARIABLES: Used more than once

const activityDiv = document.getElementById('activity-list-div')

// CLICK EVENT: Displays 5 random activities

const handleClick = () => { 
    activityDiv.textContent = ''
  
    fetch('http://localhost:3000/activities')
    .then((resp) => resp.json())
    .then((data) => {
    
        const shuffleData = data.sort(() => Math.random() - 0.5)
        
        const randomData = shuffleData.slice(0, 5)
        
        randomData.forEach((obj) => {
          const activityP = document.createElement('p')
          activityP.className = 'activity-p'
          activityP.innerHTML = 
          `Activity: ${obj.Activity} <br>
          Type: ${obj.Type} <br>
          Participants: ${obj.Participants} <br>`    
        
        activityDiv.append(activityP)
    })     
  })
}
  
document.getElementById('random-button').addEventListener('click', handleClick)

// SUBMIT EVENT: Displays all activities of a specified type

document.getElementById('dropdown-form').addEventListener('submit', event => {
    event.preventDefault()
    handleSubmit(event)
    event.target.reset()
})

const handleSubmit = (event) => {
    activityDiv.textContent = '' 

    const selectedOption = event.target.querySelector('.forms').value
    
    fetch('http://localhost:3000/activities')
    .then((resp) => resp.json())
    .then((data) => {
        const activityType = data.filter((obj) => (obj.Type == selectedOption))

        activityType.forEach((obj) => {
            const activityP = document.createElement('p')
            activityP.className = 'activity-p'
            
            activityP.innerHTML = 
            `Activity: ${obj.Activity} <br>
            Type: ${obj.Type} <br>
            Participants: ${obj.Participants} <br>`    
            
            activityDiv.append(activityP)
        })
    })
}

// MOUSEOVER/OUT EVENT: Changes style of activity based on cursor location

activityDiv.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'green'
  event.target.style.fontWeight='bold'
})

activityDiv.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = 'black'
  event.target.style.fontWeight='normal'
})
