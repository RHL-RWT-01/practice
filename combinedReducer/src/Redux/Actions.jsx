export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const updateUser = (name) => {
  return {
    type: "UPDATEUSER",
    payload: name,
  };
};

export const updateAge = (age) => {
  return {
    type: "UPDATEAGE",
    payload:age,
  };
};
