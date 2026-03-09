describe('Automação - Página Sobre Nós Nexdom', () => {

    beforeEach(() => {

        cy.visit('https://nexdom.tec.br/sobre-nos/', { failOnStatusCode: false });
    });

    it('Cenário 1: Validar Pilares Institucionais (Missão, Visão e Valores)', () => {
        // Valida se o título principal da seção institucional está presente
        cy.get('h2').should('be.visible');

        // Verifica se está carregando os textos
        const pilares = ['Missão', 'Visão', 'Valores'];

        pilares.forEach((pilar) => {
            cy.contains(pilar, { matchCase: false }).should('be.visible');
        });
    });
});
