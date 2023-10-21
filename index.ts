abstract class Pessoa {
  private nome: string ="";
  private idade: number = 0;
  protected abstract cpf: number;
 
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida:string) {
    return `${this.nome} está comendo ${comida}`;
  }

  public andar() {
    return `${this.nome} está andando`;
  }

  public aniversario() {
    return `${this.nome} está fazendo ${++this.idade} anos`;
  }

  public getNome() {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }
  public abstract informeCPF(): string;
     
  
}

class Aluno extends Pessoa {
  protected cpf: number = 123456789;
  private _universidade: string = "Uninove";

  constructor() {
    super("Mike", 30);
  }

  get universidade() {
    return this._universidade;
  }
  set universidade(universidade: string) {
    this._universidade = universidade;
  }

  public estudar() {
    return `${this.getNome()} está estudando`;
  }

  public fazerProva() {
    return `${this.getNome()} está fazendo prova`;
  }
  public informeCPF(): string {
   return `Seu cpf é ${this.cpf}`; 
  }
}

const mike = new Aluno();
console.log(mike.universidade)
mike.universidade = "Udemy"
console.log(mike.universidade)
console.log(mike.informeCPF())