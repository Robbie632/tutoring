
### FAQs related to DOM scripting

---

### Question: Why do we need DOM scripting?
### Answer
**Scenario 1:** In order to be able to locate a html element from the DOM so we can attach an event handler to it, examples include:
* When clicking a submit button on a form, the data is sent to the back end.
* When toggling a dark mode button, dark mode is turned on/switched off.
* When checking off a todo item, it is striked through.
  
**Scenario 2:** In order to be able to manipulate the DOM element, for example change the class of the element so different styling is applied to it, examples include
* Changing a status of weather app temperature from 'loading' to the temperature after data has been returned from an API call
* Updating the status bar of a quiz every time a question has been answered.
  
**Scenario 3:** In order to be able to inject new DOM elements such as items in a todo list or notes in a note taking app

---
### Question: When would we use an event listener?
### Answer
Any time we want something to happen in response to an user action, for example:
* New content is loaded
* A box expands
* A to do list is striked through
* A to do list item is deleted

* [See here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events) for a full list of events 

The syntax is as follows:

```javascript
// here we use getElementById to get the element with the id 'my-id'
let element = document.getElementById('my-id');

// example for a click event listener
element.addEventListener('click', () => {
    // add stuff that happens here
})

// example for a keyup event listener
element.addEventListener('keyup', () => {
    // add stuff that happens here
})

// example for a click event listener
element.addEventListener('submit', () => {
    // add stuff that happens here
})


```

### Question: What are handling events?
### Answer
Handling events is essentially the logic that is defined in the function that is associated with the event listener exmaples can be found [here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) , for example:

```javascript
// example showing how handling events is done

// here we use getElementById to get the element with the id 'my-id'
let element = document.getElementById('my-id');

element.addEventListener('click', () => {
    // this is where the logic is added to handle the event, in this example an alert is shown to the user but more complex logic can be added such as manipulating other dom elements
    alert('hello user')
})


```
  