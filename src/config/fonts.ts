export const test = {
  test: 'test',
};

export const GetSdCartoonFont = (
  family: 'test',
): {
  fontFamily: string;
} => {
  return {
    fontFamily: test[family],
  };
};
