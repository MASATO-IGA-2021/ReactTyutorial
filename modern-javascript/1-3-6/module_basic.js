import { Article, getRectango, getTriangle } from "./app.js";

console.log(getTriangle(3,4));

const a = new Article();
console.log(a.getAppTitle());


import { getTriangle as gt } from "./app.js";
console.log(gt(1,1));

import * as app from "./app.js"
console.log(app.getRectango(1,3));

