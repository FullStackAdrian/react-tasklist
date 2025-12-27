function TaskList({ tasks }) {
  return (
    <ul id="llistaTasques">
      {tasks.map((task, index) => (
        <li key={index}>
          <strong>{task.nom}</strong> — {task.categoria} — {task.data}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
