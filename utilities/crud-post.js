const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = (data) => {
    return prisma.post.create({ data });
};

const readPostBySlug = (slug) => {
    return prisma.post.findUnique({
        where: { slug },
        include: {
            Categories: { select: { name: true } },
            Tag: { select: { name: true } },
        }
    });
};

const readPosts = () => {
    return prisma.post.findMany({
        include: {
            Categories: { select: { name: true } },
            Tag: { select: { name: true } },
        }
    });
};

const updatePostBySlug = (slug, data) => {
    return prisma.post.update({ where: { slug }, data });
};

const deletePostBySlug = (slug) => {
    return prisma.post.delete({ where: { slug } });
};

const readPublishedPosts = () => {
    return prisma.post.findMany({
        where: { published: true },
        include: {
            Categories: { select: { name: true } },
            Tag: { select: { name: true } },
        }
    });
};

const readContainsPosts = (text) => {
    return prisma.post.findMany({
        where: { content: { contains: text } },
        include: {
            Categories: { select: { name: true } },
            Tag: { select: { name: true } },
        }
    });
};

module.exports = {
    createPost,
    readPostBySlug,
    readPosts,
    updatePostBySlug,
    deletePostBySlug,
    readPublishedPosts,
    readContainsPosts
};
