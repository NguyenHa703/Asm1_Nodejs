import express  from "express";

import {
    getAll,
    getDetail,
    create,
    remove,
    update,

}from "../controller/user.js"
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id", getDetail);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", remove);

export default router;
