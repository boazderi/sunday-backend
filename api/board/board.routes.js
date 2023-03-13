const express = require('express')
// todo-connect the auth middlewares afterWords-by ref
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')

const { getBoards, getBoardById, addBoard, updateBoard, removeBoard, addBoardMsg, removeBoardMsg } = require('./board.controller')

const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// todo-connect the auth middlewares afterWords-by ref
router.get('/', getBoards)
router.get('/:id', getBoardById)
router.post('/' , addBoard)
router.put('/:id', updateBoard)
router.delete('/:id', removeBoard)
// router.delete('/:id', requireAuth, requireAdmin, removeBoard)

router.post('/:id/msg', addBoardMsg)
router.delete('/:id/msg/:msgId', removeBoardMsg)

module.exports = router