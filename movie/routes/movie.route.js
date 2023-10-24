const { Router } = require('express');
const { Mcreate, Mupdate, Mdelete, Mfilter, Mrating, Mcomment } = require('../controllers/movie.controller');
const { moviemiddle } = require('../middleware/user.middleware');

const movieRouter = Router();

movieRouter.post('/movie/create', moviemiddle, Mcreate);
movieRouter.patch('/movie/update/:id', Mupdate);
movieRouter.patch('/movie/rating/:id', Mrating);
movieRouter.patch('/movie/comment/:id', Mcomment);
movieRouter.get('/movie/filter', Mfilter);
movieRouter.delete('/movie/delete/:id', Mdelete);

module.exports = {movieRouter}
