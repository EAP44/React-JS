export const Add = (user) => {
  return {
    type: "Add",
    payload: user,
  };
};
export const Update = (newuser) => {
  return {
    type: "Update",
    payload: newuser,
  };
};
export const Delete = (id) => {
  return {
    type: "Delete",
    payload: id,
  };
};
