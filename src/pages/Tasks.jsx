import MyTasks from '../components/tasks/MyTasks';
import { useContext, useEffect, useState } from 'react';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { AuthContext } from '../context/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import TestCard from '../components/tasks/TaskCard1';


const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [taskAssignedToMe, setTaskAssignedToMe] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      const allTask = JSON.parse(localStorage.getItem("assigned-tasks"));
      const allTaskAssignedToMe = allTask?.filter(task => task.assignedTo == user?.displayName);
      console.log("before set on state",allTaskAssignedToMe);
      setTaskAssignedToMe(allTaskAssignedToMe);
  }, [user?.displayName])


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
            <Link to="create-team"><button className='btn btn-primary'>Team Task</button></Link>
          </div>
          <div className="flex gap-5">
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
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
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
