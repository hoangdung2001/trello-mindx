const list = require("./list");

const getAllList = async (req, res) => {
  console.log(req.params.listId);
  try {
    const getAllList = await list.find({ boardId: req.params.listId });
    console.log(getAllList);
    res.json(getAllList);
  } catch (error) {
    res.json(error);
  }
};
const createList = async (req, res) => {
  try {
    const newList = new list({
      title: req.body.title,
      boardId: req.body.boardId,
      order: req.body.order,
    });
    const createList = await newList.save();
    res.json(createList);
  } catch (error) {
    res.json(error);
  }
};
const updateLists = async (req, res) => {
  try {
    const update = req.body.data.map(async (item) => {
      await list.updateOne(
        { _id: item.id },
        {
          $set: { order: parseInt(item.order) },
        }
      );
    });
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = { getAllList, createList, updateLists };
