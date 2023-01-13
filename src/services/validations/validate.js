const postProductValidate = (param) => {
  if (!param) return { status: 400, response: { message: '"name" is required' } };
  if (param.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

module.exports = {
  postProductValidate,
};