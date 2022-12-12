import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import fighterController from './controllers/fighter.controller';
import fighterMiddleware from './middleware/fighter.middleware';

export class FighterRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'FighterRoutes')
    }

    configureRoutes(): express.Application {
        this.app
            .route('/fighters')
            .get(fighterController.listFighters);

        this.app
            .route('/fighters/:fighterId')
            .all(fighterMiddleware.extractFighterId)
            .get(fighterController.getFighterById)
        
        return this.app;
    }
    
}