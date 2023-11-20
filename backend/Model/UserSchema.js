const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilepicture: String,
  bio: String,
  reputation: { type: Number, default: 0 },
  questions: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Question' }],
  answers: [],
  joinedOn: { type: Date, default: Date.now },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  badge: String, 
});

UserSchema.pre('save', function (next) {
  if (this.reputation >= 1000) {
    this.badge = 'gold';
  } else if (this.reputation >= 500) {
    this.badge = 'silver';
  } else if (this.reputation >= 100) {
    this.badge = 'bronze';
  } else {
    this.badge = null; 
  }
  next();
});

module.exports = mongoose.model('userlist', UserSchema);
