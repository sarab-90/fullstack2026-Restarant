// tokens generation
import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const generateAccessTokens = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" },
  );
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
}

export const generateRefreshTokens = (user) => {
    return jwt.sign({
        id: user.id,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
)
}
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
}
