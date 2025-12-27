function ErrorList({ errors }) {
  return (
    <ul id="llistaTasques">
      {errors.map((errors, index) => (
        <li key={index} id="error-li">
          <strong>{errors.message}</strong>
        </li>
      ))}
    </ul>
  );
}

export default ErrorList;