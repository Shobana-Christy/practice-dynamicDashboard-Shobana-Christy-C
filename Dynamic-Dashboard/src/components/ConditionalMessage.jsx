import React from "react";

const ConditionalMessage = ({ isPremiumUser }) => {

    return (
        <div>
            {isPremiumUser ? "Thank you for being a premium member" : "Upgrade to premium to enjoy exclusive features!"}
        </div>

    );

};

export default ConditionalMessage;