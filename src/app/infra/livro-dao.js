class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject)=>{
            this._db.all(
                'SELECT * FROM livros', (err, result)=>{
                    if(err){
                        return reject('não foi possivel listar os livros');
                    }
                    return resolve(result)
                }
            )
        })
        
    }
    adicionar(livro){
        return new Promise((resolve, reject)=>{
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values(?,?,?)
                `, 
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
            (err)=>{
                if(err){
                    console.log(err);
                    return reject('não foi possivel adicionar o livro');
                }
                resolve();
            }
            )
        })

    }
    remove(id){
        return new Promise((resolve, reject)=>{
            this._db.get(`
                DELETE
                FROM livros 
                WHERE id = ?`),
            [id],
            (err)=>{
                if(err){
                    console.log(err);
                   return reject('o livro não foi encontrado');
                }
                return resolve();
            }
        })
    }
}
module.exports = LivroDao;