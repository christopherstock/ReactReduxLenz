/**
 *   The entire application component.
 *   This is an example for a stateful component.
 */
class App extends React.Component
{
    /**
     *   Initializes this component by setting the initial state.
     *
     *   @param {Object} props The initial properties being passed in the component tag.
     */
    constructor( props )
    {
        super( props );

        this.state = {
            taskList: [
                "Milch kaufen",
                "Brownies backen",
                "Wäsche waschen",
                "Workshop vorbereiten",
            ],
        }
    }

    /**
     *   Being invoked every time this component renders.
     *
     *   @return {JSXTransformer} The rendered JSX.
     */
    render()
    {
        console.log( "App.render() being invoked" );

        return <div>

            { /* title */ }
            <h1 id="appTitle">{ this.props.title }</h1>

            { /* task input form */ }
            <TaskInput />

            { /* task list */ }
            <TaskList />

        </div>;
    }
}
