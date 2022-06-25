const  { Schema, model } = require('mongoose');


const userSchema = new Schema({
    // Add individual properties and their types
    // Setting required to true will disallow null values
    username: { type: String, required: true, unique: true, trim: true},
    email: { type: String, required: true, unique: true},
    thoughts: [ { type: Schema.Types.ObjectId, ref: 'thought', }, ],
    friends: [ { type: Schema.Types.ObjectId, ref: 'user', }, ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,});

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })

const User = model('user', userSchema);
module.exports = User;