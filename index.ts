interface Users {
    firstName: string;
    lastName: string;
    age: number;
}


export class Database {
    private static instance: Database;
    private users: Users[] = [];

    private constructor() { }

    public static getInstance(): Database {
        if (this.instance === null) {
            this.instance = new Database();
        }
        return Database.instance;
    }

    add(users: Users): void {
        this.users.push(users)
    }

    remove(index: number): void {
        this.users.splice(index, 1)
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}

const database: Database = Database.getInstance();

