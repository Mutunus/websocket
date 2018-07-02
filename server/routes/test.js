const express = require('express');
const router = express.Router();

class Person {
    constructor(name, age) {
      this.name = name || 'no name',
      this.age = age || null
    }
  }

// FOR TESTING
router.get('/test/shittyserver', function(req, res, next) {
    if(Math.round(Math.random() * 10) % 2 === 0) {
        res
        .status(200)
        .send([
            new Person('Tim', 31),
            new Person('Chie', 38),
            new Person('Billy', 25)
        ]);
    }
    else {
        res
        .status(500)
        .send();
    }
    
});

router.get('/test/reallyshittyserver', function(req, res, next) {
    if(Math.round(Math.random() * 100) > 75) {
        res
        .status(200)
        .send([
            new Person('Tim', 31),
            new Person('Chie', 38),
            new Person('Billy', 25)
        ]);
    }
    else {
        res
        .status(500)
        .send();
    }
    
});

router.get('/test/delayResp', function(req, res, next) {
    setTimeout(() => {
        res.send(new Person(null, Math.round(Math.random() * 10)))
    }, 750)
})

router.get('/test/login', function(req, res, next) {
    setTimeout(() => {
        res.send({login: '378N2D1EDS'})
    }, 750)
})

router.get('/test/bullshit', function(req, res, next) {
    setTimeout(() => {
        res.send({bullshit: 'asdasd'})
    }, 750)
})

module.exports = router;