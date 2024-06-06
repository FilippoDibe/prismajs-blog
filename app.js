const {
    createPost,
    readPostBySlug,
    updatePostBySlug,
    readPosts,
    deletePostBySlug,
    readPublishedPosts,
    readContainsPosts
} = require('./utilities/crud-post.js');

const {
    createTag,
    readTags
} = require('./utilities/crud-tags.js');

const {
    createCategory,
    readCategories 
} = require('./utilities/crud-categories.js');


