// Generate FHIR questionnaires
fetch("forms/medication-v1.0.0.json")
  .then(res => res.json())
  .then(data => LForms.Util.addFormToPage(data, "medication"))

fetch("forms/phq-9-v1.0.0.json")
  .then(res => res.json())
  .then(data => LForms.Util.addFormToPage(data, "phq"))
