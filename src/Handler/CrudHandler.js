import { database } from "./FirebaseHandler";
const db = database.ref('/')
class CrudHandler {
    getData(){
        return db
    }
    createDataLocation(key1, key2, data){
        const updater = db.child(key1).child(key2).update(data)
        return updater;

    }


}
export default new CrudHandler();