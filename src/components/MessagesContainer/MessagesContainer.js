import './MessagesContainer.css'
import TechnicalError from '../Message/TechnicalError'

const MessagesContainer = ({messageStatus}) => {
    console.log(messageStatus)



    // const returnMessage = () => {
    //     switch (messageStatus) {
    //         case "none":
    //             return (<TechnicalError/>)

    //         default:
    //             break;
    //         }
    // }
    // return(
    //     <div className="messages-container">
    //         {returnMessage}
    //     </div>
    // )

    switch (messageStatus) {
        case "none":
            return(
                    <div className="messages-container">
                        <TechnicalError/>
                    </div>
                )

        default:
            break;
        }
}

export default MessagesContainer