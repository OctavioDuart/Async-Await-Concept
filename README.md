# Async-Await-Concept
Managing Asynchronous flow with Async Await


 - Async
 
  Quando declaramos a palavra Async antes de uma função estamos informando ao JavaScript que o retorno daquela função será uma promessa, independetemente do retorno, seja um simples valor como true o Asyn faz com que o JavaScript entenda aquilo como uma promessa : 
  
  
                                      async function minhaFuncao() {
                                          return true ;
                                      };

                                      minhaFuncao()
                                          .then(retorno_funcao => {
                                              console.log(retorno_funcao); // true
                                          });


Ok, entendemos que o conceito de Async se baseia em dizer ao JavaScript que aquela função retornará uma promessa, mas ele pode não ser o suficiente em alguns casos quando precisamos gerenciar o fluxo assíncrono do JavaScript, imagine um cenário onde precisamos trabalhar com o retorno de uma função . Por exemplo : 




                                    async function retorna5() {
                                      let promessa = new Promise((resolve, reject) => {
                                        setTimeout(() => resolve(5), 1000)
                                    });

                                    let resultado = promessa;

                                    // Na linha abaixo imagine que precisamos simplesmente 
                                    // Triplicar o valor do retorno da função 
                                    console.log(resultado * 3); // NaN
                                    }

                                    retorna5();
                                    
O que houve para que o retorno da função fosse Not-A-Number ? Simples, o console.log foi executado enquanto o status da promessa ainda esta era "Pending", ou seja , não havia um valor numérico para ser triplicado e sim um objeto informando que função estava pendente ainda . A solução para este caso seria : AGUARDAR a execução da promessa para DEPOIS o retorno ser triplicado e quando falamos de AGUARDAR entre o Await :



                                  async function retorna5() {
                                  let promessa = new Promise((resolve, reject) => {
                                      setTimeout(() => resolve(5), 1000)
                                  });

                                  let resultado = await promessa;

                                  console.log(resultado * 3); // 15
                                  }

                                  retorna5();
                                  
                                  
 A execução do código simplesmente pausa na linha onde a variável resultado recebe o valor da promessa para só depois a linha do console.log ser executada . 
 
 
 
 Obs : 

 * Await só pode ser usado com o Async, caso você use ele em funções regulares você terá como retorno um erro de sintaxe
 
 Referências : https://javascript.info/async-await 
