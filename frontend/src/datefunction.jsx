export const isRegistrationOpen = (registrationDate) => {
  if (!registrationDate) return false;

  const today = new Date();

  const [day, month, year] = registrationDate.split("-");

  // JS months are 0-based
  const deadline = new Date(year, month - 1, day, 23, 59, 59);

  return today <= deadline;
};
