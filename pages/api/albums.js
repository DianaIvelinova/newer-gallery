const admin = require("firebase-admin");
var serviceAccount = require("../../db-new-gallery-firebase-adminsdk-peqzf-b9c33502b6.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://db-new-gallery-default-rtdb.europe-west1.firebasedatabase.app/",
  });
  }

export default async function handler(req, res) {
      const db = admin.database();
      const ref = db.ref("albumKeys");
      const snapshot = await ref.once('value')
      let albumKeysdata = snapshot.val()

      const arrResult = Object.keys(albumKeysdata).map(arrKey => {
        return arrKey 
      });
      
      return res.status(200).json(arrResult);
    }
