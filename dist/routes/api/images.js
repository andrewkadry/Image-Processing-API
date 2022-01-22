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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)('./assets/full/' + req.query.name)
            .resize({
            width: Number(req.query.width),
            height: Number(req.query.height),
            fit: 'contain',
        })
            .toFile('./assets/thumb/' + req.query.name);
    }
    catch (error) {
        console.log(error);
        res.statusCode = 400;
        console.log(res.statusCode);
        res.send('error: the requested image cannot be found!');
    }
    res.sendFile('/assets/thumb/' + req.query.name, {
        root: path_1.default.join(__dirname, '../../..'),
    });
}));
exports.default = images;
