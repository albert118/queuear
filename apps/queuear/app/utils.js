export function groupDeployments(plannedDeployments) {
  const groups = [];
  let nextGroup = [];
  let currStrategy = plannedDeployments[0].strategy;

  for (const key in plannedDeployments) {
    const planned = plannedDeployments[key];
    if (currStrategy !== planned.strategy) {
      currStrategy = planned.strategy;
      groups.push(nextGroup);
      nextGroup = [];
    }

    nextGroup.push(planned);
  }

  groups.push(nextGroup);

  return groups;
}

export function titleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}
