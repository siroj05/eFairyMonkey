import { prisma} from "./database.server";

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

export async function updateItemData(idData,data){
    const id = parseInt(idData)
    const expenses = await prisma.post.update({
        where : {id},
        data : {
            title : data.title,
            category : data.category,
            price : data.price
        }
    })
}

export async function deleteitem(idData){
    const id = parseInt(idData)
    const expenses =  await prisma.post.delete({
        where : {id}
    })
}