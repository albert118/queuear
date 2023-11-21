export const availableStatus = {
  name: 'Available',
  value: 0,
};

export const busyStatus = {
  name: 'Busy',
  value: 1,
};

export const plannedStatus = {
  name: 'Planned',
  value: 2,
};

export const pendingStatus = {
  name: 'Pending',
  value: 3,
};

const statuses = [availableStatus, busyStatus, plannedStatus, pendingStatus];

export default function GetDemoStatus() {
  return statuses.sort(function () {
    return 0.5 - Math.random();
  })[0];
}
