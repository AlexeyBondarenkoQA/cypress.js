describe('Проверка пользовательского сценария', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');                                                       //заходим на сайт
         cy.get('#k_email').type('USER_LOGIN');                                           //вводим логин
         cy.get('#k_password').type('USER_PASSWORD);                                                          //вводим пароль
         cy.get('.MuiButton-root').click()                                                                 //жмем на кнопку войти
         cy.get('.header_card_trainer').click()                                                            //нажимаем на нашего тренера
         cy.get('.k_mobile > :nth-child(5)').click()                                                       //нажимаем на смену аватара
         cy.get('.available > button').first().click();                                                    //нажимаем на покупку первого аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111'); //вводим номер карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');       //вводим cvv карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');                                       //вводим срок действия
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME');                  //вводим имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()                //нажимаем кнопку оплатить
         cy.get('.style_1_base_input').type('56456');                                                      //вводим код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()                //нажимаем оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');                           //проверяем, что покупка прошла успешна
        })    
 }) 