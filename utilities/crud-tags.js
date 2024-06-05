const {PrismaClient} = require ("@prisma/client");

const prisma = new PrismaClient();

const createTag = (label) => {
    prisma.tag.create({
        data: { label }
    })
    .then(tag => console.log(tag))
    .catch(err => console.error(err));
};

// Read Tag
const readTags = () => {
    prisma.tag.findMany()
    .then(categories => console.log(categories))
    .catch(err => console.error(err));
}

module.exports = {
    createTag,
    readTags
}