async function retorna5() {

    let promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve(5), 1000)
    });

    let resultado = await promessa;

    console.log(resultado * 3);
}

retorna5();