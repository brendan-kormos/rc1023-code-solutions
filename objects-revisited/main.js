const business = {
  opens: '9:00:00',
  closes: '17:00:00',
  totalEmployees: 4,
  daysOpen: ['MO', 'TU', 'WE', 'TH', 'FR'],
  employees: {
    shawn: {
      position: 'Hiring Manager',
      daysOfWeekWorking: ['MO', 'TU', 'WE', 'TH', 'FR'],
    },
    brendan: {
      position: 'Software Engineer',
      daysOfWeekWorking: ['TU', 'WE', 'TH', 'FR'],
    },
    rob: {
      position: 'Hiring Manager',
      daysOfWeekWorking: ['MO', 'WE', 'TH', 'FR'],
    },
    nang: {
      position: 'Hiring Manager',
      daysOfWeekWorking: ['MO', 'TU', 'TH', 'FR'],
    },
  },
};

const jobTitles = [
  'Chief Operating Officer',
  'Management',
  'Software Engineer',
  'Project Manager',
];

function ajaxRequest(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
  return xhr;
}

const weekend = { SU: true, SA: true };
function addWeekends() {
  for (const day in weekend) {
    const found = business.daysOpen.find((element) => day === element);
    if (found) continue;
    if (day === 'SU') business.daysOpen.unshift(day);
    else business.daysOpen.push(day);
  }
}

function addEmployees() {
  const xhr = ajaxRequest('https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', function () {
    const response = xhr.response;
    for (let i = 0; i < 4; i++) {
      const daysWorking = [];
      for (let i = 0; i < 5; i++) {
        const dayWorking =
          business.daysOpen[
            Math.floor(Math.random() * business.daysOpen.length)
          ];
        const found = daysWorking.find((element) => element === dayWorking);
        if (!found) {
          daysWorking.push(business.daysOpen[i]);
        }
      }
      const fullTime = daysWorking.length > 5;
      const apiPerson = response[i];
      const employees = business.employees;
      employees[apiPerson.name] = {
        position: jobTitles[Math.floor(Math.random() * jobTitles.length)],
        fullTime,
        daysOfWeekWorking: daysWorking,
      };

      business.totalEmployees++;
    }
  });
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

window.addEventListener('DOMContentLoaded', function (event) {
  addWeekends();
  let employeeToDelete = null;
  addEmployees();
  for (const name in business.employees) {
    // uses out of date object, unsure of how to use current up to date object
    const value = business.employees[name];
    employeeToDelete = name;
    const fullTime = value.daysOfWeekWorking.length > 5;
    value.fullTime = fullTime;
  }

  deleteEmployee(employeeToDelete);
});
