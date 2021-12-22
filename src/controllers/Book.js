const hs = require("http-status");
const { listAllBooks, insertBook } = require("../services/Books.js");

const index = async (req, res) => {
  try {
    const result = await listAllBooks();
    res.status(hs.OK).send(result);
  } catch (error) {
    res
      .status(hs.INTERNAL_SERVER_ERROR)
      .send({ error: "There is a problem.." });
  }
};

const create = async (req, res) => {
  try {
    const createdUser = await insertBook(req.body);
    res.status(hs.OK).send(createdUser);
  } catch (error) {
    console.log(error);
    res
      .status(hs.INTERNAL_SERVER_ERROR)
      .send({ error: "There is a problem.." });
  }
};

module.exports = {
  index,
  create,
};
