//common js - cjs
//const {add} = require("./functions");
//es6 - ES module - esm
import { add } from "./functions";

const output = add(1, 2);

console.log("turboCL -> file: main.js -> line 4 -> output", output);
