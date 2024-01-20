// Getter = Método especial que torna uma propriedade legivel
// Setter = Método especial que torna uma propriedade gravável
// São métodos interessantes para validar e/ou modificar uma propriedade quando estiver lendo/escrevendo ela

/*
class Retangulo{

    constructor(comprimento, largura){
        this.comprimento = comprimento;
        this.largura = largura;
    }

    set comprimento(novoComprimento){
        if(novoComprimento > 0){
            // O underline significa que a variavel é privada e não deveria ser modificada
            this._comprimento = novoComprimento;
        }else{
            console.error("Por favor, entre um número positivo para o comprimento");
        }
    }

    set largura(novaLargura){
        if(novaLargura > 0){
            // O underline significa que a variavel é privada e não deveria ser modificada
            this._largura = novaLargura;
        }else{
            console.error("Por favor, entre um número positivo para a largura");
        }
    }

    get comprimento() {
        return this._comprimento.toFixed(1)+"Cm";
    }

    get largura() {
        return this._largura.toFixed(1)+"Cm";
    }

    get area(){
        return (this._comprimento * this._largura).toFixed(1)+"Cm²";
    }
}

const retangulo = new Retangulo(21, 10);

//retangulo.largura = "A";

console.log(retangulo.comprimento);
console.log(retangulo.largura);
console.log(retangulo.area);
*/

class Pessoa{

    constructor(nome, sobreNome, idade){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = idade;
    }

    set nome(novoNome){
        if(typeof novoNome === "string" && novoNome.length > 0){
            // O underline significa que a variavel é privada e não deveria ser modificada
            this._nome = novoNome;
        }else{
            console.error("Nome deve ser um string não vazio");
        }
    }

    set sobreNome(novoSobrenome){
        if(typeof novoSobrenome === "string" && novoSobrenome.length > 0){
            // O underline significa que a variavel é privada e não deveria ser modificada
            this._sobreNome = novoSobrenome;
        }else{
            console.error("Sobrenome deve ser um string não vazio");
        }
    }

    set idade(novaIdade){
        if(typeof novaIdade === "number" && novaIdade > 0){
            // O underline significa que a variavel é privada e não deveria ser modificada
            this._idade = novaIdade;
        }else{
            console.error("Idade deve ser um número positivo");
        }
    }

    get nome() {
        return this._nome;
    }

    get sobreNome() {
        return this._sobreNome;
    }

    get idade(){
        return this._idade;
    }

    get nomeCompleto(){
        return this._nome+" "+this._sobreNome;
    }
}

const pessoa = new Pessoa("Rual", "Slin", 23);

console.log(pessoa.nome);
console.log(pessoa.sobreNome);
console.log(pessoa.nomeCompleto);
console.log(pessoa.idade);