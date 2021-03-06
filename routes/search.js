/**
 * Created by: Varun kumar
 * Date: 08 July, 2018
 * 
 * All routes starting with /search
 */

const express = require('express');
const router = express.Router();

const { searchSellers } = require('../services/searchService');


router.get('/sellers', (req, res) => {
  const params = req.query;
  searchSellers(params)
    .then(sellers => { 
      res.json({
        success: true,
        result: sellers
      });
    }).catch(err => {
      if (typeof(err) != 'string') {
        console.error('Error /search/sellers', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
    
});

module.exports = router;