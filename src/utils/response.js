import httpStatus from 'http-status';

export default (res, data = {}, code = httpStatus.OK) => {
  const result = {
    success: true,
  };

  if (code > 399) {
    result.success = false;
  }

  if (typeof data === 'object') {
    Object.assign(result, { data });
  }

  return res.status(code).json(result);
};
