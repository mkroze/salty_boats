const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    urgency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Donation =
  mongoose.models.Donation || mongoose.model('Donation', DonationSchema);
export default Donation;
