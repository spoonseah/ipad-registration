function Header() {
    return (
        <div style={styles.container}>
            <img src={"../../Images/Assets/frx-logo.png"} style={styles.logo} />
        </div>
    );
}

const styles = {
    container: {
        paddingTop: 75,
        paddingBottom: 65,
    },
    logo: {
        height: 63,
    }
};

export default Header;