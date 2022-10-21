function PracticalExperienceForm() {
  return (
    <div>
      <h2>Practical experience</h2>
      <form>
        <label htmlFor="company">Company name:</label>
        <input type="text" id="company" name="company" /> <br />
        <label htmlFor="position">Position title:</label>
        <input type="text" id="position" name="position" /> <br />
        <label htmlFor="time">time from to:</label>
        <input type="text" id="time" name="time" /> <br />
        <label htmlFor="responsibilities">Responsibilities:</label>
        <input type="text" id="responsibilities" name="responsibilities" />{' '}
        <br />
      </form>
    </div>
  );
}

export default PracticalExperienceForm;
