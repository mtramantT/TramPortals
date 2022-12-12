import FighterDao from "../daos/fighter.dao";
import { CRUD } from "../../common/crud.interface";

// class FighterService implements CRUD {
class FighterService {

    async list(limit: number, page: number) {
        return FighterDao.getFighters();
    }

    async readById(id: string) {
        return FighterDao.getFighter(id);
    }

}

export default new FighterService();