const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			max: 60,
		},
		desc: {
			type: String,
			max: 500,
		},
		img: {
			type: String,
		},
		likes: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Post', PostSchema);
