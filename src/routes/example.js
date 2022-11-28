const { Router, response } = require('express');

const getTest = async (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: 'Successful test for method get',
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: 'Oups! Something went wrong :O',
    });
  }
};

const deleteTest = async (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: 'Successful test for method delete',
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: 'Oups! Something went wrong :O',
    });
  }
};

const postTest = async (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: `The response for post method is: ${Object.values(req.body)}`,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: 'Oups! Something went wrong :O',
    });
  }
};

const putTest = async (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: `The response for put method is: ${Object.values(req.body)}`,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: 'Oups! Something went wrong :O',
    });
  }
};

const router = Router();

router.get('/get_method', getTest);

router.delete('/delete_method', deleteTest);

router.post('/post_method', postTest);

router.put('/put_method', putTest);

module.exports = router;
