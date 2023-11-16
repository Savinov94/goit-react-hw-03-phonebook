import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.labelFilter}>
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
