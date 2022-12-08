import express from "express";

import translate from "./routes/third/translate";

const router = express.Router();

// translate
router.post("/third/translate", translate.POST);

export default router;
