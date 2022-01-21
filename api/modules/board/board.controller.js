const boardModel = require("./board");
const listModel = require("../list/list");
const cardModel = require("../card/card");

const getAllBoard = async (req, res) => {
  try {
    const getAllBoard = await boardModel.find();
    res.json(getAllBoard);
  } catch (error) {
    res.json(error);
  }
};
const createBoard = async (req, res) => {
  try {
    const newBoard = new boardModel({
      title: req.body.title,
      background: req.body.background,
    });
    const createBoard = await newBoard.save();
    res.json(createBoard);
  } catch (error) {
    res.json(error);
  }
};

const getBoard = async (req, res) => {
  try {
    const { boardId } = req.params;

    const foundBoard = await boardModel.findById(boardId).lean();

    const columns = await listModel.find({ boardId }).sort({ order: 1 }).lean();

    const boardCards = await cardModel
      .find({ boardId })
      .sort({ order: 1 })
      .lean();

    const columnOrder = columns.map((col) => col._id);

    const formatCols = columns.map((col) => {
      const cards = boardCards
        .filter((c) => String(c.listId) === String(col._id))
        .map((c) => ({
          id: c._id,
          title: c.title,
          boardId: c.boardId,
          columnId: c.listId,
        }));
      const cardOrder = cards.map((c) => c.id);

      return {
        id: col._id,
        boardId: col.boardId,
        title: col.title,
        cardOrder,
        cards,
      };
    });

    const responseBoard = {
      id: foundBoard._id,
      columnOrder,
      columns: formatCols,
    };

    res.json(responseBoard);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const updateBoard = async (req, res) => {
  const updatedBoard = req.body;
  const { boardId } = req.params;

  const { columns } = updatedBoard;

  // Delete many col, card thuộc boardId
  try {
    await Promise.all([
      cardModel.deleteMany({ boardId }),
      listModel.deleteMany({ boardId }),
    ]);

    const willInsertCols = columns.map((col, idx) => {
      return {
        title: col.title,
        order: idx,
        boardId,
      };
    });
    const insertedCols = await listModel.insertMany(willInsertCols);

    const willInsertCards = [];
    insertedCols.forEach((col, colIdx) => {
      const cards = columns[colIdx].cards;

      cards.forEach((card, idx) =>
        willInsertCards.push({
          title: card.title,
          order: idx,
          boardId,
          listId: col._id,
        })
      );
    });

    await cardModel.insertMany(willInsertCards);

    res.send({ success: 1 });
  } catch (error) {
    console.log(error);
    res.send({ success: 0 });
  }

  // board: trống

  // Insert col, card theo dữ liệu columns gửi lên // dùng insertMany
};
module.exports = { getAllBoard, createBoard, getBoard, updateBoard };
