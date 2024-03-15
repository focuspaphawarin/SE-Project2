export const registrationFormControls = [
    {
      id: 'username',
      type: 'username',
      placeholder: 'Enter your username',
      label: 'UserName',
      componentType: 'input',
    },
    {
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      componentType: 'input',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      componentType: 'input',
    },
    {
        id: 'phone_number',
        type: 'phone_number',
        placeholder: 'Enter your phone number',
        label: 'Phone Number',
        componentType: 'input',
    },
    {
        id: 'address',
        type: 'address',
        placeholder: 'Enter your address',
        label: 'Address',
        componentType: 'input',
    },
    {
      id: 'role',
      type: '',
      placeholder: '',
      label: 'Role',
      componentType: 'select',
      options: [
        {
          id: 'shop',
          label: 'Shop',
        },
        {
          id: 'customer',
          label: 'Customer',
        },
      ],
    },
  ];
  
  export const loginFormControls = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      componentType: 'input',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      componentType: 'input',
    },
  ];
  