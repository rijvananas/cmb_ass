/// <reference types="cypress" />

import 'cypress-xpath';

describe('Regression Scenarios',() =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Navigate to the Website',() =>{

        cy.visit('https://responsivefight.herokuapp.com/');
        cy.get('#worrior_username').type('TestUser1');
        cy.get('#warrior').click();

    });

    it('Start the journey',() =>{

      
        cy.get('#start').click();
        cy.title().should('eq', "COVID-19 THE GAME");
        cy.get('#worrior_username').type('TestUser1');
        cy.get('#warrior').click();
        cy.get('#start').click();
        
        //cy.wait(6000);
        //*[@id="news"]
    });

    it('Play the challenge',() =>{

        cy.xpath('//*[@id="bus"]').click();
        cy.get('#worrior_username').type('TestUser1');
        cy.get('#warrior').click();
        cy.get('#start').click();
        cy.wait (100);
        cy.xpath('//*[@id="bus"]').click();
        cy.xpath('//*[@id="bus_timer_start"]').click();
        cy.xpath('//*[@id="bus_answer_1"]').click();
        cy.xpath('//*[@id="leaderboard_link"]').click();
        cy.url().should('eq', "https://responsivefight.herokuapp.com/leaderboard");

        
    });



        


       
})
