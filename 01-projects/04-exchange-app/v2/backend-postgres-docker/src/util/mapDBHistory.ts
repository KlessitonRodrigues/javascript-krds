export default function mapDBHistory(dbHistory: DBTypes.History[]): UserTypes.UserHistory[] {
    return dbHistory.map((dbHis) => {
        return {
            to: dbHis.history_to,
            from: dbHis.history_from,
            amount: dbHis.history_amount,
            createdAt: dbHis.history_createdat,
            rate: dbHis.history_rate,
            result: dbHis.history_result,
        }
    })
}
