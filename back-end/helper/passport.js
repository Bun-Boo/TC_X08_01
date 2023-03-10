import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {  Strategy as FacebookStrategy} from "passport-facebook";
import ggUser from "../models/GgUser.js";

passport.use(new GoogleStrategy(
    {
      clientID: process.env.googleClientIDweb,
      clientSecret: process.env.googleClientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function (profile, accessToken, done){
      console.log(accessToken);
      if (profile.id) {
        ggUser.findOne ({googleId: profile.id}).then (existingUser => {
          if (existingUser) {
            done (null, existingUser);
          } else {
            new ggUser ({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.name.familyName + ' ' + profile.name.givenName,
            })
              .save ()
              .then (user => done (null, user));
          }
        });

      }
    })
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.facebookClientID,
        clientSecret: process.env.facebookClientSecret,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
        console.log("------")
        console.log(accessToken)
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user)
    })
  })