const PATH = "/salaries";

export const getSalaries = (client) => async () => {
  try {
    const { data } = await client.get(`${PATH}`);
    return data
  } catch (error) {
    console.info("> error [getSalaries]: ", error.message);
    return {
      success: false,
    };
  }
};