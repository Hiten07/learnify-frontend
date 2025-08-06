export interface coursedetails {
    coursename: string,
    description: string,
    duration: string,
    enrolledcourses: Enrolledcoursedetails[]
    courseprice: string,
    courseid: number
}

export interface courseDetails {
  courseid: number;
  coursename: string;
  courseprice: number;
  createdAt: string;
  deletedAt: string | null;
  description: string;
  duration: number;
  instructorid: number;
  updatedAt: string;
}

export interface courseDetails2 {
    courseid: number;
    coursename: string;
    courseprice: number;
    createdAt: string;
    deletedAt: string | null;
    description: string;
    duration: number;
    instructorid: number;
    updatedAt: string;
    enrolledcourses: {
        userid: number, 
        enrolleddate: string, 
        validuntildate: string
    }[]
  }

interface Enrolledcoursedetails {
    userid: number,
    enrolleddate: string,
    validuntildate: string,
}

export interface Coursemodule {
    id: number,
    title: string
    description: string,
    order: number,
    lessons: CourseModulelessons[]
}

export interface CourseModulelessons {
    id: number,
    title: string,
    description: string,
    videoUrl: string,
    fileUrl: string
}

export interface Coursepurchasehistory {
    courseid: number,
    coursename: string,
    courseprice: number,
    createdAt: string,
    deletedAt: string | null,
    description: string,
    duration: number,
    enrolledcourses: [],
    instructorid: number,
    updatedAt: string

}

export interface Enrolledcoursesandusersdetails {
    enrolleddate: string,
    userid: number,
    users: studentdetails
    validuntildate: string
}

interface studentdetails {
    id: number, 
    firstname: string, 
    lastname: string, 
    email: string, 
}



