import express from 'express';
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from '../controllers/room.js';

import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyAdmin, createRoom);
router.put('/:id', verifyAdmin, updateRoom);
router.delete('/:id', verifyAdmin, deleteRoom);
router.get('/:id', verifyAdmin, getRoom);
router.get('/', verifyAdmin, getRooms);

export default router;
