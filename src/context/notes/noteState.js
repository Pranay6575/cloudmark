
import noteContext from './noteContext';

    const noteState = (props) =>{
        const state = {
            name: 'Devil',
            class: "9B"
        }
        return (
            <noteContext.provider value={state}>
                {props.children}
            </noteContext.provider>
        )

    }

    export default noteState;