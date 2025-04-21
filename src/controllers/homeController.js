//middlleware renderizando o index.ejs(o 'html' do projeto)
exports.olaMundo = (req, res) => {
    res.render('index')
}