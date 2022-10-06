function ToggleActive() {
    return (
        <div style={styles.toggle}>
            <div style={styles.knobActive}></div>
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
    knobActive: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#FA7268',
        position: 'absolute',
        right: 5
    }
};

export default ToggleActive;