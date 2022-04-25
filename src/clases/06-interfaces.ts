interface User extends BaseCategory {
  email: string,
  cateogry: Category;
}

interface Category extends BaseCategory { }

interface BaseCategory {
  readonly id: string,
  name: string;
}

const user1: User = {
  id: '1',
  cateogry: { id: '12', name: 'cat1' },
  email: '@gmail',
  name: 'user1'
};


const users: User[] = [];

function addUser ( data: User ) {
  // data.id = "1"; no me permite sobreescribir
  users.push( data );
}