// Is Attached()
cy.get('button').then(($el) => {
    Cypress.dom.isAttached($el) // true
  })

 // Is descendent
//Returns a boolean indicating whether an element is a descendent of another element.

cy.get('div').then(($el) => {
  Cypress.dom.isDescendent($el.parent(), $el) // true
})

//Is detached
//Returns a boolean indicating whether an element is detached from the DOM.

cy.get('button').then(($el) => {
  Cypress.dom.isDetached($el) // false
})

//Is document
//Returns a boolean indicating whether a node is of document type.

cy.get('p').then(($el) => {
  Cypress.dom.isDocument($el) // false
})

//Is DOM
//Returns a boolean indicating whether an object is a DOM object.

cy.get('body').then(($el) => {
  Cypress.dom.isDom($el) // true
})

//Is element
//Returns a boolean indicating whether an object is a DOM element.

cy.get('p').then(($el) => {
  Cypress.dom.isElement($el) // true
})

//Is focusable
//Returns a boolean indicating whether an element can receive focus.

//Cypress internally uses this method everywhere to figure out whether an element is hidden, mostly for actionability.

cy.get('input').then(($el) => {
  Cypress.dom.isFocusable($el) // true
})

//Is focused
//Returns a boolean indicating whether an element currently has focus.

cy.get('button').then(($el) => {
  Cypress.dom.isFocused($el)
})

//Is hidden
//Returns a boolean indicating whether an element is hidden.

//Cypress internally uses this method everywhere to figure out whether an element is hidden, mostly for actionability.

cy.get('p').then(($el) => {
  Cypress.dom.isHidden($el) // false
})

//Is jQuery
//Returns a boolean indicating whether an object is a jQuery object.

cy.get('input').then(($el) => {
  Cypress.dom.isJquery($el)
})

//Is scrollable
//Returns a boolean indicating whether an element is scrollable.

//Cypress internally uses this method everywhere to figure out whether an element can be scrolled, mostly for actionability.

cy.get('body').then(($el) => {
  Cypress.dom.isScrollable($el) // true
})

//Is visible
//Returns a boolean indicating whether an element is visible.

cy.get('img').then(($el) => {
  Cypress.dom.isVisible($el) // true
})