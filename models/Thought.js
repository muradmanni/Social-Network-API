const {Schema, model} = require('mongoose');

const reactionSchema = new Schema({
  reactionBody: {type: String, required: true, maxLength: 280},
  username: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
},{
toJSON: {
  virtuals: true,
},
id: false,
})

reactionSchema
.virtual('getDate')
// Getter
.get(function () {
  return `${(this.createdAt.getDate())} ${new Intl.DateTimeFormat('en-US',{ month: 'long'}).format(this.createdAt)} ${this.createdAt.getFullYear()} `;
});




const thoughtSchema = new Schema({
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    // Use built in date method to get current date
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true},
    reactions: [reactionSchema],
},{
  toJSON: {
    virtuals: true,
  },
  id: false,
})


thoughtSchema
  .virtual('getDate')
  // Getter
  .get(function () {
    return `${(this.createdAt.getDate())} ${new Intl.DateTimeFormat('en-US',{ month: 'long'}).format(this.createdAt)} ${this.createdAt.getFullYear()} `;
  });
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;