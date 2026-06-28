function generateSmartReply(review, rating = 5) {

  if (rating >= 5) {
    return "Thank you for your wonderful feedback! We are delighted that you had a great experience with My Mercury Dry Cleaners. We truly appreciate your support and look forward to serving you again.";
  }

  if (rating === 4) {
    return "Thank you for your kind words and valuable feedback. We are happy you enjoyed our service and look forward to welcoming you again.";
  }

  if (rating === 3) {
    return "Thank you for your feedback. We appreciate your review and will continue improving our service to provide an even better experience next time.";
  }

  return "Thank you for sharing your feedback. We are sorry your experience did not meet expectations. Please contact us directly so we can better understand the issue and make things right.";
}

module.exports = {
  generateSmartReply
};

