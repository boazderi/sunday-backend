const boardService = require('./board.service.js')

const logger = require('../../services/logger.service')

// by arnon:working in postman 6.12
async function getBoards(req, res) {
  try {
    logger.debug('Getting Boards 9')
    // NOTE-filters in the front
    // const filterBy = {
    //   txt: req.query?.txt || ''
    // }
    const boards = await boardService.query()
    res.json(boards)
  } catch (err) {
    logger.error('Failed to get boards', err)
    res.status(500).send({ err: 'Failed to get boards' })
  }
}
// by arnon:working in postman 6.12
async function getBoardById(req, res) {
  try {
    const boardId = req.params.id
    const board = await boardService.getBoardById(boardId)
    // console.log(board)
    res.json(board)
  } catch (err) {
    logger.error('Failed to get board', err)
    res.status(500).send({ err: 'Failed to get board' })
  }
}

async function updateBoard(req, res) {
  
  try {
    const board = req.body
    // console.log(req.body)
    const updatedBoard = await boardService.update(board)
    res.json(updatedBoard)
  } catch (err) {
    logger.error('Failed to update board', err)
    res.status(500).send({ err: 'Failed to update board' })

  }
}
// by arnon:not necc meanwhile 6.12 
async function addBoard(req, res) {

  try {
    const board = req.body
    // board.owner = loggedinUser
    const boardId = await boardService.add(board)
    res.json(boardId)
  } catch (err) {
    logger.error('Failed to add board', err)
    res.status(500).send({ err: 'Failed to add board' })
  }
}

// by arnon:not necc meanwhile 6.12 
async function removeBoard(req, res) {
  try {
    const boardId = req.params.id
    const removedId = await boardService.remove(boardId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove board', err)
    res.status(500).send({ err: 'Failed to remove board' })
  }
}

// by arnon:not necc meanwhile 6.12
async function addBoardMsg(req, res) {
  const {loggedinUser} = req
  try {
    const boardId = req.params.id
    const msg = {
      txt: req.body.txt,
      by: loggedinUser
    }
    const savedMsg = await boardService.addBoardMsg(boardId, msg)
    res.json(savedMsg)
  } catch (err) {
    logger.error('Failed to update board', err)
    res.status(500).send({ err: 'Failed to update board' })

  }
}

// by arnon:not necc meanwhile 6.12
async function removeBoardMsg(req, res) {
  const {loggedinUser} = req
  try {
    const boardId = req.params.id
    const {msgId} = req.params

    const removedId = await boardService.removeBoardMsg(boardId, msgId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove board msg', err)
    res.status(500).send({ err: 'Failed to remove board msg' })

  }
}

module.exports = {
  getBoards,
  getBoardById,
  addBoard,
  updateBoard,
  removeBoard,
  addBoardMsg,
  removeBoardMsg
}
