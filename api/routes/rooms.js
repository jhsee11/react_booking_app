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

router.post('/:hotelid', verifyAdmin, createRoom);

router.put('/availability/:id', verifyAdmin, updateRoom);

router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

router.get('/:id', getRoom);
router.get('/', getRooms);

export default router;
