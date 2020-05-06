interface ISuccess {
  status?: number;
  message: string;
  data?: Object | Object[];
}

export function success({ status = 200, message, data = [] }: ISuccess) {
  return {
    status,
    message,
    data,
  };
}
