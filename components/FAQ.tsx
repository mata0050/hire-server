import { useState } from 'react';

interface FAQInterface {
  id: number;
  question: string;
  answer: string;
}

const FAQuestion: FAQInterface[] = [
  {
    id: 1,
    question: 'What do l need to sign up ?',
    answer: `1. A detailed resume specifically highlighting your relevant experience;
             2. Photo of your proof of eligibility to work in Canada (Passport, PR Card, VISA);
             3. Email addresses for three references;
             4. Photos/certificate #s for any industry certifications/qualifications (e.g. Food Handler Certificate)
             PLEASE NOTE: You’ll need to take a selfie during the sign-up process. Dress accordingly.`,
  },
  {
    id: 2,
    question: 'Why do you check references ?',
    answer: `We pride ourselves on having the best contractors in the hospitality industry. To maintain these high standards, 
             we need to check references for a “real world” assessment of your skills/professionalism.`,
  },
  {
    id: 3,
    question: 'How do l find shift ?',
    answer: `You'll see open shifts based on your availability and distance settings so it's critical that you keep them current. You can find shifts three ways:
             1. Push or SMS notifications (can be customized under “Setting -> Notifications”);
             2. “Available Jobs” in the app; or
            3. Click the bell on the Home Page.`,
  },
  {
    id: 4,
    question: 'How quickly will l be paid ?',
    answer: `Immediately - the moment you clock out of your shift - if eligible for StaffyPay. StaffyPay is available to contractors with a minimum five shift 
             and 4.2+ rating. There is a nominal $5 transaction fee charged to the contractor. Otherwise, you'll be paid in five calendar days.`,
  },
];

interface questionInterface {
  [key: string]: boolean;
}

export default function FAQ() {

  const [showAnswer, setShowAnswer] = useState<questionInterface>(
    {} as questionInterface
  );

  const toggleBlog = (questionId: number) => {
    setShowAnswer((prev: questionInterface) =>
      !prev[questionId]
        ? { ...prev, [questionId]: true }
        : { ...prev, [questionId]: false }
    );
  };


  return (
    <>
      <section id='questions' className='p-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
          <div className='accordion accordion-flush' id='questions'>
            {FAQuestion.map((question) => (
              <div className='accordion-item' key={question.id}>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    onClick={() => toggleBlog(question.id)}
                  >
                    {question.question}
                  </button>
                </h2>
                <div
                  className={
                    showAnswer[question.id]
                      ? 'accordion-collapse '
                      : 'accordion-collapse collapse'
                  }
                >
                  <div className='accordion-body'>{question.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
