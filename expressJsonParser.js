function jsonBodyParser(req, res, next) {
  let data = "";
  let contentType = req.headers["content-type"] || "application/json";
  let skipParsing = false;
  if (contentType != "application/json") {
    skipParsing = true;
  }
  req.on("data", (dataChunk) => {
    if(skipParsing)
      return;
    data += dataChunk.toString();
  });

  req.on("end", () => {
    try {
      console.log(data);
      if(skipParsing)
      throw new Error();
      req.body = JSON.parse(data);
      next();
    } catch (err) {
      res.status(400).json({ message: "Invalid JSON data" });
    }
  });
}
module.exports = jsonBodyParser;
