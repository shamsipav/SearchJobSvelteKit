import {handler} from "../build/handler.js";
import express from "express";
import {vacancies} from "./vacancies.js";
import {companies} from "./companies.js";

const app = express();

// add a route that lives separately from the SvelteKit app
app.get("/healthcheck", (req, res) => {
    res.end("ok");
});

app.get("/api/companies", function (request, response) {
    response.send(companies);
});

app.get("/api/vacancies", function (request, response) {
    let amount = request.query.amount;
    response.send([...vacancies].splice(0, amount));
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log("listening on port 3000");
});
