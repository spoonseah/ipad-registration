function Button(props) {
    return (
        <div style={styles.button}>
            {props.text}
        </div>
    );
}

const styles = {
    button: {
        backgroundColor: '#000',
        width: '100%',
        padding: '25px 0',
        fontSize: 22,
        fontWeight: 500,
        color: '#fff',
        borderRadius: '3px',
        textAlign: 'center'
    },
};

export default Button;