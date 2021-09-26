import express from "express";
import axios from "axios";

const app = express();

app.use(express.urlencoded({ extended: true }));