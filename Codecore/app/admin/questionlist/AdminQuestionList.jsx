// AdminQuestionList.js
import { getQuestions } from '@/redux/axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminQuestionlist = ({questionList}) => {


    return (
        <div style={styles.container}>
          <h2>Question List</h2>
          <ul style={styles.questionList}>
            {questionList.map((question) => (
              <li key={question._id} style={styles.questionItem}>
                <h3>{question.questionTitle}</h3>
                <p>{question.questionBody}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    const styles = {
      container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      },
      questionList: {
        listStyleType: 'none',
        padding: 0,
      },
      questionItem: {
        marginBottom: '20px',
        border: '1px solid #e5e5e5',
        padding: '20px',
      },
    };


export default AdminQuestionlist;
