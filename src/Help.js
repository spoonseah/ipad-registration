function Help() {
    return (
        <div style={styles.container}>

            <div style={styles.help}>
                If you have difficulties registering for a<br />
                FRx account, please approach our friendly<br />
                Customer Service for assistance.
            </div>

        </div>
    );
}

const styles = {
    help: {
        fontSize: 21,
        marginTop: 40,
        lineHeight: '130%',
    },
};

export default Help;