const Post = require('../models/Post')

exports.viewCreateScreen = function(req, res) {
  res.render('create-post')
}

exports.create = function(req, res) {
  let post = new Post(req.body, req.session.user._id)
  post.create().then(function(newId) {
    req.flash("success","New Post Created!")
    req.session.save(() => res.redirect(`/post/${newId}`))
  }).catch(function(errors) {
    errors.forEach((error) => {
      req.flash("errors",error)
    })
    req.session.save(() => res.redirect("/create-post"))
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
    let post = await Post.findSingleById(req.params.id, req.visitorId)
    if (post.isVisitorOwner) {
      res.render("edit-post", {post: post})
    } else {
      req.flash("errors", "You do not have permission to perform that action.")
      req.session.save(() => res.redirect("/"))
    }
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


exports.delete = (req, res) => {
  Post.delete(req.params.id, req.visitorId).then(() => {
    req.flash("success","Post Deleted!")
    req.session.save(() => { res.redirect(`/profile/${req.session.user.username}`)})
  }).catch(() => {
req.flash("errors","No permission")
req.session.save(() => res.redirect("/"))
  })
}