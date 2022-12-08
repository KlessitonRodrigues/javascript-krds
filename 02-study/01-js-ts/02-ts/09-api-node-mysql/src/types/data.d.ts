type User = {
    id: string;
    name: string;
    email: string;
    age: number;
    weight: number;
    height: number;
    createdAt: string;
    updatedAt: string;
};

type RESTResponse = {
    success: boolean;
    message: string;
    data?: any;
    error?: any;
};
