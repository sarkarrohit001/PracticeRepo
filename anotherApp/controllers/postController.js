const Post = require('../models/Post')

exports.viewCreateScreen = function(req, res) {
  res.render('create-post')
}

exports.create = function(req, res) {
  let post = new Post(req.body, req.session.user._id)
  post.create().then(function() {
    res.send("New post created.")
  }).catch(function(errors) {
    res.send(errors)
  })
}

exports.viewSingle = async function(req, res) {
  try {
    let post = await Post.findSingleById(req.params.id, req.visitorId)
    res.render('single-post-screen', {post: post})
  } catch {
    res.render('404')
  }
}

exports.viewEditScreen = async function(req, res) {
  try {
    let post = await Post.findSingleById(req.params.id)
    res.render("edit-post", {post: post})
  } catch {
    res.render("404")
  }
}

exports.edit = function(req, res) {
  let post = new Post(req.body, req.visitorId, req.params.id)
  post.update().then((status) => {
    if(status == "success"){
      req.flash("success","Post updated successfully!")
      req.session.save(function(){
        res.redirect(`/post/${req.params.id}/edit`)
      })
    }
    else{
      post.errors.forEach(function(error){
        req.flash("errors", error)
      })
      req.session.save(function(){
        res.redirect(`/post/${req.params.id}/edit`)
      })
    }
  }).catch(() => {
    req.flash("Errors","No permission to perform action!")
    req.session.save(function(){
      res.redirect("/")
    })
  })

}