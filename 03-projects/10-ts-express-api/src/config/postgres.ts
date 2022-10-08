import pg from 'pg'

const databaseUrl = process.env.DATABASE_URL

export default function postgresConfig() {
    const client = new pg.Client({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false },
    })

    client.connect((err) => {
        if (err) throw new Error("DB isn't connected")
    })

    return client
}
