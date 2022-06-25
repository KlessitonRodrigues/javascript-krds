class Responses {
    data = (data: any) => {
        return {
            success: true,
            msg: "",
            data,
        };
    };

    error = (msg: string) => {
        return {
            success: false,
            msg: msg || "unauthorized",
            data: {},
        };
    };

    unauthorized = (msg: string) => {
        return {
            success: false,
            msg: msg || "unauthorized",
            data: {},
        };
    };
}

export default new Responses();
