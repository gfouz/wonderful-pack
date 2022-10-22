const fs = require("fs");

 exports.getConditions = async (req, res) => {
  try {
    await fs.readFile("./conditions.txt", "utf8", (error, data) => {
      if (error) {
         res.status(400).json({ error });
      } else {
       res.status(200).json({data, message: "read-ok"});
      }
    });
  } catch (error) {
    res.status(400).json({error});
  }
};



exports.writeConditions = async (req, res) => {
  try {

    const conditions = req.body.conditions;
    // Delete conditions.txt
    if(conditions !== undefined || conditions !== null) {
     await fs.unlink("conditions.txt", (err) => {
      if (err) throw err;
    });
     await fs.writeFile('conditions.txt', conditions, (error) => {
      // In case of an error throw error.
       if (error) {
         res.status(400).json({ error });
      } else {
       res.status(200).json({message: "modified"});
      }
    })
   }
    } catch (error) {
     
  }
};
