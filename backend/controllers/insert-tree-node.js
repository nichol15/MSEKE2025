const Concepts = require('../model/Concept'); // Concepts is the collection


// *******************************************************
// ****************** EXPORTED FUNCTION ****************** 
// *******************************************************

// **** INPUT: no input
// **** OUTPUT: no return
const insertNodes = async (nodes) => { 
  try {
    const treeNode = await Concepts.insertMany(nodes)
    console.log("successfully added node(s) to database")
  } catch(err) {
    console.log(err.message);
  }
}

module.exports = insertNodes;

