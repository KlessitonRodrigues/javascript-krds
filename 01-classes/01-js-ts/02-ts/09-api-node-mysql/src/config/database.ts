export const databaseConfig = {
    development: {
        username: "dev_user",
        password: "12345",
        database: "sql_api",
        host: "127.0.0.1",
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
    },
};
