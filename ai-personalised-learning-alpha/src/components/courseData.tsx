import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FrontEndCourse } from "../.."
// import { Data } from "./api/input"



const CoursePage: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [courseState, setCourseState] = useState<FrontEndCourse | null>()

  const router = useRouter()
  const { courseId } = router.query

  const getCourseData = () => {
    setLoading(true);
    setTimeout((returnedValuesFromDatabase) => {
      setCourseState({
        title: "My cool course",
        description:
          "asdpfa osdkfopa sdfkaopsd kfapsdof kasdpfo kasdpf oaskdf paoskd opasdkf p",
        sectionNodes: [
          {
            title: "Section 1",
            articles: [
              {
                title: courseState.title,
                content: courseState.description,
              },
            ],
          },
          {
            title: "Section 2",
            articles: [
              {
                title: "Article Two",
                content: "This is a fun article about not a lot",
              },
            ],
          },
          {
            title: "Article Three",
            articles: [
              {
                title: "Article Three",
                content: "This is a fun article about not a lot",
              },
              {
                title: "Article Four",
                content: "This is a fun article about not a lot",
              },
            ],
          },
        ],
      });
      setLoading(false);
    }, 1000);
  };
  

  useEffect(() => {
    // check localStorage
    // if no userId present router.push("/login")

        localStorage.userid ? console.log('id is here') : router.push("../prototype2/userinput");


    getCourseData()
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      {courseState && (
        <div>
          <div>{courseState.title}</div>
          <div>{courseState.description}</div>
          <div>
            {courseState.sectionNodes.map((node) => {
              return (
                <div>
                  <div>{node.title}</div>
                  <div>
                    {node.articles.map((article) => {
                      return (
                        <div>
                          <div>{article.title}</div>
                          <div>{article.content}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default CoursePage