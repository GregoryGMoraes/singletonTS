import { Database } from './index';

export const database = Database.getInstance();
database.add({ firstName: 'Carlos', lastName: 'Alberto', age:  25});
database.add({ firstName: 'Maria', lastName: 'Clara', age:  18});
database.add({ firstName: 'Ana', lastName: 'Maria', age:  36});
database.add({ firstName: 'Antonio', lastName: 'Carlos', age:  45});
database.show()

