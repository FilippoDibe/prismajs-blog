const {PrismaClient} = require ("@prisma/client");

const prisma = new PrismaClient();

// Create Category
const createCategory = (label) => {
    prisma.category.create({
        data: { label }
    })
    .then(category => console.log(category))
    .catch(err => console.error(err));
};

// Read Category
const readCategories = () => {
    prisma.category.findMany()
    .then(categories => console.log(categories))
    .catch(err => console.error(err));
}

module.exports = {
    createCategory,
    readCategories
}