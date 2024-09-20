const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
//queremos primero qeu se conecte a lbd

dbCon().then((res) => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
