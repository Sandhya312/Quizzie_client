import classes from "./questionAnalysis.module.css";
import QuestionAnalysisCard from "../../components/quetionAnalysisCard/QuestionAnalysisCard";

// const questionImpression= [
//     {
//         "option1": "djf;sd"
//     },
//     {
//         "option2": "s;dkfjdkf"
//     },
//     {
//         "option3":";sdfjdkfjd"
//     },
//     {
//         "option4":"sdfjdkfjd"
//     }
// ];

// const questionImpression = [
//     {
//         "people Answered Incorrectly":345
//     },
//     {
//         "people Answered Correctly": 453
//     },
//     {
//         "people Skipped the Question": 69
//     }
// ]

const quiz = {
  questions: [
    {
      title: "react quiz",
      type: 1,
      impression: [
        {
          option1:456
        },
        {
          option2: 3456
        },
        {
            option3:456
          },
          {
            option4: 3456
          },
      ],
      options: [
        {
          option1: "d",
        },
        {
          option2: "a",
        },
        {
          option3: "djf;sd",
        },
        {
          option4: "s;dkfjdkf",
        },
      ],
    },
    {
      title: "nodejs quiz",
      type: 1,
      impression: [
        {
          option1: 455
        },
        {
          option2:345
        },
        {
            option1:456
          },
          {
            option2: 3456
          },
      ],
      options: [
        {
          option1: "d",
        },
        {
          option2: "a",
        },
        {
          option3: "djf;sd",
        },
        {
          option4: "s;dkfjdkf",
        },
      ],
    },
    {
        title: "express quiz",
        type: 1,
        impression: [
          {
            option1:456
          },
          {
            option2: 3456
          },
          {
            option3: 456
          },
          {
            option4: 3456
          }
        ],
        options: [
          {
            option1: "d",
          },
          {
            option2: "a",
          },
          {
            option3: "djf;sd",
          },
          {
            option4: "s;dkfjdkf",
          },
        ],
      },
      {
        title: "mongo quiz",
        type: 1,
        impression: [
          {
            option1: 455
          },
          {
            option2:345
          },
          {
            option3: 456
          },
          {
            option4: 3456
          }
        ],
        options: [
          {
            option1: "d",
          },
          {
            option2: "a",
          },
          {
            option3: "djf;sd",
          },
          {
            option4: "s;dkfjdkf",
          },
        ],
      },
  ],
};

// const quiz = {
//     "name": "js quiz",
//     questions: [
//       {
//         title: "react quiz",
//         type: 1,
//         impression: [
//             {
//                 "people Answered Incorrectly": 455
//               },
//               {
//                 "people Answered Correctly":345
//               },
//               {
//                 "people Attempted the question": 456
//               },
//         ],
//         options: [
//           {
//             option1: "d",
//           },
//           {
//             option2: "a",
//           },
//           {
//             option3: "djf;sd",
//           },
//           {
//             option4: "s;dkfjdkf",
//           },
//         ],
//       },
//       {
//         title: "nodejs quiz",
//         type: 1,
//         impression: [
//             {
//                 "people Answered Incorrectly": 455
//               },
//               {
//                 "people Answered Correctly":345
//               },
//               {
//                 "people Attempted the question": 456
//               },
//         ],
//         options: [
//           {
//             option1: "d",
//           },
//           {
//             option2: "a",
//           },
//           {
//             option3: "djf;sd",
//           },
//           {
//             option4: "s;dkfjdkf",
//           },
//         ],
//       },
//       {
//           title: "express quiz",
//           type: 1,
//           impression: [
//             {
//                 "people Answered Incorrectly": 455
//               },
//               {
//                 "people Answered Correctly":345
//               },
//               {
//                 "people Attempted the question": 456
//               },
//           ],
//           options: [
//             {
//               option1: "d",
//             },
//             {
//               option2: "a",
//             },
//             {
//               option3: "djf;sd",
//             },
//             {
//               option4: "s;dkfjdkf",
//             },
//           ],
//         },
//         {
//           title: "mongo quiz",
//           type: 1,
//           impression: [
//             {
//               "people Answered Incorrectly": 455
//             },
//             {
//               "people Answered Correctly":345
//             },
//             {
//               "people Attempted the question": 456
//             },
            
//           ],
//           options: [
//             {
//               option1: "d",
//             },
//             {
//               option2: "a",
//             },
//             {
//               option3: "djf;sd",
//             },
//             {
//               option4: "s;dkfjdkf",
//             },
//           ],
//         },
//     ],
//   };

const QuestionAnalysis = () => {
//   const questions = quiz.questions;
  return (
    <div className={classes.questionAnalysis}>
       
      <div style={{
        display:"flex",
        justifyContent:"space-between",
      }}>
      <h1 className={classes.quiz_name}>{quiz.name} Question Analysis</h1>
       <div className={classes.impression_created}>
       <p>Created on : 04 Sep, 2023</p>
       <p>Impressions : 667</p>
       </div>
      </div>

      <div className={classes.questions}>
      { quiz.questions.map((question, i) => {
        return (
          <div key={i} className={classes.question}>
            <h4 className={classes.question_name}>Q{i+1}. {question.title}</h4>

            {/* question analysis section */}
             <div className={classes.questions_box}>
                
            {question.impression.map((question, i) => {
              return <QuestionAnalysisCard question={question} key={i} />;
            })}
            
             </div>
             <hr 
              style={{
                width:"100%",
                strokewidth: "2px",
                 stroke: "#D7D7D7",
                 margin: "10px 0",
              }}
             />
          </div>
        );
      })}
        </div> 
      
    </div>
  );
};



export default QuestionAnalysis;
