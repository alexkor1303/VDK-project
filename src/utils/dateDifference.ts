export const dateDifference = (
  projectStartDate: string,
  projectEndDate: string
) => {
  const startDate = new Date(projectStartDate);
  const endDate = new Date(projectEndDate);
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Некорректные даты");
  }

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference + 1;
};

