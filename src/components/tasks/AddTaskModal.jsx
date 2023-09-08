import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form"

const AddTaskModal = ({isOpen, setIsOpen}) => {
    const { register, handleSubmit, reset } = useForm();
    const [registeredUsersName, setRegisteredUsersName] = useState([]);


    useEffect(() => {
        const allUser = JSON.parse(localStorage.getItem("task-manager-users"));
        const allUserName = allUser?.map(user => user.name);
        setRegisteredUsersName(allUserName)
    }, [])
    
    const onSubmit = (data) => {
        console.log(data);
        data.status = "pending";
        data.id = Math.ceil(Math.random() * 100000000000);
        saveAssignedTaskToLocalStorage(data);
        setIsOpen(!isOpen);
        // reset();
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
        reset();
    };

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    const saveAssignedTaskToLocalStorage = (currentTask) => {
        
        const previousAddedTasks = JSON.parse(localStorage.getItem('assigned-tasks')) || [];
        const updatedTasks = [...previousAddedTasks, currentTask];
        localStorage.setItem("assigned-tasks", JSON.stringify(updatedTasks)); 
    }
    
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} closeModal={closeModal}  reset={reset} title={"Amirul Islam LImon"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Title</label>
                        <input className="rounded-md" type="text" {...register("title")} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Description</label>
                        <input className="rounded-md h-20" type="text" {...register("description")} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Deadline</label>
                        <input className="rounded-md" type="date" {...register("date")} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Assign to</label>
                        <select className="form-select px-4 py-3 rounded-md" {...register("assignedTo")}>
                            {
                                registeredUsersName?.map((name, index) => <option key={index} value={name}>{ name}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                    <label htmlFor="title">Priority</label>
                        <select className="form-select px-4 py-3 rounded-md" {...register("priority")}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 mt-5">
                        {/* <button onClick={closeModal}  className="btn btn-danger">Cancel</button> */}
                        <input className="bg-green-500 rounded-md text-white p-2 cursor-pointer" type="submit" value="Submit"/>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;