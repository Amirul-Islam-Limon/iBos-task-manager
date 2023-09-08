import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskCard = ({task}) => {
  console.log("task card", task);
  // const { status, title, description, date, assignedTo, priority} = task;
//   const task = {
//     id: 1,
//     status: 'pending',
//     title: 'Remove Button',
//     description:
//       'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
//     date: '2023-08-28',
//     assignedTo: 'Mir Hussain',
//     priority: 'high',
//   };
//  const  { id, status, title, description, date, assignedTo, priority } = task;

  // let newStatus;
  // if (status == "pending") {
  //   newStatus = "running"
  // }
  // else if (status == "running") {
  //   newStatus = "done"
  // }
  // else {
  //   newStatus = "archive"
  // }

  return (
    <div></div>
    // <div className="bg-secondary/10 rounded-md p-5">
    //  <h1
    //     className={`text-lg font-semibold mb-3  ${
    //       priority === 'high' ? 'text-red-500' : ''
    //     } ${priority === 'medium' ? 'text-yellow-500' : ''} ${
    //       priority === 'low' ? 'text-green-500' : ''
    //     }`}
    //   >
    //     {title}
    //   </h1>
    //   <p className="mb-3">{description}</p>
    //   <p className="text-sm">Assigned to - {assignedTo}</p>
    //   <div className="flex justify-between mt-3">
    //     <p>{date}</p>
    //     <div className="flex gap-3">
    //       <button title="Delete">
    //         <TrashIcon className="h-5 w-5 text-red-500" />
    //       </button>
    //       <button title="Update Status"><ArrowRightIcon className="h-5 w-5 text-primary" /></button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TaskCard;
