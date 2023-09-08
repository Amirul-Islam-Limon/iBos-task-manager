import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

const TestCard = ({ task, handleStatus }) => {
  const {id, title, description, assignedTo, priority, date, status } = task;

    return (
        <div className="bg-secondary/10 rounded-md p-5">
     <h1
        className={`text-lg font-semibold mb-3  ${
          priority === 'high' ? 'text-red-500' : ''
        } ${priority === 'medium' ? 'text-yellow-500' : ''} ${
          priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {title}
      </h1>
      <p className="mb-3">{description}</p>
      <p className="text-sm">Assigned to - {assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{date}</p>
        <div className="flex gap-3">
          <button title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={()=>handleStatus(status, id)} title="Update Status"><ArrowRightIcon className="h-5 w-5 text-primary" /></button>
        </div>
      </div>
    </div>
    );
};

export default TestCard;