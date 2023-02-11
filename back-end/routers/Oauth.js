import express from "express";
import passport from "passport";
import "../helper/passport.js";

const oauthRouter = express.Router ();

const CLIENT_URL = 'http://localhost:3000/';

oauthRouter.get ('/login/failed', (req, res) => {
  res.status (401).json ({
    success: false,
    message: 'failure!',
  });
});
oauthRouter.get ('/login/success', (req, res) => {
  if (req.user) {
    res.status (200).json ({
      success: true,
      message: 'successfull!',
      user: req.user,
    });
  }
});
oauthRouter.get ('/logout', (req, res) => {
  req.logout ();
  res.redirect (CLIENT_URL);
});
oauthRouter.get (
  '/google',
  passport.authenticate ('google', {
    scope: ['profile', 'email'],
  })
);
oauthRouter.get ('/google/callback', passport.authenticate ('google', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed',
}));

oauthRouter.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

oauthRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default oauthRouter;