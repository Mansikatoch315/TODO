function TodoItem2() {
  let todoName='Go to School';
  let todoDate='6-10-2023';

  return <div>
  <div class="row kg-row">
  <div class="col-6">{todoName}</div>

  <div class="col-4">{todoDate}</div>

  <div class="col-2">
    <button type="button" class="btn btn-danger delete-btn">
      Delete
    </button>
  </div>
</div>

</div>
}
export default TodoItem2;