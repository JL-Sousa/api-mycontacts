class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Cria novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar registro
  }
}

module.exports = new ContactController();
