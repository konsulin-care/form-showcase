// Render the QuestionnaireResponse as a pop-up window
function sendResponse() {
  //var url = "http://localhost:5555/fhir/QuestionnaireResponse";
  var url = "https://blaze-fhir-api.yumamo.com/fhir/QuestionnaireResponse";
  var qr = LForms.Util.getFormFHIRData("QuestionnaireResponse", "R4");
  window.alert(JSON.stringify(qr, null, 2));
  fetch(url, {
    method: "POST",
    body: JSON.stringify(qr),
    headers: {
      "accept": "application/fhir+json",
      "Content-Type": "application/fhir+json"
    }
  });
}
