const Page = require('./page');

class CreatePage extends Page {

    open () {
        return super.open('usuarios');
    }

    get inputUsername () { return $('[name="inputNome"]') }
    get inputEmail () { return $('[name="inputEmail"]') }
    get btnSubmit () { return $('button[type="submit"]') }


    async create (username, email) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputEmail).setValue(email);
        await (await this.btnSubmit).click();
    }

}

module.exports = new CreatePage();
