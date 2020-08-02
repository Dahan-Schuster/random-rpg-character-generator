import path from 'path';
import crypto from 'crypto';
import multer from "multer";
import { Request } from "express";

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
	directory: tmpFolder,
	storage: multer.diskStorage({
		destination: tmpFolder,
		filename(
			req: Request,
			file: Express.Multer.File,
			callback: (error: (Error | null), filename: string) => void
		) {
			const hash = crypto.randomBytes(10).toString('hex')
			const filename = `${hash}-${file.originalname}`

			return callback(null, filename)
		}
	})
}
