import React from 'react';

const Message = (props) => {
        return (
            <div>
                {props.date.toLocaleDateString() + ' - ' + props.user + ' - ' + props.date.toLocaleTimeString().substr(0, 5) + ' => ' + props.message}
            </div>
        )
};

export default Message;