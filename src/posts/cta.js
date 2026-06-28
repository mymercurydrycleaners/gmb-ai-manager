 id="k4pjzq"
function getCTA() {

  const ctas = [

    "Visit us today for premium garment care.",

    "Book your dry cleaning service today.",

    "Experience professional fabric care.",

    "Bring your garments for expert cleaning.",

    "Contact My Mercury Dry Cleaners today."

  ];

  return ctas[
    Math.floor(Math.random() * ctas.length)
  ];

}

module.exports = {
  getCTA
};
