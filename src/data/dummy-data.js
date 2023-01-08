const DUMMY_DATA_CUSTOMER = [
  { CUSTOMER_NAME: "Alice Smith", CUSTOMER_PHONE_NO: "5557778888" },
  { CUSTOMER_NAME: "Mike Johnson", CUSTOMER_PHONE_NO: "5552221111" },
  { CUSTOMER_NAME: "Emma Williams", CUSTOMER_PHONE_NO: "5558889999" },
  { CUSTOMER_NAME: "Olivia Davis", CUSTOMER_PHONE_NO: "5554443333" },
  { CUSTOMER_NAME: "Liam Thompson", CUSTOMER_PHONE_NO: "5553221111" },
  { CUSTOMER_NAME: "Sophia Brown", CUSTOMER_PHONE_NO: "5550987654" },
  { CUSTOMER_NAME: "Ava Gonzalez", CUSTOMER_PHONE_NO: "5559876543" },
  { CUSTOMER_NAME: "James Rodriguez", CUSTOMER_PHONE_NO: "5557654321" },
  { CUSTOMER_NAME: "Isabella Anderson", CUSTOMER_PHONE_NO: "5555678901" },
  { CUSTOMER_NAME: "Oliver Jackson", CUSTOMER_PHONE_NO: "5554321098" },
];

const DUMMY_DATA_PRODUCT = [
  { PRODUCT_NAME: "Laptop", PRODUCT_PRICE: 1200, PRODUCT_QUANTITY: 7 },
  { PRODUCT_NAME: "Printer", PRODUCT_PRICE: 150, PRODUCT_QUANTITY: 3 },
  { PRODUCT_NAME: "Scanner", PRODUCT_PRICE: 250, PRODUCT_QUANTITY: 2 },
  { PRODUCT_NAME: "Mouse", PRODUCT_PRICE: 50, PRODUCT_QUANTITY: 15 },
  { PRODUCT_NAME: "Speakers", PRODUCT_PRICE: 75, PRODUCT_QUANTITY: 8 },
  { PRODUCT_NAME: "Headphones", PRODUCT_PRICE: 100, PRODUCT_QUANTITY: 10 },
  { PRODUCT_NAME: "Charger", PRODUCT_PRICE: 25, PRODUCT_QUANTITY: 20 },
  { PRODUCT_NAME: "Webcam", PRODUCT_PRICE: 50, PRODUCT_QUANTITY: 5 },
  { PRODUCT_NAME: "Microphone", PRODUCT_PRICE: 100, PRODUCT_QUANTITY: 7 },
  { PRODUCT_NAME: "Graphics card", PRODUCT_PRICE: 350, PRODUCT_QUANTITY: 3 },
];

const DUMMY_DATA_USER = [
  { USER_NAME: "alicesmith", USER_PASSWORD: "12345678", USER_ROLE: "SubUser" },
  {
    USER_NAME: "mikejohnson",
    USER_PASSWORD: "abc12345",
    USER_ROLE: "SuperUser",
  },
  {
    USER_NAME: "emmawilliams",
    USER_PASSWORD: "qwerty123",
    USER_ROLE: "SubUser",
  },
  {
    USER_NAME: "oliviadavis",
    USER_PASSWORD: "letmein1",
    USER_ROLE: "SuperUser",
  },
  {
    USER_NAME: "liamthompson",
    USER_PASSWORD: "password1",
    USER_ROLE: "SubUser",
  },
  {
    USER_NAME: "sophiabrown",
    USER_PASSWORD: "abcdefg1",
    USER_ROLE: "SuperUser",
  },
  { USER_NAME: "avagonzalez", USER_PASSWORD: "qwertyu1", USER_ROLE: "SubUser" },
  {
    USER_NAME: "jamesrodriguez",
    USER_PASSWORD: "password2",
    USER_ROLE: "SuperUser",
  },
  {
    USER_NAME: "isabellaanderson",
    USER_PASSWORD: "abcdefg2",
    USER_ROLE: "SubUser",
  },
  {
    USER_NAME: "oliverjackson",
    USER_PASSWORD: "qwertyu2",
    USER_ROLE: "SuperUser",
  },
];

const DUMMY_DATA_INVOICE = [
  {
    INVOICE_CUSTOMER_ID: 1,
    INVOICE_USER_ID: 1,
    INVOICE_PRODUCT_ID: 1,
  },
  {
    INVOICE_CUSTOMER_ID: 2,
    INVOICE_USER_ID: 2,
    INVOICE_PRODUCT_ID: 2,
  },
  {
    INVOICE_CUSTOMER_ID: 3,
    INVOICE_USER_ID: 3,
    INVOICE_PRODUCT_ID: 3,
  },
  {
    INVOICE_CUSTOMER_ID: 4,
    INVOICE_USER_ID: 4,
    INVOICE_PRODUCT_ID: 4,
  },
  {
    INVOICE_CUSTOMER_ID: 5,
    INVOICE_USER_ID: 5,
    INVOICE_PRODUCT_ID: 5,
  },
  {
    INVOICE_CUSTOMER_ID: 6,
    INVOICE_USER_ID: 6,
    INVOICE_PRODUCT_ID: 6,
  },
  {
    INVOICE_CUSTOMER_ID: 7,
    INVOICE_USER_ID: 7,
    INVOICE_PRODUCT_ID: 7,
  },
  {
    INVOICE_CUSTOMER_ID: 8,
    INVOICE_USER_ID: 8,
    INVOICE_PRODUCT_ID: 8,
  },
  {
    INVOICE_CUSTOMER_ID: 9,
    INVOICE_USER_ID: 9,
    INVOICE_PRODUCT_ID: 9,
  },
  {
    INVOICE_CUSTOMER_ID: 10,
    INVOICE_USER_ID: 10,
    INVOICE_PRODUCT_ID: 10,
  },
];

const DUMMY_DATA_ACTIVITY = [
  {
    ACTIVITY_TITLE: "Meeting with customer",
    ACTIVITY_DESCRIPTION: "Meeting with customer to discuss project details",
    ACTIVITY_CUSTOMER_ID: 1,
    ACTIVITY_USER_ID: 1,
  },
  {
    ACTIVITY_TITLE: "Follow up on project progress",
    ACTIVITY_DESCRIPTION: "Follow up with team on project progress",
    ACTIVITY_CUSTOMER_ID: 2,
    ACTIVITY_USER_ID: 2,
  },
  {
    ACTIVITY_TITLE: "Update project schedule",
    ACTIVITY_DESCRIPTION: "Update project schedule with new deadlines",
    ACTIVITY_CUSTOMER_ID: 3,
    ACTIVITY_USER_ID: 3,
  },
  {
    ACTIVITY_TITLE: "Review project deliverables",
    ACTIVITY_DESCRIPTION: "Review project deliverables with customer",
    ACTIVITY_CUSTOMER_ID: 4,
    ACTIVITY_USER_ID: 4,
  },
  {
    ACTIVITY_TITLE: "Finalize project details",
    ACTIVITY_DESCRIPTION: "Finalize project details with customer",
    ACTIVITY_CUSTOMER_ID: 5,
    ACTIVITY_USER_ID: 5,
  },
  {
    ACTIVITY_TITLE: "Follow up on payment",
    ACTIVITY_DESCRIPTION: "Follow up with customer on payment for project",
    ACTIVITY_CUSTOMER_ID: 6,
    ACTIVITY_USER_ID: 6,
  },
  {
    ACTIVITY_TITLE: "Project presentation",
    ACTIVITY_DESCRIPTION: "Present project to customer",
    ACTIVITY_CUSTOMER_ID: 7,
    ACTIVITY_USER_ID: 7,
  },
  {
    ACTIVITY_TITLE: "Update project documentation",
    ACTIVITY_DESCRIPTION: "Update project documentation with final details",
    ACTIVITY_CUSTOMER_ID: 8,
    ACTIVITY_USER_ID: 8,
  },
  {
    ACTIVITY_TITLE: "Project review",
    ACTIVITY_DESCRIPTION: "Review project with customer and team",
    ACTIVITY_CUSTOMER_ID: 9,
    ACTIVITY_USER_ID: 9,
  },
  {
    ACTIVITY_TITLE: "Project closeout",
    ACTIVITY_DESCRIPTION: "Close out project and finalize all details",
    ACTIVITY_CUSTOMER_ID: 10,
    ACTIVITY_USER_ID: 10,
  },
];

const DUMMY_DATA_REMINDER = [
  {
    "REMINDER_TITLE": "Call Jim",
    "REMINDER_DESCRIPTION": "Call Jim about the project update",
    "REMINDER_DATE": "2023-01-09T09:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 1
  },
  {
    "REMINDER_TITLE": "Submit report",
    "REMINDER_DESCRIPTION": "Submit the project report to the boss",
    "REMINDER_DATE": "2023-01-10T15:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 2
  },
  {
    "REMINDER_TITLE": "Meeting with team",
    "REMINDER_DESCRIPTION": "Meet with the team to discuss the new project",
    "REMINDER_DATE": "2023-01-11T11:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 3
  },
  {
    "REMINDER_TITLE": "Buy groceries",
    "REMINDER_DESCRIPTION": "Buy groceries for the week",
    "REMINDER_DATE": "2023-01-12T18:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 4
  },
  {
    "REMINDER_TITLE": "Renew library books",
    "REMINDER_DESCRIPTION": "Renew books borrowed from the library",
    "REMINDER_DATE": "2023-01-13T12:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 5
  },
  {
    "REMINDER_TITLE": "Dentist appointment",
    "REMINDER_DESCRIPTION": "Visit the dentist for a regular checkup",
    "REMINDER_DATE": "2023-01-14T09:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 6
  },
  {
    "REMINDER_TITLE": "Book movie tickets",
    "REMINDER_DESCRIPTION": "Book tickets for the new Marvel movie",
    "REMINDER_DATE": "2023-01-15T20:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 7
  },
  {
    "REMINDER_TITLE": "Buy birthday gift",
    "REMINDER_DESCRIPTION": "Buy a birthday gift for John",
    "REMINDER_DATE": "2023-01-16T14:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 8
  },
  {
    "REMINDER_TITLE": "Pay electricity bill",
    "REMINDER_DESCRIPTION": "Pay electricity bill on time",
    "REMINDER_DATE": "2023-01-16T14:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 9
  },
  {
    "REMINDER_TITLE": "Visit the dentist",
    "REMINDER_DESCRIPTION": "Visit the dentist for monthly checkup",
    "REMINDER_DATE": "2023-01-16T14:00:00",
    "REMINDER_STATUS": "Incomplete",
    "REMINDER_USER_ID": 10
  }
]

module.exports = {
  DUMMY_DATA_CUSTOMER,
  DUMMY_DATA_USER,
  DUMMY_DATA_PRODUCT,
  DUMMY_DATA_INVOICE,
  DUMMY_DATA_ACTIVITY,
  DUMMY_DATA_REMINDER
};
