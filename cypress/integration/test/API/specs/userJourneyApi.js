/// <reference types="cypress" />

Cypress.config("baseUrl","https://supervillain.herokuapp.com/");

describe('API - Regression Scenarios ', function () {


    var token ='';
    var testUser = 'rijuu3'
    

    it( "Get Auth Token ", function () {

        console.log("======== Getting the Auth Token ==========");
                        
        cy.request({
              "method": 'POST',
              "url": "auth/gentoken",
              "headers": {                  
                  "Content-Type": "application/json"  
              },
              "body": {                    
                  "key": testUser                     
              },
              failOnStatusCode: false
          })
          .then(function (response) {
              
              var title = "Response Body ==";
              var value = {
                  "body": response.body
              }       
              
              
             if (response.status == 200){
                  token = response.body.token;
                  console.log(token); 
                  console.log("Token created");}
              else if(response.status == 400){
                  console.log(response.body);
                  console.log("Error from DB proxy to user");
                }
              
               expect(response.status).to.eq(200);
               
          });
       
        });


        it( "Verify the Token ", function () {

            console.log("======== Verify the Token ==========");
                            
            cy.request({
                  "method": 'GET',
                  "url": "auth/verifytoken",
                  "headers": {                  
                      "Content-Type": "application/json"  ,
                      "authorization": token
                  },
                  /*"body": {                    
                      "key": "testUser2"                      
                  },*/
                  failOnStatusCode: false
              })
              .then(function (response) {
                  
                  var title = "Response Body ==";
                  var value = {
                      "body": response.body
                  }       
                  
                  
                 if (response.status == 200){
                      //token = response.body.token;
                      console.log(token); 
                      console.log("	JWT validated");
                    }
                  else if(response.status == 403){
                      console.log(response.body)
                      console.log("Invalid token");
                  } else
                  console.log("App name not found");
                  
                  expect(response.status).to.eq(200);
                   
              });
           
            });

            it( "Get the users list ", function () {

                console.log("======== Get the users list ==========");
                                
                cy.request({
                      "method": 'GET',
                      "url": "/v1/user",
                      "headers": {                  
                          "Content-Type": "application/json"  ,
                          //"authorization": token
                      },
                      /*"body": {                    
                          "key": "testUser2"                      
                      },*/
                      failOnStatusCode: false
                  })
                  .then(function (response) {
                      
                      var title = "Response Body ==";
                      var value = {
                          "body": response.body
                      }       
                      
                      
                     if (response.status == 200){
                          //token = response.body.token;
                          console.log(token); 
                          console.log("	A JSON array of user names");
                        }
                      else if(response.status == 404){
                          console.log(response.body)
                          console.log("Invalid token");
                      } 
                      
                      expect(response.status).to.eq(200);
                       
                  });
               
                });
        
    
                it( "Add a new user ", function () {

                    console.log("======== Add a new user ==========");
                                    
                    cy.request({
                          "method": 'POST',
                          "url": "v1/user",
                          "headers": {                  
                              "Content-Type": "application/json"  
                          },
                          "body": {                    
                              "username": testUser,
                              "score": "0"                   
                          },
                          failOnStatusCode: false
                      })
                      .then(function (response) {
                          
                          var title = "Response Body ==";
                          var value = {
                              "body": response.body
                          }       
                          
                          
                         if (response.status == 201){
                             var status = response.body.status;
                              console.log(status); 
                              console.log("created");}
                          else if(response.status == 400){
                              console.log(response.body);
                              console.log("Invalid request");
                            }
                          
                           expect(response.status).to.eq(201);
                           
                      });
                   
                    });


                    it( " Update user ", function () {

                        console.log("======== Update user ==========");
                                        
                        cy.request({
                              "method": 'PUT',
                              "url": "v1/user",
                              "headers": {                  
                                  "Content-Type": "application/json"  
                              },
                              "body": {                    
                                  "username": testUser,
                                  "score": "56"                   
                              },
                              failOnStatusCode: false
                          })
                          .then(function (response) {
                              
                              var title = "Response Body ==";
                              var value = {
                                  "body": response.body
                              }       
                              
                              
                             if (response.status == 204){
                                 
                                  console.log("Updated");}
                              else if(response.status == 400){
                                  console.log(response.body);
                                  console.log("Invalid request");
                                }
                              
                               expect(response.status).to.eq(204);
                               
                          });
                       
                        });


                        it( " Delete user ", function () {

                            console.log("======== Delete user ==========");
                                            
                            cy.request({
                                  "method": 'DELETE',
                                  "url": "v1/user",
                                  "headers": {                  
                                      "Content-Type": "application/json" ,
                                      "delete-key": testUser
                                  },
                                  
                                  failOnStatusCode: false
                              })
                              .then(function (response) {
                                  
                                  var title = "Response Body ==";
                                  var value = {
                                      "body": response.body
                                  }       
                                  
                                  
                                 if (response.status == 204){
                                     
                                      console.log("Deleted");}
                                  else if(response.status == 400){
                                      console.log(response.body);
                                      console.log("Invalid request");
                                    }else
                                    console.log("Error: Unauthorized");

                                  
                                  // expect(response.status).to.eq(204);
                                   
                              });
                           
                            });
        
    

});