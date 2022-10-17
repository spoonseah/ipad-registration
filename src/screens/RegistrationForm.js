import Button from "../components/common/Button";
import Error from "../components/common/Error";
import ToggleActive from "../components/ToggleActive";
import ToggleInactive from "../components/ToggleInactive";
import Help from "./Help";

function RegistrationForm() {
  return (
    <div style={styles.container}>
      <div style={styles.msg}>Tell us more about yourself.</div>

      {/* form container */}
      <div style={styles.formContainer}>
        {/* section label */}
        <div style={styles.section}>Your profile</div>
        {/* section label */}

        {/* salutation */}
        <div style={styles.item}>
          <div style={styles.selectWrap}>
            <div style={styles.label}>Salutation*</div>
            <select name="salutation" id="salutation" style={styles.select}>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /salutation */}

        {/* given name */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>Given Name*</div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Given Name*"
            />
          </div>
          {/* <Error error="Please enter given name" /> */}
        </div>
        {/* /given name */}

        {/* surname */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Surname
            </div> */}
            <input type="text" style={styles.txtfield} placeholder="Surname" />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /surname */}

        {/* gender */}
        <div style={styles.item}>
          <div style={styles.selectWrap}>
            <div style={styles.label}>Gender*</div>
            <select name="gender" id="gender" style={styles.select}>
              <option value="Select" selected="selected" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /gender */}

        {/* dob */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Date of Birth*
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Date of Birth"
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /dob */}

        {/* income */}
        <div style={styles.item}>
          <div style={styles.selectWrap}>
            <div style={styles.label}>Household Income*</div>
            <select name="income" id="income" style={styles.select}>
              <option value="Select" selected="selected" disabled>
                Select
              </option>
              <option value="0 - 999">0 - 1000</option>
              <option value="1000 - 2999">1000 - 2999</option>
              <option value="3000 - 5999">3000 - 5999</option>
              <option value=">6000">6000</option>
            </select>
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /income */}

        {/* section label */}
        <div style={styles.section}>Your address</div>
        {/* section label */}

        {/* block no */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Block No.
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Block No."
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /block no */}

        {/* street name */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Street Name
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Street Name"
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /street name */}

        {/* unit no */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Unit No.
            </div> */}
            <input type="text" style={styles.txtfield} placeholder="Unit No." />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /unit no */}

        {/* postal code */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Postal Code*
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Postal Code*"
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /postal code */}

        {/* residence */}
        <div style={styles.item}>
          <div style={styles.selectWrap}>
            <div style={styles.label}>Type of Residence*</div>
            <select name="income" id="income" style={styles.select}>
              <option value="Select" selected="selected" disabled>
                Select
              </option>
              <option value="HDB">HDB</option>
              <option value="Condominum">Condominium</option>
              <option value="Landed Property">Landed Property</option>
            </select>
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /residence */}

        {/* section label */}
        <div style={styles.section}>Your contact details</div>
        {/* section label */}

        {/* mobile no */}
        <div style={styles.item}>
          <div style={styles.txtfieldDisabled}>
            <div style={styles.disabledLabel}>Mobile No.*</div>
            <div style={styles.disabledValue}>9631 9467</div>
          </div>
        </div>
        {/* /mobile no */}

        {/* email */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Email*
            </div> */}
            <input type="text" style={styles.txtfield} placeholder="Email*" />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /email */}

        {/* section label */}
        <div style={styles.section}>Set your password</div>
        {/* section label */}

        {/* password */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Password*
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Password*"
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /password */}

        {/* retype */}
        <div style={styles.item}>
          <div style={styles.txtfieldWrap}>
            {/* <div style={styles.txtfieldLabel}>
              Retype Password*
            </div> */}
            <input
              type="text"
              style={styles.txtfield}
              placeholder="Retype Password*"
            />
          </div>
          {/* <Error error="Please check your entry" /> */}
        </div>
        {/* /retype */}

        {/* consent */}
        <div style={styles.item}>
          <div style={styles.consent}>
            I consent to receive promotional marketing messages from Frasers
            Property Retail Management Pte. Ltd.
          </div>
        </div>
        {/* /consent */}

        {/* toggles */}
        <div style={styles.item}>
          <div style={styles.toggleWrap}>
            {/* toggle item */}
            <div style={styles.toggleItem}>
              <div>Receive promotions via call</div>
              <div>
                <ToggleInactive />
              </div>
            </div>
            {/* /toggle item */}

            {/* toggle item */}
            <div style={styles.toggleItem}>
              <div>Receive promotions via email</div>
              <div>
                <ToggleActive />
              </div>
            </div>
            {/* /toggle item */}

            {/* toggle item */}
            <div style={styles.toggleItem}>
              <div>Receive promotions via SMS</div>
              <div>
                <ToggleInactive />
              </div>
            </div>
            {/* /toggle item */}
          </div>
        </div>
        {/* /toggles */}

        {/* agreement */}
        <div style={styles.item}>
          <div style={styles.agreement}>
            <div style={styles.checkboxWrap}>
              <input type="checkbox" />
            </div>
            <div style={styles.agreeText}>
              I have read and agree to the{" "}
              <a
                href="https://www.frasersexperience.com/terms-of-use"
                target="_blank"
                style={styles.link}
              >
                Terms of Use
              </a>
              ,{" "}
              <a
                href="https://www.frasersproperty.com/privacy-policy"
                target="_blank"
                style={styles.link}
              >
                Privacy Policy
              </a>
              , and the{" "}
              <a
                href="https://www.frasersexperience.com/privacy-policy-addendum/"
                target="_blank"
                style={styles.link}
              >
                Privacy Policy Addendum
              </a>{" "}
              on how my personal data may be collected, used, disclosed and
              processed by Frasers Property Limited (“Frasers”), and other
              organisations related to Frasers (including its
              subsidiaries)(collectively the “Frasers Property Group”).
            </div>
          </div>
        </div>
        {/* /agreement */}

        {/* submit */}
        <div style={styles.item}>
          <Button text="Finish" theme="black" />
        </div>
        {/* /submit */}
      </div>
      {/* /form container */}

      <Help />
    </div>
  );
}

const styles = {
  container: {},
  msg: {
    fontSize: 29,
    fontWeight: 600,
  },
  formContainer: {
    textAlign: "left",
    marginTop: 60,
  },
  section: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    marginTop: 40,
  },
  selectWrap: {
    width: "100%",
    border: "1px solid #DFE0E5",
    borderRadius: "5px",
    padding: "15px 30px",
  },
  label: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 5,
  },
  select: {
    appearance: "none",
    width: "100%",
    fontSize: 20,
    border: 0,
    fontWeight: 500,
    fontFamily: "Montserrat",
    color: "#999",
    backgroundImage: 'url("../images/down-arrow.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 50%",
  },
  txtfield: {
    appearance: "none",
    border: "1px solid #DFE0E5",
    padding: "25px 30px",
    borderRadius: "5px",
    width: "100%",
    fontSize: 20,
    fontWeight: 500,
    color: "#999",
    fontFamily: "Montserrat",
  },
  txtfieldLabel: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
  item: {
    marginBottom: 25,
  },
  txtfieldDisabled: {
    backgroundColor: "#F2F2F3",
    padding: "25px 30px",
    borderRadius: "5px",
  },
  disabledLabel: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 5,
  },
  disabledValue: {
    fontSize: 20,
    color: "#333",
    fontWeight: 500,
  },
  consent: {
    fontSize: 19,
    fontWeight: 500,
    lineHeight: "130%",
    paddingTop: 20,
  },
  toggleItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  toggleWrap: {
    fontSize: 20,
    color: "#999",
    fontWeight: 500,
  },
  agreement: {
    display: "flex",
    fontSize: 20,
    paddingBottom: 30,
  },
  checkboxWrap: {
    width: "7%",
  },
  agreeText: {
    width: "85%",
    fontSize: 16,
    lineHeight: "150%",
    fontWeight: 500,
  },
  link: {
    color: "#FA7268",
    textDecoration: "none",
  },
};

export default RegistrationForm;
