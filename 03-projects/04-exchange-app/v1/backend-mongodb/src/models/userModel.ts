import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    amount: { type: String, required: true },
    result: { type: String, required: true },
    rate: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    history: [historySchema],
})

const UserModel = mongoose.model<UserTypes.User>('user', userSchema, 'Users')

export default UserModel
