function GeneralInformationForm() {
  return (
    <div>
      <h2>General information</h2>
      <form>
        <label htmlFor="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname" /> <br />
        <label htmlFor="lastname">Last name:</label>
        <input type="text" id="lastname" name="lastname" /> <br />
        <label htmlFor="telephonenumber">Telephone number:</label>
        <input type="text" id="telephonenumber" name="telephonenumber" /> <br />
        <label htmlFor="country">Country and city of residence:</label>
        <input type="text" id="country" name="country" /> <br />
        <input type="text" id="city" name="city" /> <br />
        <label htmlFor="aboutme">Additional info:</label>
        <input type="text" id="aboutme" name="country" /> <br />
      </form>
    </div>
  );
}

export default GeneralInformationForm;
