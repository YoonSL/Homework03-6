const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
// command section this code below will ask the user for the command
const command = prompt('which command would you like to use?')
// if section for the print command
if (command === 'print') {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum)
  }
}
// if section for the verify command 
else if (command === 'verify') {
  const verifyName = prompt('Which employee would you like to verify?');
  let trueFalse = 'false';
  for (let i = 0; i < employeeList.length; i++) {
    const checkName = employeeList[i].name;
    if (checkName.toUpperCase() === verifyName.toUpperCase()) {
      trueFalse = 'true';
    }
  }
  render(trueFalse);
}
// if section for the lookup command
else if (command === 'lookup') {
  const lookupName = prompt('Which employee would you like to lookup?');
  let lookupNumber = '0';
  let employeeUpper = '0';
  for (let i = 0; i < employeeList.length; i++) {
    const checkName = employeeList[i].name;
    if (checkName.toUpperCase() === lookupName.toUpperCase()) {
      lookupNumber = i;
      employeeUpper = employeeList[lookupNumber].name;
    }
  }
  if (employeeUpper.toUpperCase() === lookupName.toUpperCase()) {
    render(employeeList[lookupNumber].name, employeeList[lookupNumber].officeNum, employeeList[lookupNumber].phoneNum);
  } else {
    render("None");
  }
}
// if section for the contains command
else if (command === 'contains') {
  const containString = prompt("Which letter of the employee whould you like to look at?");

  for (let i = 0; i < employeeList.length; i++){
    
    const containName = employeeList[i].name;
    var upperName = containName.toLowerCase();
    var upperString = containString.toLowerCase();
    if (upperName.includes(upperString)) {
      render(employeeList[i].name);
    }
  }
}
// if section for the update command
else if (command === 'update') {
  const updateList = prompt("which employee's imformation would you like to change?");
  
}