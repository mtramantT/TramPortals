import express from 'express';
import fighterService from '../service/fighter.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:fighter-controller');
class FighterMiddleware {
    async validateFighterExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) {
        const fighter = await fighterService.readById(req.params.fighterId);
        if (fighter) {
            next();
        } else {
            res.status(404).send({
                error: `Fighter ${req.params.fighterId} not found`
            })
        }
    }

    async extractFighterId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.userId;
        next();
    }

}

export default new FighterMiddleware();