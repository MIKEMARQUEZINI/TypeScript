let hograts: string = "Harry Potter and the Goblet of Fire"; //string
hograts = "Roney ";

let date: number = 10; // number
date = 20;

let isWinter: boolean = false; // boolean
isWinter = true;

const magic = (value: string): string => {
  // function
  return value;
};

// console.log(magic("Avada Kedavra"));

//Array & Object

//step 1.0

let names: [string, string, boolean, number] = [
  "Harry",
  "Hermione",
  true,
  2023,
]; // array - tuplas você passar as propriedades na ordem dos tipos do array e a quantidade de elementos é fixa

//step 1.1

let names2: Array<string | number | boolean> = [
  "Harry",
  2023,
  true,
  "Roney",
  "Malfoi",
  "Cedrico",
  2018,
  "Avada Kedavra",
]; // array - perceba que nesse exemplo não temos a quantidade de elementos fixos, mas sim o tipo de elementos que podem ser inseridos no array

//step 2.0

let object: {} = { name: "Harry", Flying: false }; // OBJECT = object: {} aceita qualquer coisa, mas não é recomendado

//step 2.1

let object2: { name: string; Flying: boolean } = {
    Flying: false,
    name: "Harry", 
}; // OBJECT - as proprieades precisam ser as mesmas do objeto, mas não precisam estar na mesma ordem

//step 2.2

let object3: Array<{ name: string; Flying: boolean }> = [
  { name: "Harry", Flying: false },
  { name: "Hermione", Flying: true },
  { name: "Roney", Flying: false },
  { name: "Malfoi", Flying: false },
  { name: "Cedrico", Flying: false },
  { name: "Valdemort", Flying: true },
]; // OBJECT - array de objetos verifica se suas propriedades estão corretas

// console.log(object2);
// console.log(object3);
// console.log(object);

//any

let value: any = 4; // any aceita qualquer coisa, mas não é recomendado
value = "Roney";

//Union Types

let suits: string | boolean = true; // Union Types - aceita mais de um tipo de valor

suits = "Harry Potter";
suits = false;

//void

let pedidoIfood = (msg:string): void => {
    console.log("O pedido foi: " + msg);
}// void - não retorna nada

//never

const error = () : never => { // never - não retorna nada e não tem fim	
    throw new Error('você colocou algo que não deveria'); 
}

const loop = () : never => { // never - entrou em loop infinito
    while(true){
        console.log("Harry Potter");
    }
}

const validate= (value: any) => {
    if (typeof value === "string") {
      return console.log("é uma string") // ...
    } else if (typeof value === "number") {
      return console.log("é um number") // ...
    }
    console.log(error());
}


//alias 

//step before alias
let banana: string | number; // perceba que as 2 variaves possuem o mesmo tipo de atributo, com alias podemos criar um tipo de dado e aplicar para essas variaveis (vide exemplo abaixo)
let banana2: string | number;

// ############################################################

//step after alias

type alphanumerico = string | number; // alias - cria um tipo de dado

let dados: alphanumerico;
let dados2: alphanumerico;

//optional

const func = (nome: string, sobrenome?: string) => { // optional - não é obrigatório passar o segundo parâmetro
    if (!sobrenome) {  //se não tiver sobrenome
        return `Nome: ${nome}`;
    }
    return `Nome: ${nome}, Sobrenome: ${sobrenome}`; //se tiver sobrenome
} 


//Enum - aglomerado de dados

enum mes {
    JANEIRO = 1,
    FEVEREIRO = 2,
    MARCO = 3,
    ABRIL = 4,
    MAIO = 5,
    JUNHO = 6,
    JULHO = 7,
    AGOSTO = 8,
    SETEMBRO = 9,
    OUTUBRO = 10,
    NOVEMBRO = 11,
    DEZEMBRO = 12,
}

const pessoa: { nome: string; idade: number; mes: mes } = {
    nome: "Roney",
    idade: 20,
    mes: mes.JANEIRO,
};

if(pessoa.mes === mes.JANEIRO){
    console.log(pessoa);
}