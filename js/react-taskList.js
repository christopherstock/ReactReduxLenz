const ACTION_TYPES = {
    CREATE_TASK: 'createTask',
    DELETE_TASK: 'deleteTask',
    MOVE_TASK_UP: 'moveTaskUp',
    MOVE_TASK_DOWN: 'moveTaskDown',
};

const createTaskReducer = (state, {taskName}) => [
    ...state,
    taskName,
];

const deleteTaskReducer = (state, {taskIndex}) => [
    ...state.slice(0, taskIndex),
    ...state.slice(taskIndex + 1),
];

const moveTaskUpReducer = (state, {taskIndex}) => {
    const newState = [...state];
    newState[taskIndex - 1] = state[taskIndex];
    newState[taskIndex] = state[taskIndex - 1];
    return newState;
};

const moveTaskDownReducer = (state, {taskIndex}) => {
    const newState = [...state];
    newState[taskIndex + 1] = state[taskIndex];
    newState[taskIndex] = state[taskIndex + 1];
    return newState;
};

function taskListReducer(state = [], action) {
    console.log(action, 'on state', state);
    switch (action.type) {
        case ACTION_TYPES.CREATE_TASK:
            return createTaskReducer(state, action);
        case ACTION_TYPES.DELETE_TASK:
            return deleteTaskReducer(state, action);
        case ACTION_TYPES.MOVE_TASK_UP:
            return moveTaskUpReducer(state, action);
        case ACTION_TYPES.MOVE_TASK_DOWN:
            return moveTaskDownReducer(state, action);
        default:
            return state;
    }
}

const createAction = (taskName) => ({type: 'createTask', taskName});
const deleteTaskAction = (taskIndex) => ({type: 'deleteTask', taskIndex});
const moveTaskUpAction = (taskIndex) => ({type: 'moveTaskUp', taskIndex});
const moveTaskDownAction = (taskIndex) => ({type: 'moveTaskDown', taskIndex});
