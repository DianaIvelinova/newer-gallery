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
  const userValidation = await authUser(req);

  if (!userValidation || !userValidation.ok) {
    return res.status(401).json(userValidation);
  }

  const uploadImg = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
      },
    }
  );
  const jsonUploadImg = await uploadImg.json();
  return res.status(200).json({ url: jsonUploadImg?.result?.uploadURL });
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
