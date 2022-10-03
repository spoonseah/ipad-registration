import Button from "./Button";

function JoinNow() {
    return (
        <div style={styles.container}>

            <div style={styles.title}>Join Now!</div>

            <div style={styles.msg}>Sign up as a Frasers Experience (FRx)
                member and be rewarded.
            </div>

            <input type="text" style={styles.mobileNo} placeholder='Mobile No'></input>

            <div style={styles.error}>
                Please enter Mobile No.
            </div>

            <div style={styles.note}>
                A one-time password (OTP) will be sent to this Mobile No. for verification.
            </div>

            <Button text="Next" />

            <div style={styles.help}>
                If you have difficulties registering for a
                FRx account, please approach our friendly
                Customer Service for assistance.
            </div>

        </div>
    );
}

const styles = {
    container: {
        paddingBottom: 100,
    },
    title: {
        fontSize: 40,
        fontWeight: 600,
    },
    msg: {
        fontSize: 34,
        paddingTop: 40,
        fontWeight: 400
    },
    mobileNo: {
        fontSize: 27,
        padding: 30,
        marginTop: 50,
        border: '1px solid #DFE0E5',
        width: '100%',
        fontFamily: 'Montserrat'
    },
    note: {
        fontSize: 27,
        fontWeight: 500,
        marginTop: 50,
        marginBottom: 80,
    },
    help: {
        fontSize: 28,
        marginTop: 50,
        padding: '0 56px'
    },
    error: {
        color: '#FA7268',
        fontSize: 26,
        marginTop: '13px',
        fontWeight: 500,
        textAlign: 'left',
    }
};

export default JoinNow;