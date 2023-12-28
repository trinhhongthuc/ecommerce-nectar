import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from "passport-local";

function initialize(
  getUserByEmail: (id: string) => void,
  getUserById: (id: string) => any
) {
  const LocalStrategy = passportLocal.Strategy;
  console.log("passportLocal");

  const authenticateUser = async (
    email: string,
    password: string,
    done: any
  ) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, "hashedPassword")) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, "123"));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById("123"));
  });
}
export default initialize;
