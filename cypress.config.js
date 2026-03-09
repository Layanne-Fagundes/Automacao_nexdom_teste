const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://nexdom.tec.br',
        supportFile: false, // Desativamos temporariamente para isolar o erro
        specPattern: "**/*.{js,feature}", // Aceita tanto JS comum quanto BDD
        setupNodeEvents(on, config) {
            // Por enquanto, deixe vazio para testar a conexão
            return config;
        },
    },
});
