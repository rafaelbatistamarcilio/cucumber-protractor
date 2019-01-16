const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require("chai-as-promised")).expect;

const MainPO = require('../po/main.po');
const page = new MainPO();

Given(/^que o usuario esta na tela de pesquisa de planetas$/, async () => {
    await page.navegar();
});

When('o usuário digita {string} no campo de pesquisa', async nomePlaneta => {
    await page.pesquisar(nomePlaneta);
});

Then(/^o sistema deve exibir "([^"]*)" planeta na lista de planetas$/, async quantidade => {
    await expect(page.recuperarPlanetas()).to.eventually.equal(quantidade);
});

Then(/^o nome do planeta deve ser "([^"]*)"$/, async nomePlaneta => {
    await expect(page.recuperarPlanetas()).to.eventually.contains(nomePlaneta);
});