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

const commandList = [
  {
  commands:'print:',
  description: 'Prints out the list of commands.'
 },
 {
  commands:'verify:',
  description: 'Checks if the employee exists.'
  },
  {
    commands:'lookup:',
    description: "Prints out one of the employee's information."
  },
  {
    commands: 'contains:',
    description: "Prints out all of the imformation of the employees whose name contain the given string."
  },
  {
      commands: 'update:',
      description: 'Changes the information for the chosen employee.'
  },
  {
    commands: 'add:',
    description: 'Adds knew employee to the list.'
  },
  {
    commands: 'delete:',
    description: 'Removes the chosen employee.'
  },
  {
    commands: 'fix:',
    description: 'Changes the name of the employee.'
  },
  {
    commands: 'list:',
    description: 'Displays the list of commands.'
  }
];


// command section this code below will ask the user for the command
// const commands = function (question) {
//   const command = prompt(question);
//   return command;
// }
let repeatBool = false;

while (repeatBool != true) {

  const command = prompt('which command would you like to use?');

  // if section for the print command
  if (command.toLowerCase() === 'print') {
    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    repeatBool = true;
  }
  // if section for the verify command 
  else if (command.toLowerCase() === 'verify') {
    const verifyName = prompt('Which employee would you like to verify?');
    let trueFalse = 'false';
    for (let i = 0; i < employeeList.length; i++) {
      const checkName = employeeList[i].name;
      if (checkName.toUpperCase() === verifyName.toUpperCase()) {
        trueFalse = 'true';
      }
    }
    render(trueFalse);
    repeatBool = true;
  }
  // if section for the lookup command
  else if (command.toLowerCase() === 'lookup') {
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
    repeatBool = true;
  }
  // if section for the contains command
  else if (command.toLowerCase() === 'contains') {
    const containString = prompt("Which letter of the employee whould you like to look at?");

    for (let i = 0; i < employeeList.length; i++) {

      const containName = employeeList[i].name;
      var upperName = containName.toLowerCase();
      var upperString = containString.toLowerCase();
      if (upperName.includes(upperString)) {
        render(employeeList[i].name);
      }
    }
    repeatBool = true;
  }
  // if section for the update command
  else if (command.toLowerCase() === 'update') {
    const updateName = prompt("Which employee's imformation would you like to change?");
    const updateField = prompt("Which field would you like to change(office number or phone number?");
    const updateValue = prompt("Please tell us the new information");

    for (let i = 0; i < employeeList.length; i++) {
      const containName = employeeList[i].name;
      var upperName = containName.toLowerCase();
      var upperString = updateName.toLowerCase();
      if (upperName === updateName && updateField === 'office number') {
        employeeList[i].officeNum = updateValue;
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);

      } else if (upperName === updateName && updateField === 'phone number') {
        employeeList[i].phoneNum = updateValue;
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);

      }
    }
    repeatBool = true;
  }

  // if section for the add command

  else if (command.toLowerCase() === 'add') {
    const addName = prompt("What is the name of the new employee");
    const addOffice = prompt("What is the new employee's office number?");
    const addTelephone = prompt("what is the new employee's telephone number?");

    var newEmployee = {
      name: addName,
      officeNum: addOffice,
      phoneNum: addTelephone
    }

    employeeList.push(newEmployee);

    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    repeatBool = true;

  }

  // if section for the delete command

  else if (command.toLowerCase() === 'delete') {
    const deleteEmployee = prompt("What is the name of the employee to be deleted");

    for (let i = 0; i < employeeList.length; i++) {
      const deleteName = employeeList[i].name;
      if (deleteName.toLowerCase() === deleteEmployee.toLowerCase()) {
        delete employeeList[i].name;
        delete employeeList[i].officeNum;
        delete employeeList[i].phoneNum;
      }
    }

    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    repeatBool = true;
  }
  else if (command.toLowerCase() === 'fix') {
    const fixEmployee = prompt("Which employee's name would to like to change?");
    const fixedEmployee = prompt("What is the correct name of the employee?")
    for (let i = 0; i < employeeList.length; i++) {
      const containName = employeeList[i].name;
      var upperName = containName.toLowerCase();
      var updateName = fixEmployee.toLowerCase();

      if (upperName === updateName) {
        employeeList[i].name = fixedEmployee;
        for (let i = 0; i < employeeList.length; i++) {
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        }
      } 
    }
    repeatBool = true;
    
  }
  else if(command.toLowerCase() === 'list'){
    for(let i = 0; i < commandList.length; i++){
      render(commandList[i].commands,commandList[i].description);
    }
    repeatBool = true;
  }
}
