"use strict";

let id = 0;

const getId = () => {
  id++;
  return id;
};

export default getId;