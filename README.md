# Background

This repository is a showcase of statically-rendered FHIR questionnaire using [LForms](https://github.com/lhncbc/lforms), a JavaScript function to render FHIR `Questionnaire` into a web form.

# Getting started

1. Install `http-server` using `npm`
   ```bash
   npm install http-server -g # Requires root since it is a global installation
   ```
1. Serve the page using `http-server`, disable cache, and set port to `8081` (or any other port numbers)
   ```bash
   http-server -c-1 -p 8081
   ```
1. Set up a standalone FHIR server using [Blaze](https://github.com/samply/blaze) on port `8082`
   ```bash
   docker run --name blaze -p 8082:8080 samply/blaze
   ```
1. Check that the FHIR server is running properly
   ```bash
   curl localhost:8082/fhir/metadata | jq ".software"
   ```
   It should return the following response:
   ```json
   {
     "name": "Blaze",
     "version": "0.24.1",
     "releaseDate": "2024-02-07"
   }
   ```
1. Visit served web at `http://localhost:8081` and submit a form
1. Now, it should populate the `QuestionnaireResponse` in the FHIR server
   ```bash
   curl localhost:8082/fhir/QuestionnaireResponse | jq ".total"
   ```
