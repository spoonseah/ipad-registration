function Toggle() {
    return (
        <div style={styles.toggle}>
            <div style={styles.knobInactive}></div>
        </div>
    );
}

const styles = {
    toggle: {
        border: '1px solid #ccc',
        borderRadius: '20px',
        width: 90,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    knobInactive: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#ddd',
        position: 'absolute',
        left: 5
    }
};

export default Toggle;