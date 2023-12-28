import createHttpError from "http-errors";

const Errors = {
  authorization: () => {
    return createHttpError.Unauthorized("Unauthorized valid!");
  },

  notFound: () => {
    return createHttpError.NotFound();
  },
};

export default Errors;
