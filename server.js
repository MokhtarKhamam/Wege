const jsonServer = require("json-server");
server = jsonServer.create();
const router = jsonServer.router("db.json");
const midlleware = jsonServer.defaults();

server.use(midlleware);

server.use((req, res, next) => {
  console.log("request recived");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next()
});

server.use(router)

server.listen(3001, () => {
    console.log("json server is running")
})
