import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.createMany({
        data: [{
            name: "Saut Manurung",
            email: "smanurung360@gmail.com",
            age: 27,
        }, {
            name: "Kristian Wiratama",
            email: "sautmanurungaja28@gmail.com",
            age:28,
        }]
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


async function find() {
    const user = await prisma.user.findMany({
        where: {
            name: "Saut Manurung"
        },
    })

    console.log(user)
}

find() 
    .catch(e => {
    console.error(e.message)
    })
    .finally(async () => {
    await prisma.$disconnect()
    })