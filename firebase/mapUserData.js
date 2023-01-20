export const mapUserData = (user) => {
  const { uid, email, xa, photoUrl, phoneNumber, metadata, claims } = user;
  return {
    uid,
    email,
    token: xa,
    photoUrl,
    phoneNumber,
    creationTime: metadata.creationTime,
    lastSignInTime: metadata.lastSignInTime,
    claims,
  };
};
