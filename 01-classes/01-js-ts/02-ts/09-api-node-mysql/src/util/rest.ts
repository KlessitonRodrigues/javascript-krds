import { Response } from "express";

const returnErrorsOnRoutes: boolean = true;

// HTTP codes
// 1xx informational responses
// 2xx success responses
// 3xx redirection responses
// 4xx client errors
// 5xx server errors

export const REST = {
    success(res: Response, msg: string, data?: any) {
        res.status(200).json({
            success: true,
            message: msg,
            data,
        });
    },

    resourceCreated(res: Response, msg: string, data?: any) {
        res.status(201).json({
            success: true,
            message: msg,
            data,
        });
    },

    reloadClient(res: Response, msg: string, data?: any) {
        res.status(205).json({
            success: true,
            message: msg,
            data,
        });
    },

    badRequest(res: Response, msg: string, error?: any) {
        res.status(400).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    notAuthenticated(res: Response, msg: string, error?: any) {
        res.status(401).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    notFound(res: Response, msg: string, error?: any) {
        res.status(404).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    notSupportedMediaType(res: Response, msg: string, error?: any) {
        res.status(415).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    badContentType(res: Response, msg: string, error?: any) {
        res.status(422).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    tooManyRequests(res: Response) {
        res.status(429);
    },

    systemError(res: Response, msg: string, error?: any) {
        res.status(500).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    invalidRequestMethod(res: Response, msg: string, error?: any) {
        res.status(501).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    gatewayError(res: Response, msg: string, error?: any) {
        res.status(502).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    serviceUnavailable(res: Response, msg: string, error?: any) {
        res.status(503).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    gatewayTimeOut(res: Response, msg: string, error?: any) {
        res.status(504).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },

    networkAuthenticationRequired(res: Response, msg: string, error?: any) {
        res.status(511).json({
            success: false,
            message: msg,
            error: returnErrorsOnRoutes ? error : null,
        });
    },
};
