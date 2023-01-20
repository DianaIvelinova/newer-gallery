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
  if (req.body.action == "create album") {
    try {
      const user = await admin.auth().verifyIdToken(req.body.token);
      if (!user && !user.uid) return;
      const uid = user.uid;
      const db = admin.database();
      const albumRef = db.ref("albums");
      const newAlbumRef = albumRef.push();
      const key = newAlbumRef.key;
      let dataset = {
        name: req.body.name,
        desc: req.body.desc,
        uid: uid,
        timestamp: new Date().getTime(),
        photos: req.body.photos
      };
      newAlbumRef.set(dataset);

      const albumKeyRef = db.ref(`/albumKeys/${key}`);
      albumKeyRef.set(true);

      return res.status(200).json({ status: true, key });
    } catch (error) {
        return res.status(500).json({ status: false, error });
    }
  }

  if (req.body.action == "albumData") {
    const db = admin.database();

    const ref = db.ref(`albums/${req.body.key}`);
    const snapshot = await ref.once("value");
    let data = snapshot.val();

    return res.status(200).json({ status: true, data: data });
  }

  return res.status(405).json({ status: false, error: "Method not supported" });
}
