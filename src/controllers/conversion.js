import express from "express";
import htmlToPdf from "../helpers/html-to-pdf.js";

const router = express.Router();

router.post('/', async (req, res) => {
  const { html } = req.body;

  if (!html) {
    res.status(400).send('request body must contain html property');
    return;
  }

  console.log("Working on request")
  
  const pdf = await htmlToPdf(html);
  res.contentType('application/pdf');
  res.send(pdf);
})

export default router;