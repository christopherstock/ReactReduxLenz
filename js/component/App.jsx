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

    /**
     *   Being invoked before this component has been mounted.
     */
    componentWillMount()
    {
        console.log( "App.componentWillMount() being invoked" );
    }

    /**
     *   Being invoked after this component has been mounted.
     */
    componentDidMount()
    {
        console.log( "App.componentDidMount() being invoked" );
    }

    /**
     *   Being invoked before this component has been unmounted.
     */
    componentWillUnmount()
    {
        console.log( "App.componentWillUnmount() being invoked" );
    }

    /**
     *   Being invoked before this component has been unmounted.
     *
     *   @param {Object} nextProps   The props to set on updating.
     *   @param {Object} nextState   The state to set on updating.
     *   @param {Object} nextContext The context to set on updating.
     */
    componentWillUpdate( nextProps, nextState, nextContext )
    {
        console.log( "App.componentWillUpdate() being invoked" );
    }

    /**
     *   Being invoked after this component has been updated.
     */
    componentDidUpdate()
    {
        console.log( "App.componentDidUpdate() being invoked" );
    }

    /**
     *   Being invoked before this component receives props.
     *
     *   @param {Object} nextProps   The props to set on updating.
     *   @param {Object} nextContext The context to set on updating.
     */
    componentWillReceiveProps( nextProps, nextContext )
    {
        console.log( "App.componentWillReceiveProps() being invoked" );
    }
}