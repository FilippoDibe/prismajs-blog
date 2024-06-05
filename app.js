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

// Test createCategory
createCategory("Technology")
    .then(category => {
        console.log("Category created successfully:", category);

        // Test readCategories
        return readCategories();
    })
    .then(categories => {
        console.log("Categories:", categories);

        // Test createTag
        return createTag("JavaScript");
    })
    .then(tag => {
        console.log("Tag created successfully:", tag);

        // Test readTags
        return readTags();
    })
    .then(tags => {
        console.log("Tags:", tags);

        // Test createPost
        return createPost({
            title: 'How to Use Prisma with Node.js',
            slug: 'prisma-nodejs-guide',
            content: 'This guide will help you to use Prisma with Node.js for database management.',
            published: true,
            categoriesId: 1, // Assumendo che l'ID della prima categoria sia 1
            tagId: 1 // Assumendo che l'ID del primo tag sia 1
        });
    })
    .then(post => {
        console.log("Post created successfully:", post);

        // Test readPostBySlug
        return readPostBySlug('prisma-nodejs-guide');
    })
    .then(post => {
        console.log("Post read by slug:", post);

        // Test updatePostBySlug
        return updatePostBySlug('prisma-nodejs-guide', { title: 'Updated: How to Use Prisma with Node.js' });
    })
    .then(updatedPost => {
        console.log("Post updated successfully:", updatedPost);

        // Test readPosts
        return readPosts();
    })
    .then(posts => {
        console.log("All posts:", posts);

        // Test deletePostBySlug
        return deletePostBySlug('prisma-nodejs-guide');
    })
    .then(deletedPost => {
        console.log("Post deleted successfully:", deletedPost);

        // Test readPublishedPosts
        return readPublishedPosts();
    })
    .then(publishedPosts => {
        console.log("Published posts:", publishedPosts);

        // Test readContainsPosts
        return readContainsPosts('guide');
    })
    .then(containingPosts => {
        console.log("Posts containing 'guide':", containingPosts);
    })
    .catch(err => {
        console.error("Error during CRUD operations:", err);
    });
