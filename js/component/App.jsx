/**
 *   The entire application component.
 */
class App extends React.Component
{
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
