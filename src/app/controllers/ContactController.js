const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
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
