async function runSeoAudit(business = {}) {

  const report = [];

  if (!business.description) {
    report.push("Business description is missing.");
  }

  if (!business.services || business.services.length === 0) {
    report.push("No services found.");
  }

  if (!business.photos || business.photos.length < 10) {
    report.push("Add more business photos.");
  }

  if (!business.posts || business.posts.length < 8) {
    report.push("Publish more Google Posts.");
  }

  if (!business.faqs || business.faqs.length === 0) {
    report.push("Add Frequently Asked Questions.");
  }

  const score = Math.max(0, 100 - report.length * 10);

  return {
    success: true,
    score,
    suggestions: report
  };

}

module.exports = {
  runSeoAudit
};

