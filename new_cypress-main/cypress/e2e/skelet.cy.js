import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"



describe('Проверка авторизации', function () {

        beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
           });

        afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');
        });


    it('Верный логин и верный пароль', function () {
         cy.get(main_page.email).type(data.login);                                    // вводим верный логин
         cy.get(main_page.password).type(data.password);                                        // вводим верный пароль
         cy.get(main_page.login_button).click();                                                // жмем на кнопку войти
         cy.get(result_page.title).contains('Авторизация прошла успешно');               // проверяем текст успешной авт.
         cy.get(result_page.title).should('be.visible');                                 // проверяем, что текст виден
     })

    it('Востановление пароля', function () {
         cy.get(main_page.fogot_pass_btn).click();                                          // жмем на кнопку забыли пароль
         cy.get(recovery_password_page.email).type('german@dolnikov.ru');                              // вводим почту
         cy.get(recovery_password_page.send_button).click();                                         // жмем на кнопку отправить код
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');       // проверяем, что пароль отправлен
     })

    it('Верный логин и не верный пароль', function () {
         cy.get(main_page.email).type(data.login);                                    // вводим верный логин
         cy.get(main_page.password).type('iLoveqastudio2');                                        // вводим не верный пароль
         cy.get(main_page.login_button).click();                                                // жмем на кнопку войти
         cy.get(result_page.title).contains('Такого логина или пароля нет');               // проверяем текст ошибка логина и пароля
         cy.get(result_page.title).should('be.visible');                                 // проверяем, что текст виден
     })

     it('Не верный логин и верный пароль', function () {
         cy.get(main_page.email).type('ggerman@dolnikov.ru');                                    // вводим не верный логин
         cy.get(main_page.password).type(data.password);                                        // вводим верный пароль
         cy.get(main_page.login_button).click();                                                // жмем на кнопку войти
         cy.get(result_page.title).contains('Такого логина или пароля нет');               // проверяем текст ошибка логина и пароля
         cy.get(result_page.title).should('be.visible');                                 // проверяем, что текст виден 
     })

     it('Ошибка валидации без @ в логине', function () {
         cy.get(main_page.email).type('germandolnikov.ru');                                    // вводим верный логин
         cy.get(main_page.password).type(data.password);                                        // вводим верный пароль
         cy.get(main_page.login_button).click();                                                // жмем на кнопку войти
         cy.get(result_page.title).contains('Нужно исправить проблему валидации');               // проверяем текст ошибка валидации
         cy.get(result_page.title).should('be.visible');                                 // проверяем, что текст виден
     })
     
     it('Проверка на приведение к строчным буквам в логине', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru');                                    // вводим верный логин
         cy.get(main_page.password).type(data.password);                                        // вводим верный пароль
         cy.get(main_page.login_button).click();                                                // жмем на кнопку войти
         cy.get(result_page.title).contains('Авторизация прошла успешно');               // проверяем текст успешной авт.
         cy.get(result_page.title).should('be.visible');                                 // проверяем, что текст виден 
     })    
 }) 