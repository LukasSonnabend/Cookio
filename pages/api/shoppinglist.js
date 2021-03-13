// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ShoppingList from '../../models/einkaufliste'
import connectDB from '../../middleware/mongodb'

const handler =  async (req, res) => {
    
  var shoppingList = await ShoppingList.find({});
  if (shoppingList) {
  
    shoppingList["_id"] = null;
    return res.json({ shoppingList: shoppingList, sucess: true })
  }
  return res.json({msg: "Error "})
}  

export default connectDB(handler);