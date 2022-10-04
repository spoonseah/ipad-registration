function ButtonWhite(props) {
    return (
        <div style={styles.button}>
            {props.text}
        </div>
    );
}

const styles = {
    button: {
        width: '100%',
        padding: '25px 0',
        fontSize: 22,
        fontWeight: 500,
        color: '#807979',
        borderRadius: '3px',
        textAlign: 'center',
        border: '1px solid #000',
        color: '#000',
    },
};

export default ButtonWhite;