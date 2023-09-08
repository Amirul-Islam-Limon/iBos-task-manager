import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Controller, useForm } from "react-hook-form"


const customStyles = {
    // content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // },
};
  

const CreateTeamModal = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const [selectedMember, setSelectedMember] = useState([]);


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  

    const onSubmit = (data) => {
        console.log(data);
        data.status = "pending";
        data.id = Math.ceil(Math.random() * 100000000000);
        console.log(data.options);
        setIsOpen(!modalIsOpen);
        // reset();
    }

    const saveAssignedTaskToLocalStorage = (currentTask) => {
        const previousAddedTasks = JSON.parse(localStorage.getItem('assigned-tasks')) || [];
        const updatedTasks = [...previousAddedTasks, currentTask];
        localStorage.setItem("assigned-tasks", JSON.stringify(updatedTasks)); 
    }

    const handleInviteMember = (name) => {
        const newSelectedMembers = [name,...selectedMember];
        setSelectedMember(newSelectedMembers)
    }
    console.log(selectedMember);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
        <button className='btn btn-primary'onClick={openModal}>Create Team</button>
        <Modal className="w-1/3 mx-auto"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
            <div className='w-full mt-10'>
            <div className='text-center text-3xl'>Create Team</div>
          <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Team Name</label>
                        <input className="rounded-md" type="text" {...register("teamName")} />
                    </div>
                    <div>
                    <label>Invite Member:</label>
                    <div>
                    <label>
                        <Controller
                        name="options1"
                        control={control}
                        // defaultValue={[]}
                        render={({ field }) => (
                            <input
                            type="checkbox"
                            value="Option 1"
                                {...field}
                                {...register("option1")}
                            />
                        )}
                        />
                        Option 1
                    </label>
                    </div>
                    <div>
                    <label>
                        <Controller
                        name="options2"
                        control={control}
                        // defaultValue={[]}
                        render={({ field }) => (
                            <input
                            type="checkbox"
                            value="Option 2"
                                {...field}
                                {...register("option2")}
                            />
                        )}
                        />
                        Option 2
                    </label>
                    </div>
                    <div>
                    <label>
                        <Controller
                        name="options3"
                        control={control}
                        // defaultValue={[]}
                        render={({ field }) => (
                            <input
                            type="checkbox"
                            value="Option 3"
                                {...field}
                                {...register("option3")}
                            />
                        )}
                        />
                        Option 3
                    </label>
                    </div>
                </div>
                    <div className="flex flex-col gap-3 mt-3">
                        <label htmlFor="aboutTeam">About Team</label>
                        <input className="rounded-md h-20" type="text" {...register("aboutTeam")} />
                    </div> 
                    <div className="flex justify-end gap-3 mt-5">
                        {/* <button onClick={closeModal}  className="btn btn-danger">Cancel</button> */}
                        <input className="bg-green-500 rounded-md text-white p-2 cursor-pointer" type="submit" value="Submit"/>
                    </div>
                </form>
                <button className='btn btn-danger' onClick={closeModal}>close</button>        
            </div>
        </Modal>
      </div>
    );
};

export default CreateTeamModal;