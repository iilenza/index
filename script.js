const basePrice = 100;

document.getElementById("calculateBtn").addEventListener("click", () => {
  let finalPrice = basePrice;
  const brideName = document.getElementById("brideName").value;

  if (!brideName) {
    alert("Please enter the name.");
    return;
  }

  const education = parseFloat(document.getElementById("education").value);
  const familyNetWorth = parseFloat(document.getElementById("familyNetWorth").value);
  finalPrice *= education * familyNetWorth;

  const caste = parseInt(document.getElementById("caste").value);
  finalPrice += caste;

  const skillsCheckboxes = ["musical", "cook", "easygoing", "sing"];
  const skillsTotal = skillsCheckboxes.reduce((total, id) => {
    return total + (document.getElementById(id).checked ? parseInt(document.getElementById(id).value) : 0);
  }, 0);
  finalPrice += skillsTotal;

  const ageMultiplier = parseFloat(document.querySelector('input[name="age"]:checked').value);
  finalPrice *= ageMultiplier;

  const reputationChecks = [
    { id: "gossipParents", multiplier: parseFloat(document.getElementById("gossipParents").value) },
    { id: "gossipCharacter", multiplier: parseFloat(document.getElementById("gossipCharacter").value) },
    { id: "gossipGeneral", multiplier: parseFloat(document.getElementById("gossipGeneral").value), addToPrice: true }
  ];

  reputationChecks.forEach(({ id, multiplier, addToPrice }) => {
    if (document.getElementById(id).checked) {
      if (addToPrice) {
        finalPrice += multiplier;
      } else {
        finalPrice *= multiplier;
      }
    }
  });

  finalPrice = Math.round(finalPrice);

  document.getElementById("finalPrice").textContent = finalPrice;
  document.getElementById("finalPrice").style.color = finalPrice > 200 ? "green" : "red";

  document.getElementById("loveLetter").textContent = `Your price for ${brideName} is $${finalPrice}. Dearest ${brideName}, my heart belongs to you. With every quality, your worth grows, and I am ever more certain that our love is priceless.`;
});
