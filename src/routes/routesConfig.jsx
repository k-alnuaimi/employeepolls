import PrivateRoutes from "../utils/PrivateRoutes";
import Home from "./Home";
import Leaderbord from "./Leaderboard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails";
import Questions from "./Questions";

const ErrorBoundary = () => {

  return <Center>
    <Text>404 Not Found</Text>
  </Center>

}

const routesConfig = [
  {
    path: "/Login",
    element: <Login />,
    index: true,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    element: <PrivateRoutes />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <Home />,
        children: [
          {
            path: "/questions",
            element: <Questions />,
            index: true
          }, {
            path: "/questions/:question_id",
            element: <QuestionDetails />
          }, {
            path: "/leaderboard",
            element: <Leaderbord />
          }, {
            path: "/add",
            element: <NewQuestion />
          },

        ]

      }


    ]
  },
]

export default routesConfig;