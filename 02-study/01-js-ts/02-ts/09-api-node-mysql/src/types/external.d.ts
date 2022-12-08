import { Request, Response } from "express";

export type ExpressRoute = (req: Request, res: Response) => Promisse<void>;
