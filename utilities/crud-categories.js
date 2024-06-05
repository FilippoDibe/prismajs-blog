const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create Category
const createCategory = (label) => {
    return prisma.categories.create({
        data: { name: label }
    });
};

// Read Category
const readCategories = () => {
    return prisma.categories.findMany();
};

module.exports = {
    createCategory,
    readCategories
};
