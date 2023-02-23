function jsonBodyParser(req, res, next) {
    let data = '';
  
    req.on('data', (dataChunk) => {
      data += dataChunk.toString();
    });
  
    req.on('end', () => {
      try {
        req.body = JSON.parse(data);
        next();
      } catch (err) {
        res.status(400).json({ message: 'Invalid JSON data' });
      }
    });
  }
  module.exports = jsonBodyParser;