"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, PlayCircle } from "lucide-react";

type Lecture = {
  title: string;
  duration: string;
  preview?: boolean;
  type: "video" | "document";
};

type CurriculumSection = {
  title: string;
  lectures: Lecture[];
  totalLectures: number;
  totalDuration: string;
};

const curriculum: CurriculumSection[] = [
  {
    title: "Introduction to Cross-Platform Development with Flutter and Dart",
    totalLectures: 8,
    totalDuration: "39min",
    lectures: [
      { title: "Introduction to the Course", duration: "02:05", preview: true, type: "video" },
      { title: "Download the Course Syllabus", duration: "00:11", preview: true, type: "document" },
      { title: "What is Flutter?", duration: "07:52", preview: true, type: "video" },
      { title: "Why Flutter?", duration: "12:11", preview: true, type: "video" },
      { title: "The Anatomy of a Flutter App", duration: "05:27", type: "video" },
      { title: "How to Watch the Course in High Definition", duration: "01:09", type: "document" },
      { title: "How to Get the Most Out of the Course", duration: "09:33", type: "video" },
      { title: "Join the Student Community", duration: "00:27", type: "document" },
    ],
  },
  {
    title: "Setup and Installation",
    totalLectures: 15,
    totalDuration: "1hr 18min",
    lectures: [],
  },
  {
    title: "I Am Rich - How to Create Flutter Apps From Scratch",
    totalLectures: 6,
    totalDuration: "59min",
    lectures: [],
  },
  {
    title: "Running Your App on a Physical Device",
    totalLectures: 4,
    totalDuration: "26min",
    lectures: [],
  },
  {
    title: "I Am Poor - App Challenge",
    totalLectures: 5,
    totalDuration: "8min",
    lectures: [],
  },
];

export default function CourseCurriculum() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="border rounded-lg divide-y">
      {curriculum.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenSection(openSection === index ? null : index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
          >
            <div className="font-medium">{section.title}</div>
            <div className="text-sm text-gray-600">
              {section.totalLectures} lectures • {section.totalDuration}
              {openSection === index ? (
                <ChevronDown className="inline-block ml-2" size={16} />
              ) : (
                <ChevronRight className="inline-block ml-2" size={16} />
              )}
            </div>
          </button>

          {openSection === index && section.lectures.length > 0 && (
            <div className="p-4 space-y-2 bg-white">
              {section.lectures.map((lecture, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    {lecture.type === "video" ? (
                      <PlayCircle className="text-purple-600" size={18} />
                    ) : (
                      <FileText className="text-gray-500" size={18} />
                    )}
                    <span>{lecture.title}</span>
                    {lecture.preview && (
                      <span className="text-purple-600 text-xs ml-2">Preview</span>
                    )}
                  </div>
                  <div className="text-gray-500">{lecture.duration}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
