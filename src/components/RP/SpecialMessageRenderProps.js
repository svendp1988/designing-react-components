function SpecialMessageRenderProps({ children }) {
    return children({
        specialMessage: "Angular Class at 2:45PM Cancelled"
    });
}

export default SpecialMessageRenderProps;
