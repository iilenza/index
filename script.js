let basePrice = 100;

document.getElementById("calculateBtn").addEventListener("click", function() {
  let finalPrice = basePrice;

  let education = parseFloat(document.getElementById("education").value);
  finalPrice *= education;

  let familyNetWorth = parseFloat(document.getElementById("familyNetWorth").value);
  finalPrice *= familyNetWorth;

  let caste = parseInt(document.getElementById("caste").value);
  finalPrice += caste;

  let skillsTotal = 0;
  if (document.getElementById("musical").checked) skillsTotal += parseInt(document.getElementById("musical").value);
  if (document.getElementById("cook").checked) skillsTotal += parseInt(document.getElementById("cook").value);
  if (document.getElementById("easygoing").checked) skillsTotal += parseInt(document.getElementById("easygoing").value);
  if (document.getElementById("sing").checked) skillsTotal += parseInt(document.getElementById("sing").value);
  finalPrice += skillsTotal;

  let age = document.querySelector('input[name="age"]:checked').value;
  finalPrice *= parseFloat(age);

  if (document.getElementById("gossipParents").checked) finalPrice *= parseFloat(document.getElementById("gossipParents").value);
  if (document.getElementById("gossipCharacter").checked) finalPrice *= parseFloat(document.getElementById("gossipCharacter").value);
  if (document.getElementById("gossipGeneral").checked) finalPrice += parseInt(document.getElementById("gossipGeneral").value);

  document.getElementById("finalPrice").textContent = finalPrice.toFixed(2);

  document.getElementById("finalPrice").style.color = finalPrice > 200 ? "green" : "red";
});
