
class LivroRepository {

    private livros:Livro[] = [];

   
    salvar(livro:Livro):void{
        // adicionar no array
        this.livros.push(
            {
                titulo: livro.titulo,
                subtitulo: livro.subtitulo,
                isbn: livro.isbn,
                editora: livro.editora,
                ano:livro.ano
            }
        )
    };


    consultarLivros():void{
        console.log(this.livros)
    }
}



class Livro {
    titulo:string;
    subtitulo:string;
    isbn:string;
    editora:string;
    ano:number;

   
    constructor(titulo:string,subtitulo:string,isbn:string,editora:string,ano:number){
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.isbn = isbn;
        this.editora = editora;
        this.ano = ano
    }
}





const racionais = new Livro(
    "Racionais Mcs",
    "sobrevivendo no inferno",
    "978-85-359-3173-0",
    "Companhia das Letras",
    2018
);


const tabelaLivros = new LivroRepository()


tabelaLivros.salvar(racionais)
tabelaLivros.consultarLivros()