import multer from "multer";
import path from "path";
import { getTempDir, createUniqueFilename } from "./fileHandler.js";

// Get the appropriate temp directory for the current environment
const tempDir = getTempDir();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        // Generate unique filename using our utility
        const uniqueFilename = createUniqueFilename(file.originalname, file.fieldname);
        cb(null, uniqueFilename);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: function (req, file, cb) {
        // Accept image files and PDF files
        if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only image files and PDF files are allowed!'), false);
        }
    }
});

// Specific configuration for resume uploads
const resumeUpload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit for resumes
    },
    fileFilter: function (req, file, cb) {
        // Accept PDF and document files for resumes
        const allowedMimeTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF and Word documents are allowed for resumes!'), false);
        }
    }
});

export { upload as default, resumeUpload };
