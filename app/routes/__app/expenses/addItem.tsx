import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react"
import AddForm from "~/components/addForm"
import ModalDialog from "~/components/utils/modal"
import {addItemData} from "~/data/expense.server"

export default function Additem(){
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('..')
    }
    return(
       <div>
            <ModalDialog onClose={closeHandler}>
                <AddForm/>
            </ModalDialog>
       </div>
    )
}

export async function action({request} : any){
    const formData = await request.formData()
    const expenseData = Object.fromEntries(formData)
    await addItemData(expenseData)
    return redirect('..')
}