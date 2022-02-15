export default function toDBHistory(history: UserTypes.UserHistory): DBTypes.History {
    return {
        history_to: history.to,
        history_from: history.from,
        history_amount: history.amount,
        history_createdat: history.createdAt,
        history_rate: history.rate,
        history_result: history.result,
    }
}
