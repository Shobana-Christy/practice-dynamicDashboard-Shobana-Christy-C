import Greeting from './components/Greeting';
import ConditionalMessage from './components/ConditionalMessage';
import TaskList from './components/TaskList';


const DynamicDashboard = ({userName, isPremiumUser}) => {
    
    const taskList = [
        {
            taskName: "Learn React",
            completed: true
        },
        {
            taskName: "Build a project",
            completed: true

        },
        {
            taskName: 'Project Ideation',
            completed: true
        },
        {
            taskName: 'Project Planning ',
            completed: false
        }
    ];
    return (
        <div>
            <h1>
                <Greeting name={userName} />
            </h1>

            <ConditionalMessage isPremiumUser={isPremiumUser} />
            <TaskList taskList={taskList} />

        </div>
    )
};

export default DynamicDashboard;
