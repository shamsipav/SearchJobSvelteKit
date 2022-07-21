import {handler} from "../build/handler.js";
import express from "express";
import {vacancies} from "./vacancies.js";
import {companies} from "./companies.js";

const app = express();

// add a route that lives separately from the SvelteKit app
app.get("/healthcheck", (req, res) => {
    res.end("ok");
});

app.use("/api/vacancies", function (request, response) {
    response.send(vacancies);
});

app.use("/api/companies", function (request, response) {
    response.send(companies);
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log("listening on port 3000");
});
