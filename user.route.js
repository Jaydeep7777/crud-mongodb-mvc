import { Router } from 'express';
import multer, { diskStorage } from 'multer';
const router = Router();
import { getUserList, getUserById, createNewUser, updateUser, deleteUser } from '../controllers/user.controller';
import { extname } from 'path';

const storage = diskStorage({
    destination : './src/image/',
    filename : (req,file,cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${extname(file.originalname)}`)
    }
});

const upload = multer({
    storage : storage
})

router.get('/',getUserList);
router.get('/:id',getUserById);
router.post('/',upload.single('image'),createNewUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
export default router;