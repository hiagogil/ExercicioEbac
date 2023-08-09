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

    it('Deve fazer o pedido de um item na loja EBAC', () => {

        cy.AddProdutos('Abominable Hoodie', 'Red', 'M', '3')

    });

    it('Deve fazer o pedido de quatro itens na loja EBAC', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'Red', 'M', '3')

    });

    it('Deve fazer o pedido de quatro itens na loja EBAC', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'Red', 'M', '3')

    });

    it('Deve fazer o pedido de quatro itens na loja EBAC', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
        cy.AddProdutos('Atomic Endurance Running Tee (V-neck)', 'Blue', 'M', '3')

    });



})
