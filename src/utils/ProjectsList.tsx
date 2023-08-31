import SmallExam from "../assets/images/examProject.jpg";
import UserAlbum from "../assets/images/userAlbum.png";
import TicTacatoeGame from "../assets/images/TicTacToe project.png";
import GamesStore from "../assets/images/GamesStore.png";
import restaurant from "../assets/images/yummyRestaurent.png";
import luckGame from "../assets/images/luckGame.png";
const projects = [
  {
    id: 0,
    imgs_links: GamesStore,
    readMeLink:
      "https://github.com/HebaAli48/Front-end_E-Commerce/blob/main/README.md",
    link: "https://github.com/HebaAli48/Front-end_E-Commerce.git",

    project_name: " Game Store",

    description:
      "web application developed using Node.js and MongoDB that allows users to browse, purchase, and manage video games. The application has a Store Page, a Cart Page, and a Wishlist. Admin users have special privileges to manage the store inventory.  The application also includes an Express REST API with JWT authentication and authorization to manage user accounts. Cloudinary is used for efficient image storage, and the application follows an MVC architecture.",
  },
  {
    id: 1,
    imgs_links: UserAlbum,
    link: "https://github.com/HebaAli48/AngularUserAlbum/tree/main",
    readMeLink:
      "https://github.com/HebaAli48/AngularUserAlbum/blob/main/README.md",

    project_name: "User Albums",
    description:
      "Angular User Album is a web application that allows users to log in, view user albums, and manage their profiles.In Addition t Admin Roles (Add User , Edit User , Delete User ) , Form Validation And Error Page",
  },
  {
    id: 2,
    imgs_links: TicTacatoeGame,
    link: "https://github.com/HebaAli48/react-tictactoc",
    readMeLink:
      "https://github.com/HebaAli48/react-tictactoc/blob/main/README.md",

    project_name: " Tic Tac Toe Game",
    description:
      "This project is an implementation of the popular game using Reactjs.Test your strategic skills by playing against a friend ✨✨.In this game ,two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner 🏆🏆.If XPlayer is drawed with Oplayer , there will be last round to determine the winner🏆🏆.",
  },
  {
    id: 3,
    imgs_links: SmallExam,
    readMeLink:
      "https://github.com/HebaAli48/smallExam-front-end/blob/main/README.md",
    link: "https://github.com/HebaAli48/smallExam-front-end",

    project_name: "Exam ",
    description:
      "Resposive test consists of a welcome page that take first name of user and stored it in cookies, then redirects the user to an exam page with 10 questions. Once the user selects an answer for a question, all other choices are disabled, and the result of the answer is displayed as either correct or wrong. A progress bar is displayed to show the user's progress in answering the questions relative to the total number of questions.After the user finishes the exam, a rank is sent from an API and displayed on a result page along with a status message based on the rank. A Try Again button is provided to allow the user to retake the exam.",
  },
  {
    id: 4,
    imgs_links: restaurant,
    readMeLink:
      "https://github.com/HebaAli48/Front-end-Restaurant/blob/main/README.md",
    link: "https://github.com/HebaAli48/Front-end-Restaurant",

    project_name: "Restaurant ",
    description:
      "This web application provides a platform for customers to browse the menu, place orders, track orders, and interact with the restaurant. The website also includes an admin panel for managing dishes and orders.",
  },
  {
    id: 5,
    imgs_links: luckGame,
    link: "https://github.com/HebaAli48/DiceGame",
    readMeLink: "https://github.com/HebaAli48/DiceGame/blob/main/README.md",

    project_name: "Luck Dice Game ",
    description:
      "This is a simple web-based two-player game where players take turns rolling a dice and accumulate scores to win.",
  },
];
export default projects;
