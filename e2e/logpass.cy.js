describe('позитивный кейс авторизации', function () {
    it('верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 
 
 describe('логика восстановления пароля', function () {
    it('логика восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 
 describe('негативный кейс авторизации', function () {
    it('правильный логин и не правильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qastudioonelove');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 
 describe('негативный кейс авторизации', function () {
    it('не правильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('negerman@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 
 describe('негативный кейс валидации', function () {
    it('логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
 })
 
 describe('строчные буквы в логине', function () {
    it('строчные буквы в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible'); // бага
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         }) 
 })
 