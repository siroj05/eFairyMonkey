import { prisma, Prisma } from "./database.server";

export async function addItemData(item){
    try {
        return await prisma.post.create({
            data : {
                title : item.title,
                category : item.category,
                price : item.price
            }
        })
    } catch (error) {
        throw error;
    }
}

export async function getDataItem(){
    const expenses = await prisma.post.findMany({
        orderBy : {
            id : 'desc'
        }
    })
    return expenses
}