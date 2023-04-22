import { useEffect } from "react";
import { useState } from "react";
import JobsInfo from "./JobsInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [currentItem, setCurretItem] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    // console.log(response);

    const data = await response.json();
    setJobs(data);
    console.log(jobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <section className="">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurretItem={setCurretItem}
      />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
      {/* {console.log(jobs)}; */}
    </section>
  );
};
export default App;
