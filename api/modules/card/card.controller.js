const card = require("./card");

const getAllCard = async (req, res) => {
  try {
    const getAllCard = await card.find({
      boardId: req.params.boardId,
      listId: req.params.listId,
    });
    res.json(getAllCard);
  } catch (error) {
    res.json(error);
  }
};
const createCard = async (req, res) => {
  try {
    const newCard = new card({
      title: req.body.title,
      boardId: req.body.boardId,
      listId: req.body.listId,
      order: req.body.order,
    });
    const createCard = await newCard.save();
    res.json(createCard);
  } catch (error) {
    res.json(error);
  }
};
const updateCards = async (req, res) => {
  try {
    req.body.data.map((item) => {
      item.map(async (item, index) => {
        console.log(item, index);
        await card.updateOne(
          { _id: item },
          {
            $set: { order: index },
          }
        );
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
};
const update = async (req, res) => {
  console.log(req.body);
  try {
    const updateCard = await card.updateOne(
      { _id: req.body.data.id },
      {
        $set: { listId: req.body.columnId },
      }
    );
    res.json(updateCard);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = { getAllCard, createCard, updateCards, update };
