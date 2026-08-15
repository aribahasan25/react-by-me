function SubjectProgress() {

  const subjects = [
    {
      name:"React",
      progress:90
    },
    {
      name:"DBMS",
      progress:80
    },
    {
      name:"DSA",
      progress:60
    }
  ];


  return (

    <div className="bg-white rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-bold mb-5">
        Subjects Progress
      </h2>


      <div className="space-y-5">

        {
          subjects.map((subject)=>(

            <div key={subject.name}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {subject.name}
                </span>

                <span className="text-gray-500">
                  {subject.progress}%
                </span>

              </div>


              <div className="w-full bg-gray-200 h-2 rounded-full">

                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width:`${subject.progress}%`
                  }}
                ></div>

              </div>


            </div>

          ))
        }

      </div>


    </div>

  );
}


export default SubjectProgress;