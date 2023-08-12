/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it.only('Deve fazer o pedido de 4 itens na loja EBAC', () => {
        //adicionar produtos
        cy.AddProdutos('Abominable Hoodie', 'Red', 'M', '3')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'Blue', 'M', '3')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'Red', 'M', '3')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (V-neck)', 'Blue', 'M', '3')
        cy.visit('http://lojaebac.ebaconline.art.br/checkout/')
        //realização do checkout 
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        //finalização do pedido
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido recebido')

    });
    

})
