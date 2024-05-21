import { useContext, useEffect, useRef } from "react";
import Listcontext from "./contextList";

const AddList = () => {
    const context = useContext(Listcontext)
    const addWorkInput = useRef()
    useEffect(() => {
        addWorkInput.current.focus()
    })
    const AddWork = (event) => {
        event.preventDefault()
        let newItem = { id: context.work.length + 1, title: addWorkInput.current.value, state: false }
        context.setWork([...context.work, newItem])
        addWorkInput.current.value = ""
    }
    return (
        <>
            <form action="" onSubmit={AddWork}>
                <input type="text" ref={addWorkInput} required />
                <input type="submit" value='+' />
            </form>
        </>
    )
}
export default AddList;