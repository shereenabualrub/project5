/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  
  return false
})
describe('add random item from certain catogery', () => {
  it.only('add item from women category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

  //   let itemsToSelect = ["Women","Men","Gear"]
      
  //   let RandomIndex = Math.floor(Math.random()* itemsToSelect.length)

  //   //cy.log(RandomIndex)
  //     cy.contains(itemsToSelect[RandomIndex]).click()
  cy.wait(3000);
  cy.get('#ui-id-4').click()
let RandomItemToSelect = Math.floor(Math.random()*4)
cy.get('.product-items.widget-product-grid').find('.product-item').eq(RandomItemToSelect).click();

  
  
   let RndomSizeToSelect =Math.floor(Math.random()*4)
   let RndomColorToSelect =Math.floor(Math.random()*2)
    // if (RandomIndex==0) {
      cy.get('.swatch-attribute-options').find('.swatch-option').eq(RndomSizeToSelect).click()
      
      cy.get('.swatch-attribute.color > .swatch-attribute-options').find('.swatch-option').eq(RndomColorToSelect).click()
      cy.get('#product-addtocart-button').click()

      cy.get('.stock > span').invoke('text').then((theText)=>{
        if (theText=="IN STOCK") {
          cy.get('#product-addtocart-button').click()
        } else {
          alert("sorry")
        }
     })
      
    // } else {
    //   cy.get('#product-addtocart-button').click();
      
    // }
    cy.wait(3000);

  })
  it.only('add item from men category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

cy.get('#ui-id-5').click();
let RandomItemToSelect = Math.floor(Math.random()*4)
cy.get('.product-items.widget-product-grid').find('.product-item').eq(RandomItemToSelect).click();

  
  
   let RndomSizeToSelect =Math.floor(Math.random()*4)
   
    // if (RandomIndex==0) {
      cy.get('.swatch-attribute-options').find('.swatch-option').eq(RndomSizeToSelect).click()
      
      cy.get('.swatch-attribute.color > .swatch-attribute-options').find('.swatch-option').eq(0).click()
      cy.get('#product-addtocart-button').click()

      cy.get('.stock > span').invoke('text').then((theText)=>{
        if (theText=="IN STOCK") {
          cy.get('#product-addtocart-button').click()
        } else {
          alert("sorry")
        }
     })
      
    // } else {
    //   cy.get('#product-addtocart-button').click();
      
    // }
  
  });
  it.skip('add item from gear category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
cy.wait(3000);
cy.get('#ui-id-6').click()
let RandomItemToSelect = Math.floor(Math.random()*4)
cy.get('.product-items.widget-product-grid').find('.product-item').eq(RandomItemToSelect).click();

cy.get('.stock > span').invoke('text').then((theText)=>{
  if (theText=="IN STOCK") {
    cy.get('#product-addtocart-button').click()
  } else {
    alert("sorry")
  }
})

  });
});

describe('log in ', () => {
  it('add correct username and password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/')

    cy.get('#email').type("shereen@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("123shereen$")

    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  });

  
});
