import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MyTasks from '../components/tasks/MyTasks';
import TaskCard from '../components/tasks/TaskCard';
import Modal from '../components/ui/Modal';
import { useContext, useEffect, useState } from 'react';
// import AddTaskModal from '../components/tasks/AddTaskModal';
import { AuthContext } from '../context/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import TestCard from '../components/tasks/TaskCard1';
import CreateTeamModal from '../components/ui/CreateTeamModal';


const CreateTeam = () => {
  const { user } = useContext(AuthContext);
  const [taskAssignedToMe, setTaskAssignedToMe] = useState([])
  const [isOpen, setIsOpen] = useState(false);




  const pendingTasks = taskAssignedToMe?.filter(task => task.status === "pending");
  const runningTasks = taskAssignedToMe?.filter(task => task.status === "running");
  const completedTasks = taskAssignedToMe?.filter(task => task.status === "done");

  const handleStatus = (status, id) => {
    let newStatus;
    if (status === "pending") {
      newStatus = "running";
    }
    else if (status === "running") {
      newStatus = "done"
    }
    else if (status === "done") {
      newStatus === "out"
    }

    const clickedTask = taskAssignedToMe.find(task => task.id === id)
    clickedTask.status = newStatus;

    const allTask = JSON.parse(localStorage.getItem("assigned-tasks"));
    const otherTask = allTask?.filter(task => task.id !== id);
    const allUpdatedTask = [...otherTask, clickedTask];
    localStorage.setItem("assigned-tasks", JSON.stringify(allUpdatedTask));
    }
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <CreateTeamModal isOpen={isOpen} setIsOpen={setIsOpen}>XYZ</CreateTeamModal>
          </div>
          <div className="flex gap-5">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              {
                user?.photoURL ? <Link to="/profile"><img src={user?.photoURL} alt="" className="object-cover h-full w-full " /></Link> 
                  :
                 <Link to="/profile"><UserCircleIcon/> </Link>
              }             
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {
                  pendingTasks?.length || 0
                }
              </p>
            </div>
            <div className="space-y-3">
              {
                pendingTasks?.map((task, index) => <TestCard
                  key={index} task={task} handleStatus={handleStatus}>
                  </TestCard>)
              }
              
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {
                  runningTasks?.length
                }
              </p>
            </div>
            <div className="space-y-3">
            {
                runningTasks?.map((task, index) => <TestCard
                  key={index} task={task} handleStatus={handleStatus}>
                  </TestCard>)
              }
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Completed</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {
                  completedTasks?.length
                }
              </p>
            </div>
            <div className="space-y-3">
            {
                completedTasks?.map((task, index) => <TestCard
                  key={index} task={task} handleStatus={handleStatus}>
                  </TestCard>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};


export default CreateTeam;
