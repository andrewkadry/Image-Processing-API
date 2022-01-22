"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageResize_1 = __importDefault(require("../../utilities/imageResize"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const originalPath = './assets/full/' + req.query.name;
    const thumbPath = './assets/thumb/' + req.query.name;
    if (isNaN(Number(req.query.width)) ||
        isNaN(Number(req.query.height))) {
        res.send('height and width should be numbers!');
    }
    else if (fs_1.default.existsSync(thumbPath)) {
        res.sendFile('/assets/thumb/' + req.query.name, {
            root: path_1.default.join(__dirname, '../../..'),
        });
    }
    else {
        yield (0, imageResize_1.default)(originalPath, Number(req.query.width), Number(req.query.height), thumbPath);
        res.sendFile(thumbPath, {
            root: path_1.default.join(__dirname, '../../..'),
        });
    }
}));
exports.default = images;
