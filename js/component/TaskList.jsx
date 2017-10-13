const {connect} = ReactRedux;

/**
 *   Represents the TaskList component.
 *   This is an example for a stateless component.
 */
class UnconnectedTaskList extends React.Component
{
    /**
     *   Being invoked every time this component renders.
     *
     *   @return {JSXTransformer} The rendered JSX.
     */
    render()
    {
        console.log( "TaskList.render() being invoked" );

        return <ul id="taskList">
            {
                this.createTaskListItems()
            }
        </ul>;
    }

    /**
     *   Creates and returns all items of the task list.
     *
     *   @return {JSXTransformer[]} The rendered JSX elements.
     */
    createTaskListItems()
    {
        let items = [];

        // browse all task list items
        for ( let index = 0; index < this.props.taskList.length; ++index )
        {
            items.push(
                <li key={ index }>

                    <div>

                        { /* The item description */ }
                        { this.props.taskList[ index ] }

                        { /* Button 'Delete' */ }
                        <button
                            onClick={ () => { this.props.onTaskDelete(   index ); } }
                            className="button"
                        >
                            &#10006;
                        </button>

                        { /* Button 'Move Down' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveDown( index ); } }
                            disabled={ index === this.props.taskList.length - 1 }
                            className="button"
                        >
                            &#9660;
                        </button>

                        { /* Button 'Move Up' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveUp(   index ); } }
                            disabled={ index === 0 }
                            className="button"
                        >
                            &#9650;
                        </button>

                    </div>

                </li>
            );
        }

        return items;
    }
}

const mapStateToProps = (state, props) => Object.assign({}, props, {taskList: state}); // {...props, list: state} schafft der JSX Transformer hier nicht

const mapDispatchToProps = (dispatch, props) => Object.assign({}, props, {
   onTaskDelete: (index) => dispatch(deleteTaskAction(index)),
   onTaskMoveUp: (index) => dispatch(moveTaskUpAction(index)),
   onTaskMoveDown: (index) => dispatch(moveTaskDownAction(index)),
});

const TaskList = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTaskList);
