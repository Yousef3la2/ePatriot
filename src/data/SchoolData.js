import ahmedImg from '../assets/School Page/Ahmed Mohamed.png';
import omarImg from '../assets/School Page/Omar Samy.png';

export const curriculums = [
  { id: 1, text: "A new lesson has been added for the middle school level.", linkText: "Check the lesson" },
  { id: 2, text: "A new interactive activity has been added to the lesson (lesson name)", linkText: "Check Activity" },
  { id: 3, text: "The PDF for the lesson (lesson name) has been updated.", linkText: "Check PDF" },
  { id: 4, text: "An interactive activity for the lesson (lesson name) has been modified.", linkText: "Check Activity" },
];

export const teachersNotes = [
  { id: 1, name: "Ahmed Mohamed", img: ahmedImg, date: "3 days ago", note: "Students found it challenging to grasp the concept of brain decay; I recommend including a straightforward explanatory video." },
  { id: 2, name: "Omer Samy", img: omarImg, date: "3 days ago", note: "Students found it challenging to grasp the concept of brain decay; I recommend including a straightforward explanatory video." },
];

export const recentActivity = [
  { id: 1, text: "A new teacher has been added to the platform.", time: "15m ago" },
  { id: 2, text: "The teacher has updated the lesson (Done).", time: "15m ago" },
  { id: 3, text: "The teacher has completed the student evaluations for the lesson.", time: "15m ago" },
  { id: 4, text: "The progress of a group of students has been recorded in the lesson.", time: "15m ago" },
];