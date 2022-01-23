import { database } from "./FirebaseHandler";
const db = database.ref('/')
const dbh = database.ref('/Longsor1')
const dbhistory = database.ref('/Longsor1/History')
class CrudHandler {
    getData(){
        return db
    }
    getHistory(){
        return dbhistory
    }
    createDataLocation(data){

        return dbh.update(data)

    }


}
export default new CrudHandler();