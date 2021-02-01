const Comment = require('../models/comments')
const Plano = require('../models/planos')
const User = require('../models/users')

module.exports = (app) => {

    // create
    app.post("/planos/:planoId/comments", function(req, res) {
        const comment = new Comment(req.body);
        comment.author = req.user._id
      
        comment
          .save()
          .then(comment => {
            return Plano.findById(req.params.planoId)
          })
          .then(plano => {
              plano.comments.unshift(comment)
              return plano.save()
          })
          .then(plano => {
            return res.redirect(`/planos/${plano._id}`);
          })
          .catch(err => {
            console.log(err);
          });
      });
}
