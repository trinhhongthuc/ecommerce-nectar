import passport from "passport";
import passportJWT from "passport-jwt";
import passportLocal from "passport-local";

const JWTStrategy = passportJWT.Strategy;

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      // verify user credentials
      console.log("User authentication successful");
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    async (jwtPayload, done) => {
      // verify JWT token
      console.log("User authentication successful");
    }
  )
);
