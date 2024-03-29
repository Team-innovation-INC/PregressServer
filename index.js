        //                                              //
       ///      middleware global for all routes      ///
      //                                              //

// ---- express package import
const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
// ---- app extract from express
const app = express();

// ---- json method execute as global middleware
app.use(express.json());

   /* /
  / ----- Parser middleware
 / */

// ---- parser packages import
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// ---- bodyParser applicator as middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ---- cookieParser applicator as middleware
app.use(cookieParser());

   /* /
  / ----- Cors middleware
 / */

// ---- cors package import
const cors = require("cors");

// ---- cors options
let corsOptions = {
  origin: true
}

// ---- core applicator as middleware
app.use(cors(corsOptions));

        //                    //
       ///      ROUTES      ///
      //                    //

   /* /
  / -----ROUTES API
 / */

// ------- router for test
app.get("/test", async(req,res) => {
  // #swagger.tags = ['server- test']
  return res.send("hello world!!")
})
// ------- router for client route
const ClientRoutes = require("./routes/users/user.routes");
app.use("/api/client", ClientRoutes);

// ------- router for client route
const AuthRoutes = require("./routes/users/auth.routes");
app.use("/api/auth", AuthRoutes);

// ------- router for company route
const AuthCompanyRoutes = require("./routes/Company/CompanyAuth.routes")
app.use("/api/company/", AuthCompanyRoutes)

// ------- router for client route
const swagger = require("./swagger/swagger")
app.use("/swagger", swagger);

// ------- router for messages route
// const EmailsRoutes = require("./routes/email/emailReport.routes");
// app.use("/api/email", EmailsRoutes)

        //                       //
       ///      Data base      ///
      //                       //

   /* /
  / ----- connect to database
 / */


        //                            //
       ///      Connect server      ///
      //                            //



module.exports = app