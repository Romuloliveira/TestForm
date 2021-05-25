const Page = require('./page');

class UserList extends Page {
    /**
     * define selectors using getter methods
     */
    get nome () { return $('#nome') }
    get email () { return $('#email') }
}

module.exports = new UserList();
