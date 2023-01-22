import mongoose, { Error } from 'mongoose'

export default async () => {
    const user = process.env.MONGO_CLUSTER_USER || ''
    const key = process.env.MONGO_CLUSTER_KEY || ''
    const dbName =
        process.env.NODE_ENV !== 'test'
            ? process.env.MONGO_CLUSTER_DB_NAME
            : process.env.MONGO_CLUSTER_DB_NAME_TEST

    const uri = `mongodb+srv://${user}:${key}@mycluster.lvt9x.mongodb.net/${dbName}`
    try {
        const mongo = await mongoose.connect(uri)
        return mongo
    } catch (err) {
        throw new Error('Database is not connected!')
    }
}