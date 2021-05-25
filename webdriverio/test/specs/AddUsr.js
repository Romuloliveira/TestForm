const CreatePage = require('../../createUsrPage');
const UserList = require('../../userList');

describe('Teste de criacao de usuarios', () => {
    it('should add a new user', async () => {
        await CreatePage.open();

        await CreatePage.create('Teste', 'teste@gmail.com');
        await expect(UserList.nome).toBeExisting();
        await expect(UserList.email).toBeExisting();
        await expect(UserList.nome).toHaveTextContaining('Teste');
        await expect(UserList.email).toHaveTextContaining('teste@gmail.com');
    });
});


