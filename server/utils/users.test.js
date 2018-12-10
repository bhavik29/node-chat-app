const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Bhavik',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Bhavik',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
    
    it('should remove a user', () => {
        var user = users.removeUser('3');

        expect(user.id).toBe('3');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userList = users.removeUser('1000');

        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var user  = users.getUser('1');

        expect(user).toEqual({
            id: '1',
            name: 'Bhavik',
            room: 'Node Course'
        })
    });

    it('should not find user', () => {
        var user  = users.getUser('100');

        expect(user).toNotExist();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Bhavik', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});