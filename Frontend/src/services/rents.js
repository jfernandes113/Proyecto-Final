const PATH = "/rents";

export const getRents = (client) => async () => {
  try {
    const { data } = await client.get(`${PATH}`);
    return data
  } catch (error) {
    console.info("> error [getRents]: ", error.message);
    return {
      success: false,
    };
  }
};