Acesso ao projeto

-- Testes Frontend
1- clonar o repositório, nesse caso usei o Intellij
git clone https://github.com
cd Automacao_nexdom_teste

-- Testes Backend
2- Para que os testes de backend funcione, é necessário um Personal Access Token (PAT) do GitHub com as permissões repo e delete_repo.
Variáveis de Ambiente (Postman)
No arquivo environment.json, configure as seguintes chaves:
baseUrl: https://api.github.com
token: Seu Token do GitHub (Bearer).
owner: Seu usuário do GitHub.

3- Via Postman
Importe a collection (postman/collection.json) e o environment (postman/environment.json),
Clique em Run Collection

Link Collections Postman: https://orange-flare-282760.postman.co/workspace/My-Workspace~b9a38151-19b9-4bdd-8db2-02d39e41f357/collection/15801326-6c8f37be-4239-4d86-a077-54e698440b48?action=share&creator=15801326&active-environment=15801326-536a6983-83f6-4e1f-b2d1-acfbaf614270
