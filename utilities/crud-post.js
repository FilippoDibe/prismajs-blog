const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create Post
const createPost = (data) => {
    prisma.post.create({ data }).then(post => console.log(post)).catch(err => console.error(err));
}

// Read Post tramite slug
const readPostBySlug = (slug) => {
    prisma.post.findUnique({
        where: { slug },
        include: {
            category: {
                select: {
                    label: true
                }
            },
            tags: {
                select: {
                    label: true
                }
            },
        }
    }).then(post => console.log(post)).catch(err => console.error(err));
}

// Read Posts
const readPosts = () => {
    prisma.post.findMany({
        include: {
            category: {
                select: {
                    label: true
                }
            },
            tags: {
                select: {
                    label: true
                }
            },
        }
    }).then(posts => console.log(posts)).catch(err => console.error(err));
}

// Update Post
const updatePostBySlug = (slug, data) => {
    prisma.post.update({ where: { slug }, data })
        .then(post => console.log(post))
        .catch(err => console.error(err));
}

// Delete Post
const deletePostBySlug = (slug) => {
    prisma.post.delete({ where: { slug } })
        .then(post => console.log('Post eliminato:', post))
        .catch(err => console.error(err));
}

// Read Posts pubblicati
const readPublishedPosts = () => {
    prisma.post.findMany({
        where: { published: true },
        include: {
            category: {
                select: {
                    label: true
                }
            },
            tags: {
                select: {
                    label: true
                }
            },
        }
    })
        .then(post => console.log(post))
        .catch(err => console.error(err));

}

// Read Posts che che contengono una determinata stringa nel contenuto
const readContainsPosts = (text) => {
    prisma.post.findMany({
        where: { content: { contains: text } }, include: {
            category: {
                select: {
                    label: true
                }
            },
            tags: {
                select: {
                    label: true
                }
            },
        }
    })
        .then(post => console.log(post))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
    readPostBySlug,
    readPosts,
    updatePostBySlug,
    deletePostBySlug,
    readPublishedPosts,
    readContainsPosts
};