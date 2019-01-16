const browser =  require('protractor').browser;
const element =  require('protractor').element; 
const By =  require('protractor').By; 
const Config =  require('../../config/config'); 

class MainPO {

    async navegar(){
        await browser.get(Config.getHost());
    }

    async getBtnPesquisar(){
        return await element(By.id('btn-pesquisar'));
    }

    async getInputPlanetas(){
        return await element(By.id('inp-nome-planeta'));
    }

    /**
     * @returns {any[]}
     */
    async getListaPlanetas(){
        return await element(By.id('lista-planetas'));
    }

    async pesquisar(nomePlaneta){
        const input = await  this.getBtnPesquisar();
        await input.sendKeys(nomePlaneta);
        const btn = await this.getBtnPesquisar();
        btn.click();
    }

    async recuperarPlanetas(){
        const lista = await this.getListaPlanetas();
        const planetas = lista.map( async elemento => { return await elemento.getText() } )
        return planetas;
    }
}

module.exports = MainPO;