
Feature: Busca de planetas do star wars
Scenario: Pesquisa de planetas do universo Star Wars pelo nome
Given que o usuario esta na tela de pesquisa de planetas
When o usuário digita "Ald" no campo de pesquisa
Then o sistema deve exibir "1" planeta na lista de planetas
And o nome do planeta deve ser "Aldeebaran"