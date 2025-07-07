"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCurriculum from "./course-content";
import {useGetVideosQuery} from "@/gql/video/get-videos.generated";

type CourseLesson = {
  title: string;
  duration: string;
};

type CourseSection = {
  title: string;
  lessons: CourseLesson[];
};

type Instructor = {
  name: string;
  bio: string;
};

type Review = {
  user: string;
  comment: string;
};

type Course = {
  id: string;
  title: string;
  description: string;
  previewVideoUrl: string;
  price: string;
  whatYouWillLearn: string[];
  curriculum: CourseSection[];
  instructor: Instructor;
  reviews: Review[];
};

const dummyCourse: Course = {
  id: "686298821abc65920fed2a8c",
  title: "Flutter Bootcamp",
  description: "Learn how to build beautiful native apps with Flutter and Dart.",
  previewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // sample video
  price: "$19.99",
  whatYouWillLearn: [
    "Build responsive UIs",
    "Work with state management",
    "Deploy to iOS & Android",
  ],
  curriculum: [
    {
      title: "Getting Started",
      lessons: [
        { title: "Introduction", duration: "3:00" },
        { title: "Setup Flutter", duration: "5:00" },
      ],
    },
    {
      title: "Basic Widgets",
      lessons: [
        { title: "Text, Column & Row", duration: "7:00" },
        { title: "Container & Image", duration: "6:00" },
      ],
    },
  ],
  instructor: {
    name: "Angela Yu",
    bio: "Angela Yu is a lead instructor at App Brewery and has taught millions of students worldwide.",
  },
  reviews: [
    { user: "Bat", comment: "Супер хичээл байна!" },
    { user: "Sarah", comment: "Easy to follow and very helpful." },
  ],
};

export default function ProductDetail() {
  const course = dummyCourse;

  const {data, loading} = useGetVideosQuery();
  console.log(data);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-4">{course.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What youll learn</h2>
            <ul className="list-disc ml-6">
              {course.whatYouWillLearn.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* TABS */}
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <div className="space-y-4">
                    <CourseCurriculum />
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
              <p className="text-gray-600">{course.instructor.bio}</p>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-2">
                {course.reviews.map((review, idx) => (
                  <div key={idx} className="border-b py-2">
                    <strong>{review.user}</strong>: {review.comment}
                  </div>
                ))}

        
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-1">
          <div className="sticky top-20 border p-4 rounded-lg shadow-lg">
            <video controls className="w-full mb-4 rounded">
              <source src={course.previewVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-xl font-bold mb-2">{course.price}</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
