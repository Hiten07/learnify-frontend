/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";
import { getApis } from "../../../api/course.api";
import { Loader } from "../../../utils/Loader";
// import { useNavigate } from "react-router-dom";

interface courseDetails {
  courseid: number,
  coursename: string,
  courseprice: number,
  createdAt: string,
  deletedAt: string | null,
  description: string,
  duration: number,
  instructorid: number
  updatedAt: string
}

interface courseArray {
courses: courseDetails[]
currentPage: number,
totalItems: number, 
totalPages: number,
}

interface responseInterface {
  message: string,
  data: courseArray
}

const Dashboard = () => {
  const [coursedata, setCoursedata] = useState<courseDetails[]>([]);
  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState({
    page: 0,
    totalPages: 1,
  });

  const queryParams = {
    page: "1",
    sortBy: "duration",
    sortType: "asc",
  };

  const fetchAllCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getApis("/student/allcourses", queryParams) as responseInterface;
      console.log(response)
      if (response!.data.courses.length > 0) {
        setCoursedata(response.data.courses);
        setPagination({
          page: response.data.currentPage,
          totalPages: response.data.totalPages,
        });
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [queryParams]);

  const handlePaginationChange = (newPage: number) => {
    console.log(queryParams.page)
    queryParams.page = newPage.toString();
    fetchAllCourses();
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-8 border-2 border-indigo-600">
      <h4 className="text-2xl font-bold mb-8">My Assignments</h4>

      {!loading && coursedata.length === 0 && (
        <div className="text-center text-lg text-blue-500 mb-4">
          No assignments found
        </div>
      )}

      {loading && <Loader />}

      {loading ? (
        <div className="text-center text-lg text-blue-500 mb-4">
          Fetching courses...
        </div>
      ) : (
        coursedata.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursedata.map((course: courseDetails) => (
                <div
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  key={course.courseid}
                >
                  <h5 className="text-xl font-semibold mb-2">
                    {course.coursename}
                  </h5>
                  <p className="text-gray-600 mb-4">
                    description: {course.description}
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Price: </span>
                    {course.courseprice}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duration: {course.duration} Days
                  </p>

                  <button
                    type="button"
                    // onClick={() => Viewcoursematerial(course)}
                    className="mt-8 text-sm text-white p-2 rounded cursor-pointer"
                    style={{
                      backgroundColor: "darkblue-600",
                      fontSize: "12px",
                    }}
                  >
                    Enroll in course
                  </button>
                </div>
              ))}

              <div className="pagination flex content-center justify-center">
                <button
                  className="mt-8 w-24 text-white font-semibold py-2 rounded cursor-pointer"
                  style={{ backgroundColor: "darkblue-600" }}
                  disabled={pagination.page <= 1}
                  onClick={() => handlePaginationChange(pagination.page - 1)}
                >
                  Prev
                </button>

                <span className="font-semibold mt-12 m-5">
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                <button
                  className="mt-8 w-24 text-white font-semibold py-2 rounded cursor-pointer"
                  style={{ backgroundColor: "darkblue-600" }}
                  disabled={pagination.page >= pagination.totalPages}
                  onClick={() => handlePaginationChange(pagination.page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};
export default Dashboard;
