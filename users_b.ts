import { Database } from './index';
import './users_a';

export const database = Database.getInstance();
database.add({ firstName: 'Marcus', lastName: 'Ramanlho', age:  58});
database.add({ firstName: 'Amanda', lastName: 'Silva', age:  35});
database.show()

