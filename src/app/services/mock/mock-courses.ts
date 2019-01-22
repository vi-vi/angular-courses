import { ICourseItem } from '../../pages/course-list-page/components/course-item/course-item-interface';

export const COURSES: ICourseItem[] = [
  {
    id: 1,
    title: 'Panda Course 1',
    creationDate: 1535768943443,
    duration: 127,
    description: 'Course 1 description',
    topRated : true
  },
  {
    id: 2,
    title: 'Fox Course 2',
    creationDate: 1545748943443,
    duration: 2,
    description: 'Course 2 description',
    topRated : false
  },
  {
    id: 3,
    title: 'Panda Fox Course 3',
    creationDate: 1545768943443,
    duration: 3,
    description: 'Course 3 description',
    topRated : true
  },
  {
    id: 4,
    title: 'Frog Fox Panda Course 4',
    creationDate: 154573394433,
    duration: 4,
    description: 'Course 4 description',
    topRated : false
  },
];
