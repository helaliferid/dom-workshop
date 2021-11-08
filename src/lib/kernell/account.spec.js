const Account = require('./compte');

describe('Account test Suite', () => {
    it('Ok Code setters and getters', () => {
        //Arrange
        let accountMock = new Account('411', 'Client', '4');

        //Act
        accountMock.Code = '411000'

        //Assert
        expect(accountMock.Code).toEqual('411000');
    })
    it('Fail if Code is set with object as value', () => {
        //Arrange
        let accountMock = new Account('411', 'Client', '4');

        //Act

        //
        try {
            accountMock.Code = { code: '411000' }
        }
        catch (error) {
            expect(error.message).toEqual('Error: value passed must be string with length greater then 4 chars');
        }
    })
    it('Fail if Code length is less than 3', () => {
        //Arrange
        let accountMock = new Account('411', 'Client', '4');

        //Act
        try{
            accountMock.Code = '41'
        }catch(error){
            //Assert or expect
            expect(accountMock.Code).toEqual('411');   
        }

    })
})