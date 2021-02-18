function criaPessoa(nome, idade){
  const criaPessoaPrototype = {
  falar(){  console.log(`${this.name} está falando`);},
  comer(){  console.log(`${this.name} está comendo`);},
  beber(){  console.log(`${this.name} está bebendo`);}
  }
  return Object.create(criaPessoaPrototype, {
    name:{
      value: nome
    },
    age:{
      value: idade
    }
  })
}

const p1 = new criaPessoa("kkk", 20)
console.log(p1);
