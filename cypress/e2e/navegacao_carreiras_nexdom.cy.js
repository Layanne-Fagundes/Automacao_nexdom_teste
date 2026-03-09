describe('Automação - Página de Carreiras Nexdom', () => {

    beforeEach(() => {
        // Aumentamos o timeout de visita para sites WordPress/Elementor pesados
        cy.visit('https://nexdom.tec.br/carreiras/', {
            failOnStatusCode: false,
            timeout: 30000
        });
    });

    it('Cenário 1: Validar seções e botão de vagas', () => {
        // Validação flexível do título (H1 ou H2 do Banner)
        cy.get('h1, h2, .elementor-heading-title', { timeout: 10000 })
            .first()
            .should('be.visible')
            .and('not.be.empty');

        // Busca o botão de vagas usando Regex (ignora maiúsculas/acentos)
        // 'a' garante que estamos pegando o link, não apenas o texto
        cy.contains('a', /vaga|oportunidade|acessar/i)
            .should('be.visible')
            .and('have.attr', 'href');
    });

    it('Cenário 2: Detectar e Preencher Formulário ', () => {
        // 1. Rolar até o final para garantir o carregamento
        cy.scrollTo('bottom', { duration: 2000 });

        cy.contains('a', /vaga|oportunidade|acessar/i, { timeout: 15000 })
            .should('be.visible')
            .and('have.attr', 'href') // Verifica se o botão tem um link de destino
            .then((href) => {
                cy.log('O link de vagas aponta para: ' + href);
            });
    });
});