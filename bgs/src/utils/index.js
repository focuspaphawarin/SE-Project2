export const registrationFormControls = [
  {
    id: 'username',
    type: 'username',
    placeholder: 'Enter your username',
    label: 'Username',
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
    label: 'Phone',
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
        id: 'customer',
        label: 'Customer',
      },
      {
        id: 'shop',
        label: 'Shop',
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

export const adminAddProductformControls = [
  {
    id: "boardgame_name",
    type: "text",
    placeholder: "Enter name",
    label: "Boardgame Name",
    componentType: "input",
  },
  {
    id: "description",
    rows:"4",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "number_of_players",
    type: "text",
    placeholder: "Enter players",
    label: "Number of players",
    componentType: "input",
  },
  {
    id: "play_time",
    type: "text",
    placeholder: "Enter playtime",
    label: "Play time",
    componentType: "input",
  },
  {
    id: "span_of_age",
    type: "text",
    placeholder: "Enter Age",
    label: "Age",
    componentType: "input",
  },
  {
    id: "boardgame_type",
    type: "",
    placeholder: "",
    label: "Boardgame type",
    componentType: "select",
    options: [
      {
        id: "party",
        label: "Party",
      },
      {
        id: "family",
        label: "Family",
      },
      {
        id: "strategy",
        label: "Strategy",
      },
    ],
  },
  {
    id: "inventory_stocks",
    type: "number",
    placeholder: "Enter stock",
    label: "Stocks",
    componentType: "input",
  },
];