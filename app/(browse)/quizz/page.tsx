'use client'
import { Button } from '@/components/ui/button';
import { getQuiz } from '@/lib/action/quiz';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}
interface QuizItem {
  question: string;
  answers: string[];
  correctAnswer: string;
  time: number
  // Thêm các thuộc tính khác nếu có
}
const Quizz = (props: Props) => {
  const [quiz,setQuiz] = useState<QuizItem[] | undefined>([])
  const [activeQuiz, setActiveQuiz] = useState(0)
  const [answer, setAnswer] = useState("")
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [correctNumber, setCorrectNumber] = useState(0)

  const routes = useRouter();

  const handleSelected = (q:string,index: number) => {
      setActiveItem(index)
      setAnswer(q)
  }

  const handleNext = (correctAnswer: string) => {
    if (answer) {
      if (correctAnswer === answer) {
        setCorrectNumber((prev) => prev + 1);
      }
  
      if (activeQuiz + 1 === quiz?.length) {
        // Sử dụng correctNumber từ state thay vì từ biến không đồng bộ
        routes.push(`/complete?data=${correctNumber + 1}`);
      }
  
      setAnswer("");
      
      // Kiểm tra activeQuiz trước khi tăng giá trị
      setActiveQuiz((prev) => (prev < quiz?.length - 1 ? prev + 1 : prev));
      
      // Thiết lập activeItem chỉ khi activeQuiz thay đổi
      setActiveItem(null);
    }
  }

  useEffect(() => {
    const fetchDataQuiz = async () => {
      try {
        const questions = await getQuiz();
        
        
        // Xử lý dữ liệu ở đây nếu cần
        setQuiz(questions)
        
      } catch (error) {
        // Xử lý lỗi ở đây nếu cần
        console.log(error);
        
      }
    };

    fetchDataQuiz();
  }, []);
  
  return (
    <div className='container'>
      {
      (activeQuiz + 1) > quiz?.length ? (
        <div> loading</div>
      ) : (
        <div className='container'>
          <div>{activeQuiz + 1} / {quiz?.length}</div>
          {
            quiz?.map((items, index) => (
              <div key={index} className={`flex items-center justify-center flex-col gap-2  ${activeQuiz === index ? 'flex' : 'hidden'}`}>
                <div className='bg-white w-full h-20 rounded-lg border border-black flex items-center justify-center'>
                  <p className='text-center text-[25px] font-semibold'>{items?.question}</p>
                </div>
                <div className='grid grid-cols-2 w-full gap-2' >
                  {items?.answers?.map((q,index) => (
                    <div key={index} className={`w-full cursor-pointer p-6 rounded-lg border-black border ${activeItem === index ? 'bg-sky-500' : 'bg-white'}`} onClick={() => handleSelected(q,index)}>
                      <p className='text-[20px]'>{q}</p>
                    </div>
                  ))}
                </div>
                <Button onClick={() => handleNext(items.correctAnswer)}>NEXT</Button>
              </div>
            ))
          }
        </div>
      )
    }
    </div>
  )
}

export default Quizz