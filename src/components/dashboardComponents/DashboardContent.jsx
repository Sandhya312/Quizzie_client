import classes from "./dashboardContent.module.css";
import { getQuizs } from "../../store/quizSlice/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Loader from "../commonComponents/loader/Loader";

const DashboardContent = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(["token"]);
  // eslint-disable-next-line no-unused-vars
  const [cookieUser, setCookieUser] = useCookies(["user"]);

  const quizs = useSelector((state) => state.quizDb.quizs);
  const loading = useSelector((state) => state.quizDb.loading);
  const quizStats = useSelector((state) => state.quizDb.stats);

  useEffect(() => {
    dispatch(getQuizs({ token: cookie["token"], userId: cookieUser["user"] }));
  }, [cookie, cookieUser, dispatch]);

  const formatNumber = (number) => {
    const magnitude = Math.floor(Math.log10(number));

    if (magnitude < 3) {
      // If the number is less than 1000, no conversion needed
      return number.toString();
    } else {
      // If the number is greater than or equal to 1000, convert to "k" format
      const divisor = Math.pow(10, magnitude - (magnitude % 3));
      const formattedNumber = Math.floor(number / divisor);
      return `${formattedNumber}k`;
    }
  };

  return (
    <div className={classes.dashboard_content}>
      {/* quiz stats */}
      <div className={classes.stats}>
        {/* total no. of quiz created */}
        <div>
          <h4>
            <span>
              {quizStats.quizCount === 0 ||
              quizStats.quizCount === "" ||
              Object.keys(quizStats).length === 0
                ? 0
                : formatNumber(quizStats.quizCount)}
            </span>{" "}
            Quiz Created
          </h4>
        </div>

        {/* total no. of questions created */}
        <div>
          <h4>
            <span>
              {quizStats.questionCount === 0 ||
              quizStats.questionCount === "" ||
              Object.keys(quizStats).length === 0
                ? 0
                : formatNumber(quizStats.questionCount)}
            </span>{" "}
            Questions Created
          </h4>
        </div>

        {/* total impressions */}
        <div>
          <h4>
            <span>
              {quizStats.Totalimpression === 0 ||
              quizStats.Totalimpression === "" ||
              Object.keys(quizStats).length === 0
                ? 0
                : formatNumber(quizStats.Totalimpression)}
            </span>{" "}
            Total Impressions
          </h4>
        </div>
      </div>

      {/* trending quiz */}
      <div className={classes.trending_quiz}>
        {/* trending quiz heading */}
        <h1>Trending Quiz</h1>
        {/* trending quiz list */}
        <div className={classes.trending_quiz_list}>
          {loading && <Loader />}

          {!loading && quizs.length === 0 && (
            <h1 style={{ color: "#FF4B4B" }}>No Quiz Created</h1>
          )}
        
          {!loading &&
            quizs.length !== 0 &&
            quizs.map((quiz, index) => {
              return (
                <div key={index}>
                  <div className={classes.title_impression}>
                    {/* quiz name */}
                    <h4>{quiz.name}</h4>

                    {/* quiz impression */}
                    <div className={classes.impressions}>
                      <span
                        style={{
                          margin: "2px",
                        }}
                      >
                        {quiz.impressions}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 15.375C12.7279 15.375 15.75 12.2542 15.75 10.125C15.75 7.99575 12.7279 4.875 9 4.875C5.27213 4.875 2.25 7.998 2.25 10.125C2.25 12.252 5.27213 15.375 9 15.375Z"
                          stroke="#FF5D01"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12.375C9.59674 12.375 10.169 12.1379 10.591 11.716C11.0129 11.294 11.25 10.7217 11.25 10.125C11.25 9.52826 11.0129 8.95597 10.591 8.53401C10.169 8.11205 9.59674 7.875 9 7.875C8.40326 7.875 7.83097 8.11205 7.40901 8.53401C6.98705 8.95597 6.75 9.52826 6.75 10.125C6.75 10.7217 6.98705 11.294 7.40901 11.716C7.83097 12.1379 8.40326 12.375 9 12.375Z"
                          stroke="#FF5D01"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.974 4.22475L5.94675 5.58225M13.3594 4.39125L12.3862 5.74875M9.00337 2.625V4.875"
                          stroke="#FF5D01"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* created date */}
                  <p className={classes.created_date}>
                    created on : <span>{quiz.createdTime}</span>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
