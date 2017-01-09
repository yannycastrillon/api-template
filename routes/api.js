var
  express = require("express"),
  apiRouter = express.Router(),
  apiController = require("../controller/api.js")


apiRouter.get("/", apiController.index)
apiRouter.post("/", apiController.create)
apiRouter.patch("/:id",apiController.update)
apiRouter.delete("/:id",apiController.delete)
apiRouter.get("/:id", apiController.show)



module.exports = apiRouter;
