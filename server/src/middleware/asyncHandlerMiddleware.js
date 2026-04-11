// (fn) => (req, res, next)  = (async function)
export const asyncHandler = (asyncFn) => {
  return (req, res, next) => {
    Promise.resolve(asyncFn(req, res, next)).catch(next);
  };
};
