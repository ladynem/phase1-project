// A user should be able to type a comment in the input field, click the button, and then a p tag with that text added to the div

// obtain the input field
// obtain the click button
// add click event listener
        // create p tag
        // obtain value from the input field
        // append to div

const commentInput = document.getElementById('commentInput')

const clickButton = document.getElementById('clickButton')

const containerDiv = document.getElementById('container')

const handleButtonClick = () => {
    pTag = document.createElement('p')
    pTag.textContent = commentInput.value
    containerDiv.append(pTag)
    commentInput.value = ''
}

clickButton.addEventListener('click', handleButtonClick)