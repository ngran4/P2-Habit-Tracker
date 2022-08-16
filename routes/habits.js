const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, habitsController.index);
router.get('/new', habitsController.new);
router.get('/:id', habitsController.show);
router.post('/', habitsController.create);

router.delete('/:id', habitsController.delete);
router.get('/:id/edit', habitsController.edit);
router.put('/:id/update', habitsController.update);
router.post('/:id', habitsController.updateStreak);

module.exports = router;