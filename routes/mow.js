const express = require('express');
const Publication = require('../models/publication');
const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
const mowRouter = new express.Router();

// GET '/mow/create' - Renders mow/post creation page ❌
mowRouter.get('/create', routeGuard, (req, res) => {
  res.render('mow/create');
});
// POST '/mow/create' - Handles new mow/post creation ❌
mowRouter.post(
  '/create',
  routeGuard,
  fileUpload.single('picture'),
  (req, res, next) => {
    const { message } = req.body;
    let picture;
    if (req.file) {
      picture = req.file.path;
    }

    Publication.create({ message, picture, creator: req.user._id })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => next(err));

    // on model Publication we will call create method
  }
);

// GET '/mow/:id' - Loads mow/post cfrom database, renders single mow page ❌
mowRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Publication.findById(id)
    .populate('creator')
    .then((publication) => {
      res.render('mow/mow-single', { publication });
    })
    .catch((err) => next(err));
});

// GET '/mow/:id/edit' - Loads mow from database, renders edit page ❌
mowRouter.get('/mow/:id/edit', (req, res) => {});

// POST '/mow/:id/edit' - Handles edit form submission ❌
mowRouter.post('/mow/:id/edit', (req, res) => {});

// POST '/mow/:id/delete' - Handles deletion ❌
mowRouter.post('/mow/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Publication.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => next(err));
});

module.exports = mowRouter;
