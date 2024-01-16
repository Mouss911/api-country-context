const Option = ({ contenus }) => (
  <>
    {contenus.map((contenu, index) => (
      <option className="col-1" key={index} value={contenu}>
        {contenu}
      </option>
    ))}
  </>
);

export default Option;
