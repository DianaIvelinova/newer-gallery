const admin = require("firebase-admin");
var serviceAccount = require("../../db-new-gallery-firebase-adminsdk-peqzf-b9c33502b6.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://db-new-gallery-default-rtdb.europe-west1.firebasedatabase.app/",
  });
}

async function authUser(req) {
  try {
    const jsonedCookie = await JSON.parse(req.cookies["auth"]);
    if (!jsonedCookie || !jsonedCookie.token)
      return { ok: false, error: "no cookie or cookie token found" };

    const user = await admin.auth().verifyIdToken(jsonedCookie.token);

    return !user ? { ok: false, error: "invalid user" } : { ok: true, user };
  } catch (err) {
    return { ok: false, error: err };
  }
}

export default async function handler(req, res) {
  const db = admin.database();

  if (req.body.action == "createAlbum") {
    try {
      const user = await admin.auth().verifyIdToken(req.body.token);
      if (!user && !user.uid) return;
      const uid = user.uid;
      const albumRef = db.ref("albums");
      const newAlbumRef = albumRef.push();
      const key = newAlbumRef.key;

      let photos = [...(req.body.photos || [])];
      for (let i = 0; i < photos.length; i++) {
        let id = photos[i].id;
        photos[id] = photos[i];
        delete photos[id].id;
        delete photos[i];
      }

      console.log(photos)
      
      let dataset = {
        name: req.body.name,
        desc: req.body.desc,
        uid: uid,
        timestamp: new Date().getTime(),
        photos: photos,
      };
      newAlbumRef.set(dataset);

      const albumKeyRef = db.ref(`/albumKeys/${key}`);
      albumKeyRef.set(true);

      return res.status(200).json({ ok: true, key });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  }

  if (req.body.action == "albumData") {
    const ref = db.ref(`albums/${req.body.key}`);
    const snapshot = await ref.once("value");
    let data = snapshot.val();

    return res.status(200).json({ ok: true, data: data });
    //return res.status(200).json(stringifiedData);

  }

  if (req.body.action == "deletePhoto") {
    const userValidation = await authUser(req);
    const albumID= req.body.albumID
    const photoID= req.body.photoID

    if (!userValidation || !userValidation.ok) {
      return res.status(401).json(userValidation);
    }

    if (!albumID || !photoID) {
      return res.status(404).json({ ok: true, error: "No albumID or photoID" });
    }

    if (albumID.indexOf("/") !== -1 || photoID.indexOf("/") !== -1 || albumID.length < 5 || photoID.length < 5) {
      return res.status(511).json({ ok: true, error: "Invalid albumID or photoID" });
    }

    db.ref(`albums/${albumID}/photos/${photoID}`).remove()

    return res.status(200).json({ ok: true, error: "the photo has been deleted successfully" });
  }

  return res.status(405).json({ ok: false, error: "Method not supported" });
}
