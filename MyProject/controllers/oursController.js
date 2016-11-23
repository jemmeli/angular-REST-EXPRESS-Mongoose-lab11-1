var oursModel = require('../models/oursModel.js');

/**
 * oursController.js
 *
 * @description :: Server-side logic for managing ourss.
 */
module.exports = {

    /**
     * oursController.list()
     */
    list: function (req, res) {
        oursModel.find(function (err, ourss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ours.',
                    error: err
                });
            }
            return res.json(ourss);
        });
    },

    /**
     * oursController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        oursModel.findOne({_id: id}, function (err, ours) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ours.',
                    error: err
                });
            }
            if (!ours) {
                return res.status(404).json({
                    message: 'No such ours'
                });
            }
            return res.json(ours);
        });
    },

    /**
     * oursController.create()
     */
    create: function (req, res) {
        var ours = new oursModel({			nom : req.body.nom,			age : req.body.age
        });

        ours.save(function (err, ours) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating ours',
                    error: err
                });
            }
            return res.status(201).json(ours);
        });
    },

    /**
     * oursController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        oursModel.findOne({_id: id}, function (err, ours) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ours',
                    error: err
                });
            }
            if (!ours) {
                return res.status(404).json({
                    message: 'No such ours'
                });
            }

            ours.nom = req.body.nom ? req.body.nom : ours.nom;			ours.age = req.body.age ? req.body.age : ours.age;			
            ours.save(function (err, ours) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating ours.',
                        error: err
                    });
                }

                return res.json(ours);
            });
        });
    },

    /**
     * oursController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        oursModel.findByIdAndRemove(id, function (err, ours) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the ours.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
