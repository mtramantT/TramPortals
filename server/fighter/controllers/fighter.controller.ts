import express from 'express';
import fighterService from '../service/fighter.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:fighter-controller');
type Request = express.Request;
type Response = express.Response;

class FighterController {
    async listFighters(req: Request, res: Response) {
        const fighters = await fighterService.list(100, 0);
        res.status(200).send(fighters);
    }

    async getFighterById(req: Request, res: Response) {
        const fighter = await fighterService.readById(req.body.id);
        res.status(200).send(fighter)
    }
}

export default new FighterController();