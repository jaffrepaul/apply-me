// const express = require('express');
const router = require('express').Router();
const resume = require('../controllers/resume.js');
const userHandler = require('../controllers/userHandler');
const job = require('../controllers/job.js');
const user = require('../controllers/user');
const comparison = require('../controllers/comparison.js');
const resource = require('../controllers/resource.js');

router.post('/resume', resume.uploadHandler);
router.post('/signUp', userHandler.signUp);
router.post('/job', job.handleJobAdd);
router.get('/comparison', comparison.getComparison);
router.post('/findUser', user.handleUserFind);
router.put('/updateUser', user.handleUpdateUser);
router.post('/resource', resource.handleResourceAdd);
router.get('/resource', resource.handleCheckResource);

module.exports = router;
