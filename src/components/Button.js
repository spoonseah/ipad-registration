function Button(props) {
    return (
        <div style={{ ...styles.button, ...styles.black }}>
            {props.text}
        </div >
    );
}

const styles = {
    button: {
        width: '100%',
        padding: '25px 0',
        fontSize: 22,
        fontWeight: 500,
        color: '#fff',
        borderRadius: '3px',
        textAlign: 'center'
    },
    black: {
        backgroundColor: '#000000',
    },
    grey: {
        backgroundColor: '#EDEDEE',
    },
    white: {
        border: '1px solid #000',
        color: '#000',
    },
};

export default Button;