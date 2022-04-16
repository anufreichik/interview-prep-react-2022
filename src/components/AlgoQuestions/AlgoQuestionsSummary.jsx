import React, {useEffect, useState} from 'react';
import './style.css';

const AlgoQuestionsSummary = () => {

    const [categoriesQuestionsData, setCategoriesQuestionsData] = useState({});
    const [submissionsData, setSubmissionsData] = useState({});

    useEffect(() => {
        async function getData() {
            const [questionsResponse, submissionsResponse] = await Promise.all([
                fetch('/questionsData.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }),
                fetch('/submissionsData.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })

            ])

            const [questionsJson, submissionsJson] = await Promise.all([
                questionsResponse.json(), submissionsResponse.json()
            ])
            const questData = getQuestionsByCategoryObj(questionsJson);
            const submissionsDataObj = getSubmissionsByQuestionIdObj(submissionsJson);

            setCategoriesQuestionsData(questData);
            setSubmissionsData(submissionsDataObj);

            // const questionsResponse = await fetch('/questionsData.json', {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // });
            // const questionsJson = await questionsResponse.json();
            //const questData =  getQuestionsByCategoryObj(questionsJson);

            // const submissionsResponse = await fetch('/submissionsData.json', {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // });
            // const submissionsJson = await submissionsResponse.json();
            // const submissionsDataObj =  getSubmissionsByQuestionIdObj(submissionsJson);


        }

        getData();


    }, []);


    function getSubmissionsByQuestionIdObj(submissionsData) {
        if (!submissionsData) return {};
        const submissionsObj = {}
        submissionsData.forEach(el => {
           submissionsObj[el.questionId] = el.status;
        })
        return submissionsObj;
    }

    function getQuestionsByCategoryObj(questionsData) {
        if (!questionsData) return {};
       // const questionsObj = {}
        // questionsData.forEach(el => {
        //     if (questionsObj.hasOwnProperty(el.category)) questionsObj[el.category].push(el);
        //     else questionsObj[el.category] = [el];
        // })
        // return questionsObj;

        return questionsData.reduce((acc, cur) => {
            if (acc[cur.category]) acc[cur.category].push(cur);
            else acc[cur.category] = [cur];
             return acc;
        }, {})

    }

    function getCorrectAnswers(questions){
        return questions.filter(el=>submissionsData[el.id]==='CORRECT').length;
    }
    if(!categoriesQuestionsData || !submissionsData ) return <div>Loading...</div>
    return (
        <>
      <h1>Interview Questions</h1>
        <div id='wrapper'>
            {
                Object.entries(categoriesQuestionsData).map(([cat, questions]) =>
                    <div className='category' key={cat}>
                        <h2>{cat} - {`${getCorrectAnswers(questions)}/${questions.length}`} </h2>
                        {
                            questions.map((el) =>
                                <div className='question' key={el.id}>
                                    <span className={submissionsData[el.id]?.toLowerCase()?.replace('_','-') ?? 'unattempted'}></span>
                                    <h3>{el.name}</h3>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
        </>

    );
};

export default AlgoQuestionsSummary;
