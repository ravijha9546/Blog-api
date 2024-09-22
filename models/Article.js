const mongoose =  require('mongoose');
const ArticleSchema = new mongoose.Schema({
    title: {type: String, required:true},
    content: {type: String, required:true},
    tags: {type: [String] , default: []},
    published_at: {type: Date, default: Date.now},
},{timestamp:true});
module.exports = mongoose.model('Article', ArticleSchema);