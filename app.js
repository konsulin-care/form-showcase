// Generate FHIR questionnaires

function renderForm(qpath, qname) {
  fetch(qpath)
    .then(res => res.json())
    .then(data => LForms.Util.addFormToPage(data, qname))
}

renderForm("forms/bit-of-everything.json", "assessment")
