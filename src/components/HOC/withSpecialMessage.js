const withSpecialMessage = () => (Component) => (props) => {
    const specialMessage = "Talk on Angular cancelled at 10:30AM";

    return (
        <Component {...props} specialMessage={specialMessage}/>
    );
};

export default withSpecialMessage;
