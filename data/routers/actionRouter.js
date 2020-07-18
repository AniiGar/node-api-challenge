const express = require('express');

const actions = require('../helpers/actionModel');

const router = express.Router();

// //--------------------
//     //Create
// //--------------------
router.post('/', (req, res) => {
    actions.insert(req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({message: 'null'})
        })
})

// //--------------------
//     //Read
// //--------------------
router.get('/', (req, res) => {
    actions.get()
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({message: "null"})
    })
})

// //--------------------
//     //Read - id
// //--------------------
router.get('/:id', (req, res) => {
    actions.get(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({message: "null"})
        })
})

// //--------------------
//     //Update - put
// //--------------------
router.put('/:id', (req, res) => {
    actions.update(req.params.id, req.body)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({message: 'The action could not be found'});
            }
        })
        .catch(err => {            
            res.status(500).json({message: 'Error udpdating action'})           
        })
})

// //--------------------
//     //Delete
// //--------------------
router.delete('/:id', (req, res) => {
    actions.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: 'The action has been deleted' });
            } else {
                res.status(404).json({ message: 'The action could not be found' });
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Error removing the action'})
        })
   
})


module.exports = router;