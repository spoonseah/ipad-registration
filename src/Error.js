function Error(props) {
    return (
        <div style={styles.error}>
            {props.error}
        </div>
    );
}

const styles = {
    error: {
        color: '#FA7268',
        fontSize: 20,
        marginTop: '13px',
        fontWeight: 500,
        textAlign: 'left',
    }
};

export default Error;