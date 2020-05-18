const express = require('express');

const projects = require('../helpers/projectModel');

const router = express.Router();

// //--------------------
//     //Create
// //--------------------
router.post('/', (req, res) => {
    projects.insert(req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: "null" })
        })
})

// //--------------------
//     //Read - get
// //--------------------
router.get('/', (req, res) => {
    projects.get()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "null" })
        })
})

// //--------------------
//     //Read - id
// //--------------------
router.get('/:id', (req, res) => {
    projects.get(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "null" })
        })
})

// //--------------------
//     //Read -get actions
// //--------------------
router.get('/:id/actions', (req, res) => {
    projects.getProjectActions(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "null" })
        })
})

// //--------------------
//     //Update - put
// //--------------------
router.put('/:id', (req, res) => {
    projects.update(req.params.id, req.body)
        .then(project => {
            if(project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'The project could not be found' });
            }    
        })
        .catch(err => {
            res.status(500).json({ message: 'null' })
        })
})

// //--------------------
//     //Delete
// //--------------------
router.delete('/:id', (req, res) => {
    projects.remove(req.params.id)
        .then(id => {
            if(id > 0) {
                res.status(200).json({ message: 'The item has been deleted' });
            } else {
                res.status(404).json({ message: 'The item could not be found' });
            }
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ message: 'Error removing the hub' })
        })
})

module.exports = router;
