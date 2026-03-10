## 🚀 Acesso ao Projeto

### 💻 Passo 1: Clonar o Repositório (Frontend/Local)
Para baixar o projeto e abrir no seu **IntelliJ**, utilize o comando abaixo no terminal ou a opção "Get from VCS" da IDE:
```bash
git clone https://github.com
cd Automacao_nexdom_teste


### 🌐 Testes de Backend

Para que os testes de backend funcionem corretamente, é necessário configurar um **Personal Access Token (PAT)** do GitHub com as permissões de escopo `repo` e `delete_repo`.

#### ⚙️ Variáveis de Ambiente (Postman)
No arquivo `environment.json`, certifique-se de configurar as seguintes chaves para a execução:

*   **baseUrl**: `https://api.github.com`
*   **token**: Insira o seu Token do GitHub (Bearer).
*   **owner**: Insira o seu nome de usuário do GitHub.


### 🧪 Execução via Postman

Para rodar os testes manualmente, siga estes passos:

1. **Importação**: Importe a collection (`postman/collection.json`) e o environment (`postman/environment.json`) para o seu workspace.
2. **Seleção de Ambiente**: No canto superior direito do Postman, selecione o ambiente que você acabou de importar.
3. **Execução**: Abra a collection, clique no botão **Run Collection** e depois em **Run GitHub API Tests**.


