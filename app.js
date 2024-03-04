// Generate FHIR questionnaires

function renderForm(qpath, qname) {
  fetch(qpath)
    .then(res => res.json())
    .then(data => LForms.Util.addFormToPage(data, qname))
}

renderForm("forms/medication-v1.0.0.json", "medication")
renderForm("forms/phq-9-v1.0.0.json",      "phq")
