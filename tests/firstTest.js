const { Builder, By, Key } = require('selenium-webdriver');

async function toDoList() {

    // Abrir o navegador
    let driver = await new Builder().forBrowser('firefox').build();

    // Navegar até ao site
    await driver.get('https://herziopinto.github.io/lista-de-tarefas/');

    //Criar as tarefas em array
    const tarefas = ['Acordar cedo', 'Limpar a casa', 'Passear o cão', 'Lavar a louça', 'Tomar o pequeno almoço',
     'Ir treinar', 'Tomar banho', 'Vestir a roupa', 'Pegar no carro', 'Ir à Espanha beber um Mojito'];

    // Loop for para adicionar as tarefas
    for (let i = 0; i < 10; i++) {
        let task = `${tarefas[i]}`; 
        await driver.findElement(By.id("inputTask")).sendKeys(task, Key.RETURN);

        // Intervalo de tempo entre escrita de tarefas
        await sleep(500);
    }

    // Fechar navegador
    await driver.quit();
}

// Função sleep para intervalo de tempo entre escrita de tarefas
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
toDoList();