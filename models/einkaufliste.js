import mongoose from 'mongoose';
const { Schema } = mongoose;


var ShoppingListModel = new Schema({
  FischFleisch: {
    type: Object,
    required: true
  },
  Beilage: {
    type: Object,
    required: true
  },
  ObstGemuese: {
    type: Object,
    required: true
  },
  Sonstiges: {
    type: Object,
    required: true
  }
});

mongoose.models = {};

export default mongoose.models.ShoppingList || mongoose.model('ShoppingList', ShoppingListModel, 'ShoppingList')