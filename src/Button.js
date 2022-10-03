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
        padding: '30px 0',
        fontSize: 29,
        fontWeight: 500,
        color: '#fff'
    },
};

export default Button;