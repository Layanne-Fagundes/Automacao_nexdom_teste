describe('Cenário de Teste 02: Validação de Contato', () => {

    it('Deve navegar até a página de contato e validar o formulário', () => {
        // Vá direto para a página onde o formulário REALMENTE existe
        cy.visit('https://nexdom.tec.br/contato/', { timeout: 30000 });


        cy.get('form', { timeout: 15000 })
            .should('be.visible')
            .within(() => {
                // Procura os campos dentro do formulário encontrado
                cy.get('input[name*="name"]').should('be.visible').type('Teste Nexdom');
                cy.get('input[name*="email"]').should('be.visible').type('teste@nexdom.com');

                // Procura o botão de envio dentro do form
                cy.get('button[type="submit"], input[type="submit"]').should('exist');
            });
    });
});
