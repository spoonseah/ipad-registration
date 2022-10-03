function Header() {
    return (
        <div style={styles.container}>
            <img src={"../images/frx-logo.png"} style={styles.logo} />
        </div>
    );
}

const styles = {
    container: {
        paddingTop: 100,
        paddingBottom: 50
    }
};

export default Header;