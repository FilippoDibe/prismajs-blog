const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTag = (label) => {
    return prisma.tag.create({
        data: { name: label }
    });
};

const readTags = () => {
    return prisma.tag.findMany();
};

module.exports = {
    createTag,
    readTags
};
